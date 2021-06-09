import React, { useContext } from 'react';
import { CharContext } from '../../CharContextProvider';
import { Row, Col } from 'antd';
import EditableTable from '../../table-components/EditableTable';

const AdvSkills = () => {
  const { char } = useContext(CharContext)
  const advSkills = char.advSkills;
  const stats = char.stats;

  function totalSkill(stat, adv) {
    let skill = stats[stat].stat + stats[stat].adv + adv;
    return skill;
  }

  const advColumns = [
    {
      title: 'Advanced Skills',
      dataIndex: 'name',
      key: 'name',
      editable: true
    },
    {
      title: 'Stat',
      dataIndex: 'stat',
      key: 'stat',
      editable: true
    },
    {
      title: 'Adv',
      dataIndex: 'adv',
      key: 'adv',
      editable: true
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total'
    }
  ]

  let i = 0
  const advData1 = []
  const advData2 = []
  advSkills.forEach(k => {
    const total = totalSkill(k.stat, k.adv)
    if(i < 13){ 
      advData1.push({
        key: i,
        type: 'advSkill',
        name: k.name,
        stat: k.stat,
        adv: k.adv,
        total: total
      })
    } else {
      advData2.push({
        key: i,
        type: 'advSkill',
        name: k.name,
        stat: k.stat,
        adv: k.adv,
        total: total
      })
    }
    i++;
  })

  return(
    <Row>
      <Col span={12}>
        <EditableTable data={advData1} columns={advColumns}/>
      </Col>
      <Col span={12}>
        <EditableTable data={advData2} columns={advColumns}/>
      </Col>
    </Row>
  );
}

export default AdvSkills;