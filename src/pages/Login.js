import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';
import { Col, Typography, Button } from 'antd';
const { Title } = Typography;

const Login = ({ user }) => {
  const history = useHistory();
  useEffect(() => {
    if(user) {
      history.push("/")
    }
  })

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