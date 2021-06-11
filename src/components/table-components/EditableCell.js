import React, { useState, useContext, useEffect } from 'react';

import { isBscSkillCell, isAdvSkillCell, isTalentCell } from './cellTypeLogic';

import { CharContext } from '../CharContextProvider';
import { Typography, InputNumber, Select } from 'antd';
const { Text } = Typography;
const { Option } = Select;

const options = (
  <>
    <Option value='WS'>
      WS
    </Option>
    <Option value='BS'>
      BS
    </Option>
    <Option value='S'>
      S
    </Option>
    <Option value='T'>
      T
    </Option>
    <Option value='I'>
      I
    </Option>
    <Option value='Ag'>
      Ag
    </Option>
    <Option value='Dex'>
      Dex
    </Option>
    <Option value='Int'>
      Int
    </Option>
    <Option value='WP'>
      WP
    </Option>
    <Option value='Fel'>
      Fel
    </Option>
  </>
)

const EditableCell = ({ editable, children, record }) => {
  const { char, setChar } = useContext(CharContext);
  const [field, setField] = useState(children[1].toString())

  useEffect(() => {
    if(record.type === 'bscSkill') {
      isBscSkillCell(char, setChar, record, field)
    } else if(record.type === 'advSkill') {
      isAdvSkillCell(char, setChar, record, field)
    } else if(record.type === 'talent') {
      isTalentCell(char, setChar, record, field)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field])
  //filling this dependency array with what React wants creates untenable lag
  //field is the only dependency it needs, and it has been tested to ensure there is no
  //dead or old data when the useEffect runs

  let childNode = children;
  if(editable){
    if(parseInt(field, 10) >= 0){
      childNode = <InputNumber size="small" style={{maxWidth: '40%'}} min={0} max={99} defaultValue={field} onChange={setField} />
    } else if(0 < field.length && field.length <= 3) {
      childNode = <Select size="small" defaultValue={field} onChange={setField}>{options}</Select>
    } else {
      childNode = <Text editable={{onChange: setField}}>{field}</Text>
    }
  }

  return <td>{childNode}</td>;
};

export default EditableCell;