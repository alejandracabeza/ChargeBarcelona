import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/map";


function App() {
  let [markers, setMarkers] = useState([]);
  let [search, setSearch] = useState("");
  let [hide, setHide] = useState(false);
  let [selectedMarker, setSelectedMarker] = useState(null);



  async function fetchJSON() {
    try {
      const response = await fetch(
        "https://api.bsmsa.eu/ext/api/bsm/chargepoints/v1/chargepoints"
      );
      const json = await response.json();
      const temp = json.result.chargepoint;
      var outputArray = {};

      outputArray = Array.from(new Set(temp))
      return setMarkers(outputArray);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchJSON();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleHide() {
    hide ? setHide(false) : setHide(true);
  }

  return (
    <div className="map">

      <div onClick={handleHide} className="wordSearch" >Search...<span className="search" ></span></div>
      {hide && <div className="sidebar scrollable">
        <div className="input-search"><input value={search}
          onChange={e => handleSearch(e)}
          placeholder="Search Charging Station..." />
        </div>
        {markers.map(function (marker, index) {
          if (marker.ParkingName.toLowerCase().includes(search)) {
            return <div key={index} >{marker.ParkingName}</div>
          }

        })}
      </div>
      }
      <Map markers={markers} search={search} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker} />

    </div >
  );
}

export default App;
