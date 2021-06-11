import React, { useContext } from 'react';
import { Row, Col, Button } from 'antd';
import { CharContext } from '../components/CharContextProvider';
import { Stats, DetailSelector, Bio, Fate, Resolve, WoundsWealth } from '../components/bio-components/bioExport';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const UPDATE_CHARACTER = gql`
  mutation UpdateCharacter($id: ID, $input: CharacterInput){
    updateCharacter(
      id: $id,
      input: $input
    ){
      _id,
      bio {
        name
        career
      }
    }
  }
`

const CharacterSheet = () => {
  const { char } = useContext(CharContext)
  const [updateCharacter] = useMutation(UPDATE_CHARACTER);

  return(
    <>
      <Row>
        <Col span={24}>
          <Bio />
          <Row>
            <Col span={24}>
              <Stats />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Fate />
            </Col>
            <Col span={8}>
              <Resolve />
            </Col>
            <Col span={8}>
              <WoundsWealth />
            </Col>
          </Row>
          <DetailSelector />
        </Col>
        {/*
          Experience
          Movement
          Ambitions
          Party
          Armor Points
          Psychology
          Corruption/Mutation
          Encumberance
        */}
      </Row>
      <Row>
        <Button 
          type="primary"
          onClick={() => {
            console.log(char)
            updateCharacter({
              variables: {
                id: char._id,
                input: {
                  bio: char.bio,
                  stats: char.stats,
                  basicSkills: char.basicSkills,
                  advSkills: char.advSkills,
                  talents: char.talents,
                  fate: char.fate,
                  resolve: char.resolve,
                  currentWounds: char.currentWounds,
                  armor: char.armor,
                  weapons: char.weapons,
                  trappings: char.trappings,
                  spells: char.spells
                }
              }
            })
          }}
        >
          Save Changes
        </Button>
      </Row>
    </>
  )
}

export default CharacterSheet;