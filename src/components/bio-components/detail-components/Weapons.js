import React, { useContext } from 'react';
import { CharContext } from '../../CharContextProvider';
import EditableTable from '../../table-components/EditableTable';

const Weapons = () => {
  const { char } = useContext(CharContext);
  const weapons = char.weapons;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      editable: true
    },
    {
      title: 'Enc',
      dataIndex: 'enc',
      key: 'enc',
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
      enc: w.enc,
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