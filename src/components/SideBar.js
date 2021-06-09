import React from 'react';
import { useHistory } from 'react-router-dom';

import { Menu } from 'antd';

const Home = () => {
  const history = useHistory();
  const path = history.location.pathname

  function handleClick(e) {
    if(e.key === '/') {
      history.push(e.key)
    } else if(e.key === '/sheet'){
      history.push(e.key)
    }
  }

  return(
    <Menu
      defaultSelectedKeys={[path]}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.Item key="/" onClick={handleClick}>Home Page</Menu.Item>
      <Menu.Item key="/sheet" onClick={handleClick}>Character Sheet</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );
}

export default Home;