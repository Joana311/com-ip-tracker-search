import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = props => {
   return (
      <MapContainer
         center={[
            props.lat == 'Invalid ip' ? 10.0 : props.lat,
            props.long == 'Invalid ip' ? 10.0 : props.long,
         ]}
         zoom={13}
         scrollWheelZoom={true}
      >
         <TileLayer
            attribution=""
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker
            position={[
               props.lat == 'Invalid ip' ? 10.0 : props.lat,
               props.long == 'Invalid ip' ? 10.0 : props.long,
            ]}
         >
            <Popup>
               {props.country}, {props.city}
            </Popup>
         </Marker>
      </MapContainer>
   );
};

export default Map;
