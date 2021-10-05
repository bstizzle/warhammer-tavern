import React, { useState } from 'react';
import { Route } from 'react-router-dom';

//context and auth imports
import { CharContextProvider } from './components/CharContextProvider';
import netlifyIdentity from "netlify-identity-widget";

//component imports
import { Banner, FootBar, SideBar } from './components/layout-components/layoutExport';
import { CharacterList, CharacterSheet, Home, Login } from './pages/pageExport';

//styling imports
import parchment from './textures/parchment.jpg';
import { Layout } from 'antd';
const { Header, Sider, Footer, Content} = Layout;

const App = () => {
  const [currentUser, setCurrentUser] = useState(netlifyIdentity.currentUser())

  //netlify identity listeners to set user state
  netlifyIdentity.on('login', user => {
    netlifyIdentity.close();
    setCurrentUser(user)
  })
  netlifyIdentity.on('logout', user => {
    setCurrentUser(null)
  })

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
            {currentUser ?
              <Home />
              :
              <Login />
            }
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/list'>
            {currentUser ?
              <CharacterList />
              :
              <Login />
            }
          </Route>
          <Route path='/sheet/:id'>
            {currentUser ?
              <CharContextProvider>
                <CharacterSheet />
              </CharContextProvider>
              :
              <Login />
            }
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
