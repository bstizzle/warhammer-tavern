import React from 'react';
import { Route } from 'react-router-dom';

import { CharContextProvider } from './components/CharContextProvider';
import netlifyIdentity from "netlify-identity-widget";

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
  // const [user, setUser] = useState(localStorage.getItem("currentOpenSaucedUser"));

  const handleLogin = (e) => {
    e.preventDefault()
    netlifyIdentity.open()
  }

  const handleLogout = (e) => {
    e.preventDefault()
    netlifyIdentity.logout();
  }

  netlifyIdentity.on('login', user => console.log('login', user))
  netlifyIdentity.on('logout', user => console.log('logout', user))

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header>
        <Banner />
      </Header>
      <Layout>
        <Sider>
            <SideBar />
        </Sider>
        <Content
          style={{
            padding: '1%',
            backgroundImage: `url(${parchment})`,
            backgroundSize: 'cover'
          }}
        >
          <Route exact path='/'>
            <button onClick={handleLogin}>Log In with Netlify</button>
            <button onClick={handleLogout}>Log Out with Netlify</button>
            <Home />
          </Route>
          <Route path='/list'>
            <CharacterList />
          </Route>
          <Route path='/sheet/:id'>
            <CharContextProvider>
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
