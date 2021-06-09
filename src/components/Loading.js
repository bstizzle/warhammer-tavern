import React from 'react';

import { Spin, Typography, Row, Col } from 'antd';
import { SettingFilled } from '@ant-design/icons';
const { Title } = Typography;

const Loading = () => {
  const loadIcon = <SettingFilled spin/>

  return(
    <Row>
      <Col>
        <Spin indicator={loadIcon} size="large"/>
      </Col>
      <Col>
        <Title>...Loading...</Title>
      </Col>
      <Col>
        <Spin indicator={loadIcon} size="large" />
      </Col>
    </Row>
  );
}

export default Loading;