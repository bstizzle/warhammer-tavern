import React, { useContext } from 'react';
import { CharContext } from '../../CharContextProvider';
import EditableTable from '../../table-components/EditableTable';

const Spells = () => {
  const { char } = useContext(CharContext)
  const spells = char.spells;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      editable: true
    },
    {
      title: 'CN',
      dataIndex: 'cn',
      key: 'cn',
      width: '10%',
      editable: true
    },
    {
      title: 'Range',
      dataIndex: 'range',
      key: 'range',
      width: '10%',
      editable: true
    },
    {
      title: 'Target',
      dataIndex: 'target',
      key: 'target',
      width: '15%',
      editable: true
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      width: '15%',
      editable: true
    },
    {
      title: 'Effect',
      dataIndex: 'effect',
      key: 'effect',
      width: '30%',
      editable: true
    },
  ]

  let i = 0
  const spellData = []
  spells.forEach(s => {
    spellData.push({
      key: i,
      type: 'spell',
      name: s.name,
      cn: s.cn,
      range: s.range,
      target: s.target,
      duration: s.duration,
      effect: s.effect
    })
    i++;
  })

  return(
    <EditableTable data={spellData} columns={columns} />
  )
}

export default Spells;