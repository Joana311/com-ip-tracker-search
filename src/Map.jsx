import { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { DataContext } from "./contexts/DataContext";
import "leaflet/dist/leaflet.css";

function Map() {
  const { userData } = useContext(DataContext);
  const { lat, lon } = userData;

  const outerBounds = [
    [50.505, -29.09],
    [52.505, 29.09],
  ];

  if (!lat || !lon) return;
  return (
    <main className="relative z-0">
      <MapContainer
        center={{ lat, lng: lon }}
        zoom={8}
        style={{ height: "100vh", width: "100%" }}
        scrollWheelZoom={false}
        bounds={outerBounds}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={{ lat, lng: lon }}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}

export default Map;
