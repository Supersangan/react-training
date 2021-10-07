import axios from 'axios';
import express from 'express';
import ReactDom from 'react-dom/server';
import {App} from '../App';
import {indexHtmlTemplate} from './indexHtmlTemplate';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: {username: process.env.CLIENT_ID, password: 'ohL3NNifgIJ9yKIC98ADygha5KJyRA'},
      headers: {'Content-type': 'application/x-www-form-urlencoded'},
    }
  )
    .then(({data}) => {
      res.send(
        indexHtmlTemplate(ReactDom.renderToString(App()), data['access_token']),
      );
    })
    .catch(console.log)
});

app.listen(3000, (err) => {
  if (err) {
    console.log('Server starting faild: ', err);
  }

  console.log('Server started on http://localhost:3000');
});

app.get('*', (req, res) => {
  res.send(
    indexHtmlTemplate(ReactDom.renderToString(App())),
  );
});