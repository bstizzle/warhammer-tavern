import React, { useContext } from 'react';
import { CharContext } from '../../CharContextProvider';
import EditableTable from '../../table-components/EditableTable';

const Armor = () => {
  const { char } = useContext(CharContext)
  const armors = char.armor;
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      editable: true
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      editable: true
    },
    {
      title: 'Enc',
      dataIndex: 'enc',
      key: 'enc',
      editable: true
    },
    {
      title: 'AP',
      dataIndex: 'ap',
      key: 'ap',
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
  const armorData = []
  armors.forEach(a => {
    armorData.push({
      key: i,
      type: 'armor',
      name: a.name,
      location: a.location,
      enc: a.enc,
      ap: a.ap,
      qualities: a.qualities
    })
    i++;
  })

  return(
    <EditableTable data={armorData} columns={columns} />
  );
}

export default Armor;