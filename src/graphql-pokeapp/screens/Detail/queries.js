import {gql} from '@apollo/client';

export const POKEMONS_QUERY = gql`
  query Pokemon($id: String) {
    pokemon(id: $id) {
      id
      name
      image
      types
      weaknesses
      evolutions{  
        id
        name
        image
      }    
    }
  }
`;