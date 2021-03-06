import React from 'react';
import { useHistory } from 'react-router-dom';
import netlifyIdentity from "netlify-identity-widget";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../components/Loading';
import {
  Row,
  Col,
  Card,
  Avatar,
  Typography } from 'antd';
const { Meta } = Card;
const { Title, Text } = Typography;

const GET_CHARACTERS = gql`
  {
    characters {
      userId
      _id
      bio {
        name
        careerLevel
        species
      }
    }
  }
`

const CharacterList = () => {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_CHARACTERS)
  const user = netlifyIdentity.currentUser();

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const handleRoute = (e, id) => {
    e.preventDefault();
    history.push(`/sheet/${id}`);
  }

  return(
    <Row gutter={20}>
      {data.characters.map(c => {
        if(c.userId === user.email){
          return(
            <Col key={c._id} span={6}>
              <Card
                style={{alignItems: 'center'}}
                actions={[
                  <span onClick={(e) => handleRoute(e, c._id)}>View Sheet</span>,
                  <span>Edit</span>,
                  <span>Delete</span>
                ]}
              >
                <Meta
                  avatar={<Avatar size={60} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<Title level={4}>{c.bio.name}</Title>}
                  description={<Text>{c.bio.species} / {c.bio.careerLevel}</Text>}
                />
              </Card>
            </Col>
          );
        } else {
          return null;
        }
      })}
    </Row>
  )
}

export default CharacterList;