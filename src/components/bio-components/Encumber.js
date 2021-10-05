import React, { useContext } from 'react';
import { CharContext } from '../CharContextProvider';
import { Descriptions, Button, Typography } from 'antd';
const { Text } = Typography;

const Encumber = () => {
  const { char } = useContext(CharContext);
  const stats = char.stats

  return(
    <Descriptions
      size="small"
      layout="vertical"
      bordered
      style={{background: '#141414'}}
      column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
    >
      <Descriptions.Item key="Encumber" label="Encumber">
        <Button>
          <Text>
            Current: 0 | Max: {Math.floor(((stats["S"].stat+stats["S"].adv) + (stats["T"].stat+stats["T"].adv))/10)}
          </Text>
        </Button>
      </Descriptions.Item>
    </Descriptions>
  );
}

export default Encumber;