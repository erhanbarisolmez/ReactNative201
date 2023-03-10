import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Counter from './components/Counter';

const Memoizing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Memoizing</Text>
      <Counter />
    </View>
  );
};

export default Memoizing;

const styles = StyleSheet.create({
  mainText: {
    fontWeight:'bold',
    fontSize: 30,
    color:'#46A37F',
    bottom: '10%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
