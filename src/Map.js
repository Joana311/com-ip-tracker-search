import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import "./Map.css";
// import geoJson from "./chicago-parks.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGFrYTAxMDIiLCJhIjoiY2x2d2w3cnM3MDdyYzJtbG95cjB2dWg3aCJ9.vCrYyacboNOxk9v7MXTYOw";

const Map = ({modelData}) => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-103.848, 30.2805],
      zoom: 2,
    });

    // Create default markers
    modelData.map((feature) =>
      new mapboxgl.Marker().setLngLat([feature.longitude, feature.latitude]).addTo(map)
    );

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, [modelData]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
