import React, { useContext } from 'react';
import { CharContext } from '../../CharContextProvider';
import { Row, Col } from 'antd';
import EditableTable from '../../table-components/EditableTable';

const Misc = () => {
  const { char } = useContext(CharContext)
  const misc = char.misc;
  
  const columns = [
    {
      title: 'Miscellaneous',
      dataIndex: 'text',
      key: 'text',
      width: '100%',
      editable: true
    }
  ]

  let i = 0;
  const data1 = [];
  const data2 = [];
  misc.forEach(m => {
    if(i < 13) {
      data1.push({
        key: i,
        type: 'misc',
        text: m.text
      })
    } else {
      data2.push({
        key: i,
        type: 'misc',
        text: m.text
      })
    }
    i++;
  })

  return(
    <Row>
      <Col span={12}>
        <EditableTable data={data1} columns={columns} />
      </Col>
      <Col span={12}>
        <EditableTable data={data2} columns={columns} />
      </Col>
    </Row>
  );
}

export default Misc;