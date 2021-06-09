import React, { useContext } from 'react';
import { CharContext } from '../CharContextProvider';
import StatItem from './StatItem';

import { Descriptions } from 'antd';

const Stats = () => {
  const { char } = useContext(CharContext)
  const stats = char.stats

  const statKeys = Object.keys(stats)

  const allStats = statKeys.map(s => {
    if(s !== '__typename'){
      return(
        <Descriptions.Item key={s} label={s}>
          <StatItem key={s} s={s} stats={stats} />
        </Descriptions.Item>
      )
    } else {
      return null;
    }
  })

  return(
    <Descriptions
      size="small"
      layout="vertical"
      bordered
      style={{background: '#141414'}}
      column={{ xxl: 10, xl: 10, lg: 5, md: 5, sm: 3, xs: 3 }}
    >
      {allStats}
    </Descriptions>
  );
}

export default Stats;