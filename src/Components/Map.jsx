import { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { DataContext } from "../contexts/DataContext";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const ICON = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function Map() {
  const { userData } = useContext(DataContext);
  const { location } = userData;

  const outerBounds = [
    [50.505, -29.09],
    [52.505, 29.09],
  ];

  if (!location) return;
  return (
    <main className="relative z-0">
      <MapContainer
        center={{ lat: location.lat, lng: location.lng }}
        zoom={8}
        style={{ height: "100vh", width: "100%" }}
        scrollWheelZoom={false}
        bounds={outerBounds}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker icon={ICON} position={{ lat: location.lat, lng: location.lng }}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}

export default Map;
