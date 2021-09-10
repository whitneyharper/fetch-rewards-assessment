const mongoose = require('mongoose');
//IF CONNECTION FAILS ON YOUR LOCAL COMPUTER. THEN REPLACED `mongodb://localhost:27017/test` PROVIDED ON LINE 3 WITH `mongodb://127.0.0.1:27017/test`
const connectionString = `mongodb://localhost:27017/test`;
module.exports = function () {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Mongo Connection Open!');
    })
    .catch((err) => {
      console.log('Mongo Connection Error!', err);
    });
};
