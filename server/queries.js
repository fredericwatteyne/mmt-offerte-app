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
    getSinglePrimaireCollectorOffertes: getSinglePrimaireCollectorOffertes
};

function getAllPrimaireCollectorOffertes(req, res, next) {
    db.any('select offerteId, afstandTussenUitgangen from primaireCollectorOffertes')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL primaireCollectorOffertes'
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getSinglePrimaireCollectorOffertes(req, res, next) {
    var offerteId = req.params.id;
    db.one('select offerteId,afstandTussenUitgangen from primaireCollectorOffertes where offerteId = $1', offerteId)
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE primaireCollectorOffertes'
                });
        })
        .catch(function(err) {
            return next(err);
        });
}