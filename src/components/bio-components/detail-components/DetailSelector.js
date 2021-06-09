import React from 'react';
import BscSkills from './BscSkills';
import AdvSkills from './AdvSkills';
import Talents from './Talents';
import Trappings from './Trappings';
import Armor from './Armor';
import Weapons from './Weapons';

import { Tabs } from 'antd'
const { TabPane } = Tabs;

const DetailSelector = () => {
  return(
    <Tabs
      mode="horizontal"
      centered
      style={{background: '#141414', paddingLeft: '3px', paddingRight: '3px'}}  
    >
        <TabPane tab="Basic Skills" key="Basic Skills">
          <BscSkills />
        </TabPane>
        <TabPane tab="Advanced Skills" key="Advanced Skills">
          <AdvSkills />
        </TabPane>
        <TabPane tab="Talents" key="Talents">
          <Talents />
        </TabPane>
        <TabPane tab="Trappings" key="Trappings">
          <Trappings />
        </TabPane>
        <TabPane tab="Armor" key="Armor">
          <Armor />
        </TabPane>
        <TabPane tab="Weapons" key="Weapons">
          <Weapons />
        </TabPane>
    </Tabs>
  );
}

export default DetailSelector;