import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { CharContextProvider } from './components/CharContextProvider';

import CharacterList from './components/CharacterList';
import CharacterSheet from './components/CharacterSheet';
import Banner from './components/Banner';
import Home from './components/Home';
import SideBar from './components/SideBar';
import FootBar from './components/FootBar';
import parchment from './textures/parchment.jpg';
// import darkParchment from './textures/dark-parchment.jpg';
import { Layout } from 'antd';
const { Header, Sider, Footer, Content} = Layout;

const App = () => {
  const [charId, setCharId] = useState("60bfb775ef024a09d4a2c8c3")
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header>
        <Banner />
      </Header>
      <Layout>
        <Sider>
            <SideBar />
        </Sider>
        <Content style={{padding: '1%', backgroundImage: `url(${parchment})`, backgroundSize: 'cover'}}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/list'>
            <CharacterList setCharId={setCharId} />
          </Route>
          <Route path='/sheet'>
            <CharContextProvider id={charId}>
              <CharacterSheet />
            </CharContextProvider>
          </Route>
        </Content>
      </Layout>
      <Footer>
        <FootBar />
      </Footer>
    </Layout>
  );
}

export default App;
