const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1:27017";
const Phrase = require("./Phrase.js");

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

/**
 * Start writing code below this line
 */


const getAllPhrases = function () {
  return Phrase.find({})
};


const updatePhrase=async(id,status)=>{
  let selectedPhrase= await  Phrase.findByIdAndUpdate(id,{status:status})
  return selectedPhrase
}

module.exports = {
  db,
  getAllPhrases,
  updatePhrase
};
