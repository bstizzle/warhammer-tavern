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
  const [currentUser, setCurrentUser] = useState(netlifyIdentity.currentUser() ? netlifyIdentity.currentUser().id : null)

  // const fetchLogin = () => {
  //   return fetch('/.netlify/functions/identity-login')
  //     .then(res => res.json())
  //     .then(json => console.log(json))
  // }

  // fetchLogin()

  //netlify identity listeners to set user state
  netlifyIdentity.on('login', user => {
    netlifyIdentity.close();
    setCurrentUser(user.id)
  })
  netlifyIdentity.on('logout', user => {
    setCurrentUser(null)
  })

  console.log(netlifyIdentity.currentUser())
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
            <Home user={currentUser} />
          </Route>
          <Route path='/login'>
            <Login user={currentUser} />
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
