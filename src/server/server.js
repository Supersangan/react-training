import axios from 'axios';
import express from 'express';
import ReactDom from 'react-dom/server';
import {App} from '../App';
import {indexHtmlTemplate} from './indexHtmlTemplate';

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: {username: process.env.CLIENT_ID, password: process.env.SECRET},
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

app.listen(PORT, (err) => {
  if (err) {
    console.log('Server starting faild: ', err);
  }

  console.log(`Server started on http://localhost:${PORT}`);
});

app.get('*', (req, res) => {
  res.send(
    indexHtmlTemplate(ReactDom.renderToString(App())),
  );
});