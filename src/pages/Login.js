import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Col, Typography, Button } from 'antd';
const { Title } = Typography;

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    netlifyIdentity.open()
  }

  return(
    <Col>
      <Title>Login Page</Title>
      <Button type="primary" onClick={handleLogin}>Log In with Netlify</Button>
    </Col>
  );
}

export default Login;