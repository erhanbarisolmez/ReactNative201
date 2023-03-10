import {StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Evolotions = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evolotions</Text>
      {!data && <Text>The last stage of is evolution.</Text>}
      {
        data?.map((item) =>(
            <TouchableOpacity
                key={item.id}
                style={styles.listItem}
                onPress={() => {navigation.push('Detail', {
                  id: item.id,
                  name: item.name
                })}}
            >
                <Image 
                    style={styles.image}
                    resizeMode='contain'
                    source={{uri: item.image}}
                />
                <Text style={styles.name}>{item.name}</Text> 
            </TouchableOpacity>
        ))
      }
    </View>
  );
};
 export default Evolotions;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
  listItem: {
    flex:1,
    flexDirection:'row',
    height:80,
    alignItems:'center'
  },
  image:{
    height:60,
    width:60,
    marginRight:15 
  },
  name: {
    fontSize:16
  }
});
