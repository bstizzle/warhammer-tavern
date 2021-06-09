import React, { useState, useEffect, useContext } from 'react';
import { CharContext } from '../CharContextProvider';
import { Descriptions, Typography } from 'antd'
const { Text } = Typography

const Bio = () => {
  const { char, setChar } = useContext(CharContext)
  const bio = char.bio

  //controlled form state
  const [nameStr, setNameStr] = useState(bio.name)
  const [specStr, setSpecStr] = useState(bio.species)
  const [classStr, setClassStr] = useState(bio.class)
  const [carStr, setCarStr] = useState(bio.career)
  const [carLvlStr, setCarLvlStr] = useState(bio.careerLevel)
  const [statusStr, setStatusStr] = useState(bio.status)
  const [carPathStr, setCarPathStr] = useState(bio.careerPath)

  useEffect(() => {
    console.log('bio effect!')
    setChar(char => ({
        ...char,
        bio: {
          name: nameStr,
          species: specStr,
          class: classStr,
          career: carStr,
          careerLevel: carLvlStr,
          status: statusStr,
          careerPath: carPathStr
        }
      })
    )
  }, [setChar, nameStr, specStr, classStr, carStr, carLvlStr, statusStr, carPathStr])

  return(
    <Descriptions
      size="small"
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
      style={{background: '#141414'}}
    >
      <Descriptions.Item label="Name"><Text editable={{onChange: setNameStr}}>{nameStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Species"><Text editable={{onChange: setSpecStr}}>{specStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Class"><Text editable={{onChange: setClassStr}}>{classStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Career"><Text editable={{onChange: setCarStr}}>{carStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Career Level"><Text editable={{onChange: setCarLvlStr}}>{carLvlStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Status"><Text editable={{onChange: setStatusStr}}>{statusStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Career Path"><Text editable={{onChange: setCarPathStr}}>{carPathStr}</Text></Descriptions.Item>
    </Descriptions>
  );
}

export default Bio;