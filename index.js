const db = require('./app/db/db.config');
var routes = require('./app/routes/main.routes');
var express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
var app = express();
// var corsOptions = {
//     origin: "http://localhost:8086"
//   };
app.use(cors({
  origin: 'http://localhost:3001',
}));
//   app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use('/',routes);

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// console.log(PORT);