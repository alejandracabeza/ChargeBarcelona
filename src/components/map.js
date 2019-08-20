import React, { useState, useEffect } from "react";
import "./../App.css";
import ReactMapGL, { Marker } from "react-map-gl";


function Map() {
  let [markers, setMarkers] = useState([]);
  const [viewport, setViewport] = useState({
    longitude: 2.154007,
    latitude: 41.390205,
    zoom: 12,
    height: "100vh",
    width: "100vw"
  });

  async function fetchJSON() {
    try {
      const response = await fetch(
        "https://api.bsmsa.eu/ext/api/bsm/chargepoints/v1/chargepoints"
      );
      const json = await response.json();
      const temp = json.result.chargepoint;
      setMarkers(temp);
    } catch (err) {
      console.log(err);
    }
  }
  // console.log(marker);

  useEffect(() => {
    fetchJSON();
  }, []);

  return (
    <div>
      <ReactMapGL

        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/alejandrapcabeza/cjzcj8g430ajf1cp0fr7odmz5"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {markers.map(marker => (
          <Marker latitude={marker.Lat} longitude={marker.Lng}>
            <div style={{ width: 10, height: 10, backgroundColor: "red" }} />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default Map;
