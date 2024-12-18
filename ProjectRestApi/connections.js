const mongoose = require("mongoose");

async function ConectionMongoDb(url) {
  return mongoose.connect(url);
}

module.exports = ({
    ConectionMongoDb,
})