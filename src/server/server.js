import axios from 'axios';
import express from 'express';
import ReactDom from 'react-dom/server';
import {App} from '../App';
import {indexHtmlTemplate} from './indexHtmlTemplate';
import compression from 'compression';
import helmet from 'helmet';

const port = process.env.PORT || 3000;
const homePage = process.env.HOME;
const clientId = process.env.CLIENT_ID;
const secret = process.env.SECRET;

const IS_DEV = process.env.NODE_ENV !== 'production';

const app = express();

if (!IS_DEV) {
  app.use(compression());
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
}

console.log('IS_DEV:',IS_DEV);

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${homePage}/auth`,
    {
      auth: {username: clientId, password: secret},
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

app.listen(port, (err) => {
  if (err) {
    console.log('Server starting faild: ', err);
  }

  console.log(`Server started on http://localhost:${port}`);
});

app.get('*', (req, res) => {
  res.send(
    indexHtmlTemplate(ReactDom.renderToString(App())),
  );
});