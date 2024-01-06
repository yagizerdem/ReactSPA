import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap ,Marker , Popup, useMapEvents } from 'react-leaflet'
import { useMapContext } from '../Context/MapContext';
import useReverseGeoLocationApi from '../hooks/useReverseGeoLocationApi';

const LocationFinder = ({adjustCenter}) => {
  const map = useMapEvents({
    click(e) {
        adjustCenter(e.latlng.lat , e.latlng.lng)
    },
});
  return null;
};
const RecenterAutomatically = ({lat,lng}) => {
  const map = useMap();
   useEffect(() => {
     map.setView([lat, lng]);
   }, [lat, lng]);
   return null;
 }

export default function Map(){
  const [center, setCenter] = useState([39.925533, 32.866287]);
  const {isLoading,error,locationData,getLocation} = useReverseGeoLocationApi();
  const {handleClickedLocation} = useMapContext()
  handleClickedLocation(locationData)
  function adjustCenter(lat, lng) {
    setCenter([lat, lng]);
    // get country city info wiht reverse geo location api
    getLocation(lat , lng)
  }
    return(
        <>
        <MapContainer center={center} zoom={10} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[1.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
        <LocationFinder adjustCenter={adjustCenter} />
        <RecenterAutomatically lat={center[0]} lng={center[1]} />
      </MapContainer>
        </>
    )
}