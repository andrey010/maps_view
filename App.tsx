import React from 'react';
import { Map} from './src/views/Map';
import Geocoder from 'react-native-geocoding'; 

const App = () => {

  Geocoder.init('AIzaSyD7QwxNb2PcLuZrvNFQjVCIla3UcGOq4xo', {language : 'ru'});
  
  return (
    <Map />
  );
};

export default App;
