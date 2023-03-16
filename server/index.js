const express = require('express');
const {getAllPhrases,updatePhrase}=require('../database/index.js')
const cors = require('cors')
const db = require('../database');
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api/phrases', (req, res) => {
  getAllPhrases().then((data) =>
  res.json(data))
});

//TODO - add additional route handlers as necessary


app.patch('/api/phrases/:phraseId',(req, res) => {
  updatePhrase(req.params.phraseId,req.body.status).then((data)=> res.json(data))
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
