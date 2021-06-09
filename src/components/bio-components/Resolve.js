import React, { useState, useContext, useEffect } from 'react';
import { CharContext } from '../CharContextProvider';
import { Col, Descriptions, InputNumber } from 'antd';

const Resolve = () => {
  const { char, setChar } = useContext(CharContext)
  const resolve = char.resolve
  const [resolveState, setResolveState] = useState(resolve.resolve)
  const [resilState, setResilState] = useState(resolve.resilience)

  useEffect(() => {
    console.log('resolve effect!')
    setChar(char => ({
      ...char,
      resolve: {
        resolve: resolveState,
        resilience: resilState
      }
    }))
  }, [setChar, resolveState, resilState])

  return(
    <Col span={8}>
      <Descriptions
        size="small"
        layout="vertical"
        bordered
        style={{background: '#141414'}}
        column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}
      >
        <Descriptions.Item key="resolve" label="Resolve">
          <InputNumber size="small" style={{maxWidth: '40%'}} min={0} max={99} defaultValue={resolveState} onChange={setResolveState} />
        </Descriptions.Item>
        <Descriptions.Item key="resilince" label="Resilience">
          <InputNumber size="small" style={{maxWidth: '40%'}} min={0} max={99} defaultValue={resilState} onChange={setResilState} />
        </Descriptions.Item>
      </Descriptions>
    </Col>
  );
}

export default Resolve;