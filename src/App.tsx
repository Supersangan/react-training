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
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Post } from './shared/Post';
import { Page404 } from './shared/Page404';
import { action, Action, createStore as createEasyStore, StoreProvider as EasyStoreProvider } from 'easy-peasy';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export interface IStoreModel {
  comment: string;
  updateComment: Action<IStoreModel, string>
}

export const easyStore = createEasyStore<IStoreModel>({
  comment: 'Hello from easy-peasy!',
  updateComment: action((state, payload) => {
    state.comment = payload;
  }),
});

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <EasyStoreProvider store={easyStore}>
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

                      <Route path="/posts/:id" component={Post} />
                    </Route>

                    <Route path="/">
                      <Page404 />
                    </Route>
                  </Switch>
                </Content>
              </Layout>
            </UserContextProvider>
          </BrowserRouter>
        )}
      </Provider>
    </EasyStoreProvider>
  );
}

export const App = hot(() => <AppComponent />);
