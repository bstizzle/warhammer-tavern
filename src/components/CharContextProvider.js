import React, { useState } from 'react';
import Loading from './Loading';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useParams } from 'react-router-dom';

export const CharContext = React.createContext(null);

const GET_CHARACTER = gql`
  query character($id: ID){
    character(id: $id){
      _id
      bio {
        name
        species
        class
        career
        careerLevel
        careerPath
        status
      }
      stats {
        WS {
          stat
          adv
        }
        BS {
          stat
          adv
        }
        S {
          stat
          adv
        }
        T {
          stat
          adv
        }
        I {
          stat
          adv
        }
        Ag {
          stat
          adv
        }
        Dex {
          stat
          adv
        }
        Int {
          stat
          adv
        }
        WP {
          stat
          adv
        }
        Fel {
          stat
          adv
        }
      }
      basicSkills {
        name
        stat
        adv
      }
      advSkills {
        name
        stat
        adv
      }
      talents {
        name
        times
      }
      fate {
        fate
        fortune
      }
      resolve {
        resolve
        resilience
      }
      currentWounds
      armor {
        name
        location
        enc
        ap
        qualities
      }
      weapons {
        name
        group
        enc
        range
        damage
        qualities
      }
      trappings {
        name
        amount
        enc
      }
      exp {
        current
        spent
      }
      movement
      spells {
        name
        cn
        range
        target
        duration
        effect
      }
    }
  }
`

export const CharContextProvider = props => {
  const [char, setChar] = useState(null)
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: id }
  })
  
  if(error) {
    return <h1>Something went wrong!</h1>
  } else if(loading) {
    return <Loading />
  } else {
    if(char === null){
      setChar(data.character)
    }
    
    return(
      <CharContext.Provider value={{char, setChar}}>
        {props.children}
      </CharContext.Provider>
    )
  }
}