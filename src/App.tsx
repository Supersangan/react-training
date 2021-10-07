import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import { UserContextProvider } from './shared/context/userContext';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/reducer';
import { Token } from './shared/Token';
import thunk from 'redux-thunk';
import {
  BrowserRouter,
  Redirect,
  Route,
  StaticRouter,
  Switch,
} from 'react-router-dom';
import { Post } from './shared/Post';
import { Page404 } from './shared/Page404';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/posts/" />
            <Redirect from="/auth" to="/posts/" />
          </Switch>

          <Token />

          <UserContextProvider>
            <Layout>
              <Header />

              <Content>
                <Switch>
                  <Route path="/posts/">
                    <CardsList />

                    <Route path="/posts/:id">
                      <Post />
                    </Route>
                  </Route>

                  <Route path="/*">
                    <Page404 />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </UserContextProvider>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
