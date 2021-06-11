import React, { useState, useContext, useEffect } from 'react';
import { CharContext } from '../CharContextProvider';
import {
  Descriptions,
  InputNumber,
  Button,
  Popover,
  Typography } from 'antd';
const { Text } = Typography;

const WoundsWealth = () => {
  const { char, setChar } = useContext(CharContext)
  const stats = char.stats;
  const [currentWounds, setCurrentWounds] = useState(char.currentWounds)
  const [d, setD] = useState(10)
  const [ss, setSs] = useState(5)
  const [gc, setGc] = useState(1)
  const [visible, setVisible] = useState(false)
  const totalWounds = Math.floor(((stats["S"].stat+stats["S"].adv) + (stats["T"].stat+stats["T"].adv)*2 + (stats["WP"].stat+stats["WP"].adv))/10)

  useEffect(() => {
    console.log('wound effect!')
    setChar(char => ({
      ...char,
      currentWounds: currentWounds
    }))
  }, [setChar, currentWounds])

  function handleVisible(){
    if(visible === false){
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  return(
    <Descriptions
      size="small"
      layout="vertical"
      bordered
      style={{background: '#141414'}}
      column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      <Descriptions.Item label="Wounds">
        <InputNumber
          size="small"
          style={{maxWidth: '40%'}}
          min={0}
          max={99}
          defaultValue={currentWounds}
          onChange={setCurrentWounds}
        /> / {totalWounds}
      </Descriptions.Item>
      <Descriptions.Item label="Wealth">
        <Popover
          content={
            <>
            <span style={{color: '#8b4513'}}>D:</span> <InputNumber 
              style={{maxWidth: '60px'}} 
              size="small"
              min={0}
              max={99}
              defaultValue={d}
              onChange={setD}
            /><br/> 
            <span style={{color: '#808080'}}>SS:</span> <InputNumber
              style={{maxWidth: '60px'}}
              size="small"
              min={0}
              max={99}
              defaultValue={ss}
              onChange={setSs}
            /><br/> 
            <span style={{color: '#d3af37'}}>GC:</span> <InputNumber
              style={{maxWidth: '60px'}}
              size="small"
              min={0}
              max={99}
              defaultValue={gc}
              onChange={setGc}
            />
            </>
          }
          title='Wealth'
          trigger="click"
          visible={visible}
          onVisibleChange={handleVisible}
        >
          <Button size="small">
            <Text>
              <span style={{color: '#8b4513'}}>D:</span> 10 | 
              <span style={{color: '#808080'}}>SS:</span> 5 | 
              <span style={{color: '#d3af37'}}>GC:</span> 1
            </Text>
          </Button>
        </Popover>
      </Descriptions.Item>
    </Descriptions>
  );
}

export default WoundsWealth;