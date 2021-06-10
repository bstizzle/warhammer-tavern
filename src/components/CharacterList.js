import React from 'react';
import { useHistory } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loading from './Loading';

const GET_CHARACTERS = gql`
  {
    characters {
      _id
      bio {
        name
      }
    }
  }
`

const CharacterList = ({ setCharId }) => {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_CHARACTERS)

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  if(data){
    console.log(data)
  }

  const handleRoute = (e, id) => {
    e.preventDefault();
    setCharId(id);
    history.push('/sheet');
  }

  return(
    <div>
      {data.characters.map(c => {
        return(
          <button
            key={c._id}
            onClick={(e) => handleRoute(e, c._id)}
          >
            {c.bio.name}: {c._id}
          </button>
        )
      })}
    </div>
  )
}

export default CharacterList;