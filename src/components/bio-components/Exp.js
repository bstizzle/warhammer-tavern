import React, { useState } from 'react';
import { Descriptions, InputNumber } from 'antd';

const Exp = () => {
  // const { char, setChar } = useContext(CharContext)
  // const exp = char.exp
  const [currentState, setCurrentState] = useState(100)
  const [spentState, setSpentState] = useState(350)

  return(
    <Descriptions
      size="small"
      layout="vertical"
      bordered
      style={{background: '#141414'}}
      column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
    >
      <Descriptions.Item key="current" label="Current">
        <InputNumber
          size="small"
          style={{maxWidth: '40%'}}
          min={0}
          max={10000}
          defaultValue={currentState}
          onChange={setCurrentState}
        />
      </Descriptions.Item>
      <Descriptions.Item key="spent" label="Spent">
        <InputNumber
          size="small"
          style={{maxWidth: '40%'}}
          min={0}
          max={10000}
          defaultValue={spentState}
          onChange={setSpentState}
        />
      </Descriptions.Item>
      <Descriptions.Item key="total" label="Total">
        {currentState + spentState}
      </Descriptions.Item>
    </Descriptions>
  );
}

export default Exp;