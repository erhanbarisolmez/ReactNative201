import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListItem from './ListItem';
import Loading from '../../components/Loading';
import { POKEMONS_QUERY } from './queries';
import { useQuery } from '@apollo/client';


const Pokemons = () => {
  const {error, loading, data} = useQuery(POKEMONS_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text>Error...</Text>;
  }

  return (
    <FlatList
      data={data.pokemons}
      renderItem={({item}) => <ListItem item={item}/>}
      keyExtractor={item => item.id}
    />
  );
};

export default Pokemons;

const styles = StyleSheet.create({});
