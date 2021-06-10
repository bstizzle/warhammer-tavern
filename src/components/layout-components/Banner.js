import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Row, Col, Typography, Button } from 'antd';
const { Title } = Typography;

const Banner = () => {
  const handleLogout = async (e) => {
    e.preventDefault()
    netlifyIdentity.logout();
  }

  return(
    <Row>
      <Col span={20}>
        <Title>WARHAMMER GUILD HALL</Title>
      </Col>
      <Col span={4}>
        <Button onClick={handleLogout}>Log out</Button>
      </Col>
    </Row>
  );
}

export default Banner;