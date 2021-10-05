import React, { useState, useContext, useEffect } from 'react';
import { CharContext } from '../CharContextProvider';
import { Descriptions, Popover, InputNumber, Button, Typography } from 'antd';
const { Text } = Typography;

const Movement = () => {
  const { char, setChar } = useContext(CharContext);
  const move = char.movement;
  const [moveState, setMoveState] = useState(move);
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    console.log('move effect!')
    setChar(char => ({
      ...char,
      move: moveState
    }))
  }, [setChar, moveState])
  
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
      <Descriptions.Item key="movement" label="Movement">
        <Popover
          content={
            <>
            <span>Move:</span> <InputNumber
              style={{maxWidth: '60px'}}
              size="small"
              min={0}
              max={10}
              defaultValue={moveState}
              onChange={setMoveState}
            />
            </>
          }
          title='Movement'
          trigger="click"
          visible={visible}
          onVisibleChange={handleVisible}
        >
          <Button>
            <Text>
              Move: {moveState} | Walk: {moveState*2} | Run: {moveState*4}
            </Text>
          </Button>
        </Popover>
      </Descriptions.Item>
    </Descriptions>
  );
}

export default Movement;