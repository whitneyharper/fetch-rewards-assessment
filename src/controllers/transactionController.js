const { TransactionModel } = require('../models/transactions');

//FUNCTION TO FETCH TRANSACTIONS FROM DATABASE
exports.getTransactions = (req, res) => {
    TransactionModel.find({}, (err, transactions) => {
            if (err) {
                return res.status(404).json({message: err})
            } else {
                return res.status(200).json({transactions});
            }
        })
};

//FUNCTION TO CREATE A NEW TRANSACTION TO DATABASE
exports.addTransaction = (req, res) => {
    TransactionModel.create({
        payer: req.body.payer,
        points: req.body.points,
        timestamp: req.body.timestamp
    }, (err, newTransaction) => {
        if (err) {
            return res.status(500).json({message: err});
        } else {
            return res.status(200).json({message: 'new transaction created', newTransaction});
            }
        }
    )  
};

//FUNCTION TO FETCH ALL BALANCES PER PAYER
exports.getBalance = (req, res) => {
        TransactionModel.aggregate([
            {$match: {}}, 
            {$group: {_id: "$payer", points: {$sum: "$points"}}},
            {$project: {_id: 1, points: 1}}
        ], (err, balances) => {
            if (err) {
                return res.json({message: err});
            } else {
                return res.status(200).json({balances});
            }
        })
};

//FUNCTION TO SPEND POINTS
exports.spendPoints = async(req, res) => {
    try {
        let deductedPoints = req.body.points;
        const sortedTransactions = await TransactionModel.find({}).sort({timestamp: 'asc'}).exec();
        let payers = [];
        sortedTransactions.forEach((transactions, index, array) => {
            if (deductedPoints > 0) {
                let deductedBalance = deductedPoints;
                    deductedPoints -= transactions.points;
                    let currentBalance 
                    if (deductedPoints > 0) {
                        currentBalance = deductedPoints - deductedBalance
                    } else {
                        currentBalance = -deductedBalance
                    }
                        let existingPayer = payers.find((payer) => {
                            return payer.payer == transactions.payer;
                        });
                        if (existingPayer) {
                            payers[payers.indexOf(existingPayer)].points += currentBalance
                        } else {
                            payers.push({payer: transactions.payer, points: currentBalance})
                        }   
                        if (transactions.points > 0){
                            transactions.points += currentBalance
                        } else {
                            transactions.points -= currentBalance
                        }
                    transactions.save((err, done) => {
                        console.log('Transactions saved.');
                     })
            }
        })
        return res.send(payers);
    } catch (err) {
        return res.status(500).send(err);
    }
};

