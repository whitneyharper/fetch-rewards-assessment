const express = require('express');
const app = express();
const port = 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./src/routes/transactionRoutes');

//==================================================
// DATABASE
//==================================================
const dbSetup = require("./src/databases/setup");
dbSetup();

//==================================================
// Routes
//==================================================
app.use('/transactions', routes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})