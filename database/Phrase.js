const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const phraseSchema = new mongoose.Schema({
  kor: String,
  eng: String,
  rom: String,
  status: {
    type: String,
    enum: ["Not yet", "Almost", "Got it"],
    default: "Not yet"
  }
});

const Phrase = mongoose.model("Phrase", phraseSchema);

module.exports = Phrase;
