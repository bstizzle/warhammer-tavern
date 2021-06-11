import React, { useContext } from 'react';
import { CharContext } from '../../CharContextProvider';
import EditableTable from '../../table-components/EditableTable';

const Weapons = () => {
  const { char } = useContext(CharContext);
  const weapons = char.weapons;
  console.log(weapons)
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      editable: true
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
      width: '10%',
      editable: true
    },
    {
      title: 'Enc',
      dataIndex: 'enc',
      key: 'enc',
      editable: true
    },
    {
      title: 'Range',
      dataIndex: 'range',
      key: 'range',
      editable: true
    },
    {
      title: 'Damage',
      dataIndex: 'damage',
      key: 'damage',
      editable: true
    },
    {
      title: 'Qualities',
      dataIndex: 'qualities',
      key: 'qualities',
      width: '40%',
      editable: true
    }
  ]

  let i = 0
  const weaponData = []
  weapons.forEach(w => {
    weaponData.push({
      key: i,
      type: 'weapon',
      name: w.name,
      group: w.group,
      enc: w.enc,
      range: w.range,
      damage: w.damage,
      qualities: w.qualities
    })
    i++;
  })

  return(
    <EditableTable data={weaponData} columns={columns} />
  );
}

export default Weapons;