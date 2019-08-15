import React, { useState } from "react";
import "./App.css";
import ReactMapGL from "react-map-gl";
// import Map from "./components/map";

function App() {
  const [viewport, setViewport] = useState({
    latitute: 38.889931,
    longitude: -77.009003,
    zoom: 10,
    height: "100vh",
    width: "100vw"
  });

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/alejandrapcabeza/cjzcj8g430ajf1cp0fr7odmz5"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {" "}
        markers here
      </ReactMapGL>
    </div>
  );
}

export default App;
