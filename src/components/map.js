import React, { useState } from "react";
import "./../App.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";


function Map({ markers, search, selectedMarker, setSelectedMarker, displayList, setDisplayList }) {
  const [viewport, setViewport] = useState({
    longitude: 2.154007,
    latitude: 41.390205,
    zoom: 12,
    height: "100vh",
    width: "100vw"
  });
  let REACT_APP_MAPBOX_TOKEN = "pk.eyJ1IjoiYWxlamFuZHJhcGNhYmV6YSIsImEiOiJjanpjZ3pkZDIwMXkzM21wOGQ1NXJ0ZDJyIn0.g4W1XvTg1RQdzAntx9nwkA"


  return (
    <div>
      <ReactMapGL

        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/alejandrapcabeza/cjzrhvf7539e21cpi9k78v35b"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >

        {
          markers.map(function (marker, index) {
            if (marker.ParkingName.toLowerCase().includes(search)) {

              return <Marker key={index} latitude={marker.Lat} longitude={marker.Lng}>
                <div className="eachMarker" onClick={e => {
                  e.preventDefault();
                  setSelectedMarker(marker);
                }}></div>
              </Marker>
            }
          })
        }

        {selectedMarker && <Popup latitude={selectedMarker.Lat} longitude={selectedMarker.Lng} onClose={() => {
          setSelectedMarker(null)
        }}>
          <div>
            <h4>Name: {selectedMarker.ParkingName}</h4>
            <p>Address: {selectedMarker.Address}</p>
            <p>Parking Level: {selectedMarker.ParkingLevel}</p>

          </div>
        </Popup>}
      </ReactMapGL>
    </div>
  );
}

export default Map;
