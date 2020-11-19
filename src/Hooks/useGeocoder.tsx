import React, {useEffect, useState} from "react";
import { MapEvent } from 'react-native-maps';
import Geocoder from 'react-native-geocoding'; 

const useGeocoder = (geo: string | object) => {

    const region1:any = {  
        latitude: 50.4501,
        longitude: 30.5234,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
      }
    

    const [region, setRegion] = useState<any>(region1);
    const [adress, setAdress] = useState<any>('Перемістіть маркер')

    const coordinatePicker = (e: MapEvent) => {    
        const lt = e.nativeEvent.coordinate.latitude
        const ln = e.nativeEvent.coordinate.longitude
    
        setRegion({            
            latitude: lt,
            longitude: ln,
            latitudeDelta: 0.1922,
            longitudeDelta: 0.1421, 
        })
        
        Geocoder.from(lt, ln)
            .then((json: any) => {
                //console.log(json)
                const address = json.results[0].formatted_address.split(',');
                const result = [address[0],address[1],address[2]].join(', ')
                setAdress(result)
                //console.log(result)
            })
            .catch((error: any) => console.warn(error));
      }
      

    useEffect(() => {
        Geocoder.from(geo)
        .then((json: any) => {
          console.log(json)
            const coordinats = json.results[0].geometry.location;
            //console.log(coordinats);
            setRegion({
                latitude: coordinats.lat,
                longitude: coordinats.lng,
                latitudeDelta: 0.1922,
                longitudeDelta: 0.1421, 
            })
        })
        .catch((error: any) => console.warn(error));
      }, [])


      return {
          region,
          adress,
          coordinatePicker
      }
}

export { useGeocoder }