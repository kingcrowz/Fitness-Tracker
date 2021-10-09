const express = require('express');
const db = require('./config/connection');
const htmlroutes = require('./routes/htmlRoutes');
const apiroutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(htmlroutes);
app.use(apiroutes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
