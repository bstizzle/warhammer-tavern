import React, { useState, useContext, useEffect } from 'react';
import { CharContext } from '../CharContextProvider';
import { Descriptions, InputNumber, Button, Typography } from 'antd';
const { Text } = Typography;

const Movement = () => {
  const { char, setChar } = useContext(CharContext);
  const move = char.movement;
  const [moveState, setMoveState] = useState(move);

  useEffect(() => {
    console.log('move effect!')
    setChar(char => ({
      ...char,
      move: moveState
    }))
  }, [setChar, moveState])

  return(
    <Descriptions
      size="small"
      layout="vertical"
      bordered
      style={{background: '#141414'}}
      column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
    >
      <Descriptions.Item key="movement" label="Movement">
        <Button>
          <Text>
            Move: {moveState} | Walk: {moveState*2} | Run: {moveState*4}
          </Text>
        </Button>
      </Descriptions.Item>
    </Descriptions>
  );
}

export default Movement;