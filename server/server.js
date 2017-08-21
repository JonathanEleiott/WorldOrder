import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();

const headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

const sendResponse = (res, statusCode, headersSent, responseMessage) => {
  console.log(responseMessage);
  res.writeHead(statusCode, headersSent);
  res.end(responseMessage);
};

app.set('views', __dirname + '/../app');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + './../app'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => {
  console.log(`You are listening on port ${process.env.PORT || 3000}!`);
});

app.get('*', (req, res) => {
  console.log('Request handled!');
  res.render('index.html');
})
