import React, { useState, useContext, useEffect } from 'react';
import { CharContext } from '../CharContextProvider';
import { Col, Descriptions, InputNumber } from 'antd';

const Wounds = () => {
  const { char, setChar } = useContext(CharContext)
  const stats = char.stats;
  const [currentWounds, setCurrentWounds] = useState(char.currentWounds)
  const totalWounds = Math.floor(((stats["S"].stat+stats["S"].adv) + (stats["T"].stat+stats["T"].adv)*2 + (stats["WP"].stat+stats["WP"].adv))/10)

  useEffect(() => {
    console.log('wound effect!')
    setChar(char => ({
      ...char,
      currentWounds: currentWounds
    }))
  }, [setChar, currentWounds])

  return(
    <Col span={8}>
      <Descriptions
        size="small"
        layout="vertical"
        bordered
        style={{background: '#141414'}}
        column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}
      >
        <Descriptions.Item label="Wounds">
        <InputNumber size="small" style={{maxWidth: '40%'}} min={0} max={99} defaultValue={currentWounds} onChange={setCurrentWounds} /> / {totalWounds}
        </Descriptions.Item>
        <Descriptions.Item label="+">-</Descriptions.Item>
      </Descriptions>
    </Col>
  );
}

export default Wounds;