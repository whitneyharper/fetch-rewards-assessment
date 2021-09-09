const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, getBalance, spendPoints } = require('../controllers/transactionController');

//GET ROUTE TO VIEW ALL TRANSACTIONS
router.get('/view', getTransactions);
//GET ROUTE TO VIEW BALANCES PER PAYER
router.get('/balances', getBalance);
//POST ROUTE TO SPEND POINTS
router.post('/spend', spendPoints);
//GET ROUTE TO CREATE A NEW TRANSACTION
router.post('/add', addTransaction);


module.exports = router;