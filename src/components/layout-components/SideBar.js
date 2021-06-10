import React from 'react';
import { useHistory } from 'react-router-dom';

import { Menu } from 'antd';

const SideBar = () => {
  const history = useHistory();
  const path = history.location.pathname

  function handleClick(e) {
    history.push(e.key)
  }

  return(
    <Menu
      defaultSelectedKeys={[path]}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.Item key="/" onClick={handleClick}>Home Page</Menu.Item>
      <Menu.Item key="/list" onClick={handleClick}>Character List</Menu.Item>
    </Menu>
  );
}

export default SideBar;