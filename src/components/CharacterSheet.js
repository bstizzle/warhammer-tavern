import React, { useContext } from 'react';
import { Row, Col, Button } from 'antd';
import { CharContext } from './CharContextProvider';
import { Stats, DetailSelector, Bio, Fate, Resolve, Wounds } from './bio-components/bioExport';
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
        <Col span={16}>
          <Bio />
          <Stats />
          <Row>
            <Fate />
            <Resolve />
            <Wounds />
          </Row>
          <DetailSelector />
        </Col>
        <Col span={8}>
          PLACEHOLDER COLUMN
        </Col>
        {/*
          Experience
          Movement
          Ambitions
          Party
          Armor Points
          Psychology
          Corruption/Mutation
          Spells  
          Wealth
          Encumberance
        */}
      </Row>
      <Row>
        <Button 
          type="primary"
          onClick={() => {
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
                  currentWounds: char.currentWounds
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