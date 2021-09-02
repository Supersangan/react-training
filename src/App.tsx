import React from 'react';
import './main.global.less';
import { hot } from 'react-hot-loader/root';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import { GenericList } from './shared/GenericList';
import { generateId, generateRandomString } from './utils/react/generateRandomIndex';
import { merge } from './utils/js/merge';
// import { MyList } from './shared/MyList';

const LIST = [
  { As: 'li' as const, text: 'some' }, 
  { As: 'li' as const,  text: 'other' }, 
  { As: 'li' as const,  text: 'another' },
].map(generateId);

function AppComponent() {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id != id));
  }

  const handleAdd = () => {
    setList(list.concat(generateId({ text: generateRandomString(),  As: 'li' as const })));
  }

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <button onClick={handleAdd}>Add Element</button>
        
        <ul>
          <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
        </ul>

        {/* <MyList list={list.map(merge({ onClick: () => { console.log('click') } }))} /> */}
        {/* <MyList list={list.map((item) => ({...item, onClick: () => {console.log(item.id) } }))} /> */}
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
