import React from 'react';
import { useHistory } from 'react-router-dom';
import netlifyIdentity from "netlify-identity-widget";
import { Row, Col, Typography, Button } from 'antd';
const { Title } = Typography;

const Home = () => {
  const history = useHistory();
  const user = netlifyIdentity.currentUser();

  function handleClick(e) {
    if(e.target.innerHTML === 'View Characters'){
      history.push('/list')
    }
  }

  return(
    <Col>
      <Row>
        <Title>Welcome to the hall, {user.user_metadata.full_name}!</Title>
      </Row>
      <Row gutter={10}>
        <Col>
          <Button
            type="primary"
            onClick={handleClick}
          >
            View Characters
          </Button>
        </Col>
        <Col>
          <Button type="danger">New Character</Button>
        </Col>
        <Col>
          <Button type="primary">View Campaigns</Button>
        </Col>
        <Col>
          <Button type="danger">New Campaign</Button>
        </Col>
      </Row>
    </Col>
  );
}

export default Home;