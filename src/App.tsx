import React from 'react';
import './main.global.less';
import { hot } from 'react-hot-loader/root';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import { Dropdown } from './shared/Dropdown';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />

        <div style={{padding: 20}}>
          <Dropdown 
            onClose={() => console.log('closed')}
            onOpen={() => console.log('opened')}
            isOpen={false} 
            button={<button>Test</button>}
          >
            <CardsList />
          </Dropdown>
        </div>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
