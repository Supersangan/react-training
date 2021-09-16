import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import { EColors, Text } from './shared/Text';
import { Break } from './shared/Break';
import { EIcons, Icon } from './shared/Icon';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
