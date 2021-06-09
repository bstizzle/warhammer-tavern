import React from 'react';
import { Table } from 'antd';
import EditableCell from './EditableCell';

const EditableTable = ({ data, columns }) => {
  const components = {
    body: {
      cell: EditableCell
    }
  }

  const editableColumns = columns.map((c) => {
    if(!c.editable) {
      return {
        ...c,
        onCell: (record) => ({
          record
        })
      }
    }

    return {
      ...c,
      onCell: (record) => ({
        record,
        editable: c.editable,
        dataIndex: c.dataIndex,
        title: c.title
      })
    }
  })

  return (
    <div>
      <Table
        pagination={false}
        size="small"
        components={components}
        bordered
        dataSource={data}
        columns={editableColumns}
      />
    </div>
  )
}

export default EditableTable;