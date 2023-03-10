import {gql} from '@apollo/client';

export const POKEMONS_QUERY = gql`
  {
    pokemons(first: 20) {
      id
      name
      image
    }
  }
`;