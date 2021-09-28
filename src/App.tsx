import React, { useEffect } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';
import { Token } from './shared/Token';


function AppComponent() {
  const store = createStore(rootReducer, composeWithDevTools());
  
  return (
    <Provider store={store}>
      <Token />
      <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
function dispatch() {
  throw new Error('Function not implemented.');
}

