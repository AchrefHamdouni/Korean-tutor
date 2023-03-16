const { db } = require("./index.js");
const Phrase = require("./Phrase.js");

const sampleData = require("../data.json");

const insertSamplePhrases = function () {
  Phrase.create(sampleData)
  
    .then(() => {
     
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSamplePhrases();
