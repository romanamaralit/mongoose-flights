const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    new: newTicket,
    create,
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('tickets/new', { flight })
    })
}

function create(req, res) {
    req.body.flight = req.params.id
    const ticket = new Ticket(req.body);
    ticket.save(function (err) {
        res.redirect(`/flights/${req.params.id}`)
    });
}