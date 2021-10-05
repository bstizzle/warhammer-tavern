import React, { useState, useContext, useEffect } from 'react';
import { CharContext } from '../CharContextProvider';
import { Descriptions, Popover, InputNumber, Button, Typography } from 'antd';
const { Text } = Typography;

const Exp = () => {
  const { char, setChar } = useContext(CharContext)
  const exp = char.exp
  const [currentState, setCurrentState] = useState(exp.current)
  const [spentState, setSpentState] = useState(exp.spent)
  const [visible, setVisible] = useState(false)
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
      column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
    >
      <Descriptions.Item key="experience" label="Experience">
        <Popover
          content={
            <>
            <span>Current:</span> <InputNumber
              style={{maxWidth: '60px'}}
              size="small"
              min={0}
              max={9999}
              defaultValue={currentState}
              onChange={setCurrentState}
            /><br/>
            <span>Spent:</span> <InputNumber
              style={{maxWidth: '60px'}}
              size="small"
              min={0}
              max={9999}
              defaultValue={spentState}
              onChange={setSpentState}
            />
            </>
          }
          title='Experience'
          trigger="click"
          visible={visible}
          onVisibleChange={handleVisible}
        >
          <Button>
            <Text>
              Current: {currentState} | Spent: {spentState} | Total: {currentState + spentState}
            </Text>
          </Button>
        </Popover>
      </Descriptions.Item>
    </Descriptions>
  );
}

export default Exp;