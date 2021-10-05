import React, { useContext } from 'react';
import { CharContext } from '../../CharContextProvider';
import { Row, Col } from 'antd';
import EditableTable from '../../table-components/EditableTable';

const BscSkills = () => {
  const { char } = useContext(CharContext)
  const basicSkills = char.basicSkills;
  const stats = char.stats;
  // console.log(stats)
  // console.log(basicSkills)

  function totalSkill(stat, adv) {
    // console.log(stats[stat].stat)
    // console.log(stats[stat].adv)
    // console.log(adv)
    let skill = stats[stat].stat + stats[stat].adv + adv;
    return skill;
  }

  const bscColumns = [
    {
      title: 'Basic Skills',
      dataIndex: 'name',
      key: 'name',
      width: '40%'
    },
    {
      title: 'Stat',
      dataIndex: 'stat',
      key: 'stat',
      width: '15%'
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
      key: 'total',
      width: '15%'
    }
  ]

  let i = 0
  const bscData1 = []
  const bscData2 = []
  basicSkills.forEach(k => {
    // console.log(k)
    const total = totalSkill(k.stat, k.adv)
    // console.log(total)
    if(i < 13){ 
      bscData1.push({
        key: i,
        type: 'bscSkill',
        name: k.name,
        stat: k.stat,
        adv: k.adv,
        total: total
      })
    } else {
      bscData2.push({
        key: i,
        type: 'bscSkill',
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
        <EditableTable data={bscData1} columns={bscColumns}/>
      </Col>
      <Col span={12}>
        <EditableTable data={bscData2} columns={bscColumns}/>
      </Col>
    </Row>
  );
}

export default BscSkills;