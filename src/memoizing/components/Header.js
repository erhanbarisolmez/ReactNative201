import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({increment }) => {
  console.log('Header component re-render');
  const arr = new Array(5).fill().map(() => Math.floor(Math.random() * 10));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
      <Text>{JSON.stringify(arr)}</Text>
      <Button onPress={() => increment(5)} title= 'Arttır' />
    </View>
  );
};

export default React.memo(Header); 

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderColor: '#A39A46',
    marginBottom: 60,
    borderBottomWidth: 3,
    alignItems:'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
  },
});
