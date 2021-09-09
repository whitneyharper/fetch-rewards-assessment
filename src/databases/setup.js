const mongoose = require('mongoose');
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