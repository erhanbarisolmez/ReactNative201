import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import Header from './Header';
import User from './User';

const Counter = () => {
  console.log('Counter component re-render');
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Mehmet');
  const user = useMemo(() => {
    return {
      id: 2,
      name,
    };
  }, [name]);
  const increment = useCallback((amount) => {
    setCount(prev => prev + amount);
  }, []);
  return (
    <View>
      <Header increment={increment} />
      <Text style={styles.text}>Counter - {count} </Text>
      <Button color={'#566FA3'} title="Arttır" onPress={() => increment(1)} />
      <Button title="İsmi Değişitir" onPress={() => setName('Ahmet')} />
      <User user={user} />
    </View>
  );
};

export default React.memo(Counter);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
