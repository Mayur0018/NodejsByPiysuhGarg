const mongoose = require("mongoose");

async function ConectionMongoDb(url) {
  return mongoose.connect(url).then(()=>{
    console.log("Mongo Db Connected");
    
  })
}

module.exports = ({
    ConectionMongoDb,
})