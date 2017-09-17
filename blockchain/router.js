const router = require('express').Router();
const ticketsCtrl = require('./tickets.controller');

router.get('/', ticketsCtrl.listAllTickets);
router.post('/', ticketsCtrl.createTicket);

router.put('/:id', ticketsCtrl.transferTicket);

router.get('/history/:id', ticketsCtrl.getTicketHistory);

module.exports = router;