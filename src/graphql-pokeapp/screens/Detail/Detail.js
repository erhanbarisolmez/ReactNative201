import {StyleSheet, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import Loading from '../../components/Loading';
import {useQuery} from '@apollo/client';
import {POKEMONS_QUERY} from './queries';
import Label from '../../components/Label';
import Evolotions from '../../components/Evolotions';

const Detail = ({route}) => {
  const {id} = route.params;
  const {error, loading, data} = useQuery(POKEMONS_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  console.log(data);

  const {name, image, types, weaknesses, evolutions} = data.pokemon;

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: image,
        }}
      />
      <Text style={styles.name}>{name}</Text>
      <Label title="Types" data={types} />
      <Label title="Weaknesses" data={weaknesses} />
      <Evolotions data={evolutions} />
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});
