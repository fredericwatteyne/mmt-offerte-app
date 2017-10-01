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
    getAllPrimaireCollectorOffertes: getAllPrimaireCollectorOffertes
};

function getAllPrimaireCollectorOffertes(req, res, next) {
    db.any('select * from primaireCollectorOffertes')
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