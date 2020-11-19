import React from "react"
import { View, Text, StyleSheet } from "react-native";
import MapView,{MapEvent, Marker} from 'react-native-maps';
import { useGeocoder } from "../Hooks/useGeocoder";


const Map: React.FC = () => {  

  const usersRegion = useGeocoder('Kiev');

  return (
      <View style={styles.container}>
        <MapView provider='google' minZoomLevel={9} style={styles.image} region={usersRegion.region} >
          <Marker 
            draggable={true}
            coordinate={usersRegion.region}
            onDragEnd={usersRegion.coordinatePicker}            
           />               
      </MapView>      
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          {usersRegion.adress}
        </Text>
      </View>
    </View>    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-start'
  },
  wrapper: {    
    flexGrow: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  text: {
    color: 'black',
    fontSize: 20 
  },
  image: {    
    width: "100%",
    flexGrow: 5,
  },
  
})

export { Map }
