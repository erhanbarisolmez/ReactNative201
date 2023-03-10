import {StyleSheet, View} from 'react-native';
import React from 'react';
import CameraTest from './camera/Camera';
import MapApp from './maps/MapApp';
import Memoizing from './memoizing/Memoizing';
import PokeApp from './graphql-pokeapp/PokeApp';
const App = () => {
  return (
    //<Memoizing /> // useCallback(), useMemo(), React.memo() ile gereksiz bileşen render süreçlerinin önüne nasıl geçilebileceği anlatılmaktadır.
    //  <CameraTest /> RNCamera
    // <MapApp />   Google Map
    <PokeApp />
    // PokeApp : Stack Navigation, Apollo Client, useQuery, Listeleme, Liste Bileşeninin Geliştirilmesi, Tema Tanımları ve Loading Bileşeni,
    // Detay Ekranı ve GraphQL Sorgusu, GraphQL Query Dosyalarının hazırlanması, Etiketlerinin Gösterilmesi, Dönüşümlerin Gösterilmesi.
  );
};

export default App;

const styles = StyleSheet.create({});
