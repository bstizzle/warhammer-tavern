import React, { useState } from 'react';

import { Col, Typography } from 'antd';
const { Title } = Typography;

const Home = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setLoading(false)
      })
  }

  return(
    <Col>
      <Title>HOME PAGE</Title>
      <button onClick={handleClick("characters")}>{loading ? "Loading..." : "Get characters"}</button>
    </Col>
  );
}

export default Home;