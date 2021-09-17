import express from 'express';
import ReactDom from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(
    indexTemplate(ReactDom.renderToString(App())),
  );
});

app.get('/auth', (req, res) => {
  // req.query.code;
  
  res.send(
    indexTemplate(ReactDom.renderToString(App())),
  );
});

app.listen(3000, (err) => {
  if (err) {
    console.log('Server starting faild: ', err);
  }

  console.log('Server started on http://localhost:3000');
});