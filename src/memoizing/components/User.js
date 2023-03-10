import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const User = ({user}) => {
  console.log('User component re-render');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User</Text>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
};

export default React.memo(User);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    margin: 20,
    paddingTop: 10,
    alignItems:'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 24
  }
});
