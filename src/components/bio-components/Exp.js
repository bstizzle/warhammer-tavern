import React, { useState, useContext, useEffect } from 'react';
import { CharContext } from '../CharContextProvider';
import { Descriptions, InputNumber, Button, Typography } from 'antd';
const { Text } = Typography;

const Exp = () => {
  const { char, setChar } = useContext(CharContext)
  const exp = char.exp
  const [currentState, setCurrentState] = useState(exp.current)
  const [spentState, setSpentState] = useState(exp.spent)
  console.log(exp)

  useEffect(() => {
    console.log('exp effect!')
    setChar(char => ({
      ...char,
      exp: {
        current: currentState,
        spent: spentState
      }
    }))
  }, [setChar, currentState, spentState])

  return(
    <Descriptions
      size="small"
      layout="vertical"
      bordered
      style={{background: '#141414'}}
      column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
    >
      <Descriptions.Item key="experience" label="Experience">
        <Button>
          <Text>
            Current: {currentState} | Spent: {spentState} | Total: {currentState + spentState}
          </Text>
        </Button>
      </Descriptions.Item>
    </Descriptions>
  );
}

export default Exp;