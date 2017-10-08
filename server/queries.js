var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/mmt-offerte';
var db = pgp(connectionString);

// add query functions

module.exports = {
    getAllPrimaireCollectorOffertes: getAllPrimaireCollectorOffertes,
    getSinglePrimaireCollectorOffertes: getSinglePrimaireCollectorOffertes,
    getAllContactAanvragen: getAllContactAanvragen,
    createContactAanvraag: createContactAanvraag
};

function getAllPrimaireCollectorOffertes(req, res, next) {
    db.any('select offerteId, afstandTussenUitgangen from secundaireaireCollectorOffertes')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL secundaireaireCollectorOffertes'
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getSinglePrimaireCollectorOffertes(req, res, next) {
    var offerteId = req.params.id;
    db.one('select offerteId,afstandTussenUitgangen from secundaireaireCollectorOffertes where offerteId = $1', offerteId)
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE secundaireaireCollectorOffertes'
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function createContactAanvraag(req, res, next) {
    req.body.contactId = Guid.newGuid();
    db.none('insert into contactaanvraag(contactId, naam, bedrijf, email, tel, bericht)' +
            'values(${contactId}, ${naam}, ${bedrijf}, ${email}, ${tel}, ${bericht})',
            req.body)
        .then(function() {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one contactAanvraag'
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getAllContactAanvragen(req, res, next) {
    db.any('select contactId, naam, bedrijf, email, tel, bericht from contactaanvraag')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL contactAanvragen'
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}