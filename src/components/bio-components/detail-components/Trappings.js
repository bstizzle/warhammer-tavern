import React, { useContext } from 'react';
import { CharContext } from '../../CharContextProvider';
import EditableTable from '../../table-components/EditableTable';

const Trappings = () => {
  const { char } = useContext(CharContext);
  const trappings = char.trappings;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      editable: true
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      editable: true
    },
    {
      title: 'Enc',
      dataIndex: 'enc',
      key: 'enc',
      editable: true
    }
  ]

  let i = 0
  const trappingData = []
  trappings.forEach(t => {
    trappingData.push({
      key: i,
      type: 'trapping',
      name: t.name,
      amount: t.amount,
      enc: t.enc
    })
    i++;
  })

  return(
    <EditableTable data={trappingData} columns={columns} />
  );
}

export default Trappings;