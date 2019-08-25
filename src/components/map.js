import React, { useState } from "react";
import "./../App.css";
import ReactMapGL, { Marker } from "react-map-gl";


function Map({ markers, search }, props) {

  const [viewport, setViewport] = useState({
    longitude: 2.154007,
    latitude: 41.390205,
    zoom: 12,
    height: "100vh",
    width: "100vw"
  });

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
        {markers.map((marker) => {
          let name = marker.ParkingName.toLowerCase()
          if (name.includes(search)) {
            return <Marker latitude={marker.Lat} longitude={marker.Lng}>
              <div style={{ width: 10, height: 10, backgroundColor: "red" }} />
            </Marker>
          }
        })
        }

      </ReactMapGL>
    </div>
  );
}

export default Map;
