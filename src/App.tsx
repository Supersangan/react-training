import React from 'react';
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

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
  return (
    <Provider store={store}>
      <Token />
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <CardsList />
          </Content>
        </Layout>
      </UserContextProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
