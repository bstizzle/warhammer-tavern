import React from 'react';
import { useHistory } from 'react-router-dom';
import netlifyIdentity from "netlify-identity-widget";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Row, Col, Typography, Button } from 'antd';
const { Title } = Typography;

const Home = () => {
  const history = useHistory();
  const user = netlifyIdentity.currentUser();
  const [addCharacter] = useMutation(ADD_CHARACTER);

  function handleClick(e) {
    if(e.target.innerHTML === 'View Characters'){
      history.push('/list')
    } else if(e.target.innerHTML === "New Character"){
      addCharacter({
        variables: {
          userId: user.email,
        }
      })

      history.push(`/list`);
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
          <Button
            type="danger"
            onClick={handleClick}
          >
            New Character
          </Button>
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

const ADD_CHARACTER = gql`
  mutation AddCharacter($userId: String){
    addCharacter(
      userId: $userId,
      input: {
        bio: {
          name: "New Character"
          species: ""
          class: ""
          career: ""
          careerLevel: ""
          careerPath: ""
          status: ""
        },
        stats: {
          WS: {
            stat: 0,
            adv: 0
          },
          BS: {
            stat: 0,
            adv: 0
          },
          S: {
            stat: 0,
            adv: 0
          },
          T: {
            stat: 0,
            adv: 0
          },
          I: {
            stat: 0,
            adv: 0
          },
          Ag: {
            stat: 0,
            adv: 0
          },
          Dex: {
            stat: 0,
            adv: 0
          },
          Int: {
            stat: 0,
            adv: 0
          },
          WP: {
            stat: 0,
            adv: 0
          },
          Fel: {
            stat: 0,
            adv: 0
          }
        },
        basicSkills: [
          {
            name: "Art ()"
            stat: "Dex"
            adv: 0
          },
          {
            name: "Athletics"
            stat: "Ag"
            adv: 0
          },
          {
            name: "Bribery"
            stat: "Fel"
            adv: 0
          },
          {
            name: "Charm"
            stat: "Fel"
            adv: 0
          },
          {
            name: "Charm Animal"
            stat: "WP"
            adv: 0
          },
          {
            name: "Climb"
            stat: "S"
            adv: 0
          },
          {
            name: "Cool"
            stat: "WP"
            adv: 0
          },
          {
            name: "Consume Alcohol"
            stat: "T"
            adv: 0
          },
          {
            name: "Dodge"
            stat: "Ag"
            adv: 0
          },
          {
            name: "Drive"
            stat: "Ag"
            adv: 0
          },
          {
            name: "Endurance"
            stat: "T"
            adv: 0
          },
          {
            name: "Entertain ()"
            stat: "Fel"
            adv: 0
          },
          {
            name: "Gamble"
            stat: "Int"
            adv: 0
          },
          {
            name: "Gossip"
            stat: "Fel"
            adv: 0
          },
          {
            name: "Haggle"
            stat: "Fel"
            adv: 0
          },
          {
            name: "Intimidate"
            stat: "S"
            adv: 0
          },
          {
            name: "Intuition"
            stat: "I"
            adv: 0
          },
          {
            name: "Leadership"
            stat: "Fel"
            adv: 0
          },
          {
            name: "Melee (Basic)"
            stat: "WS"
            adv: 0
          },
          {
            name: "Melee ()"
            stat: "WS"
            adv: 0
          },
          {
            name: "Navigation"
            stat: "I"
            adv: 0
          },
          {
            name: "Outdoor Survival"
            stat: "Int"
            adv: 0
          },
          {
            name: "Perception"
            stat: "I"
            adv: 0
          }, 
          {
            name: "Ride ()"
            stat: "Ag"
            adv: 0
          },      
          {
            name: "Row"
            stat: "S"
            adv: 0
          },      
          {
            name: "Stealth ()"
            stat: "Ag"
            adv: 0
          },
        ],
        advSkills: [
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          },
          {
            name: ""
            stat: "WS"
            adv: 0
          }
        ],
        talents: [
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          },
          {
            name: ""
            times: 0
          }
        ],
        fate: {
          fate: 0
          fortune: 0
        },
        resolve: {
          resolve: 0
          resilience: 0
        },
        currentWounds: 0,
        armor: [
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: "",
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          },
          {
            name: "",
            location: "",
            enc: 0,
            ap: 0,
            qualities: ""
          }
        ],
        weapons: [
          {
            name: "",
            group: "",
            enc: 0,
            range: ""
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          },
          {
            name: "",
            group: "",
            enc: 0,
            range: "",
            damage: 0,
            qualities: ""
          }
        ],
        trappings: [
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          },
          {
            name: "",
            amount: 0,
            enc: 0
          }
        ],
        spells: [
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          },
          {
            name: "",
            cn: 0,
            range: "",
            target: "",
            duration: "",
            effect: ""
          }
        ]
        exp: {
          current: 0,
          spent: 0
        }
        movement: 0
      }
    ){
      userId,
      _id,
      bio {
        name
        career
      }
    }
  }
`