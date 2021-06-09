import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Col, Typography } from 'antd';
const { Title } = Typography;

const GET_CHARACTERS = gql`
  {
    characters {
      bio {
        name
      }
    }
  }
`

const Home = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleClick = e => {
    e.preventDefault()

    console.log(data)
  }

  return(
    <Col>
      <Title>HOME PAGE</Title>
      <button onClick={handleClick}>Get characters</button>
    </Col>
  );
}

export default Home;