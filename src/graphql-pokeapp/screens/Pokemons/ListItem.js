import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
const ListItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('Detail', {
        id: item.id,
        name: item.name
      })}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: item.image,
        }}
      />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 26,
    marginLeft: 15,
  },
});
