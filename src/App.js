import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/map";
import Sidebar from "./components/sidebar"



function App() {
  let [markers, setMarkers] = useState([]);
  let [search, setSearch] = useState("");
  let [hide, setHide] = useState(true)


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
      <div className="toggle" onClick={handleHide}>X</div>
      {hide && <div className="sidebar">
        <input value={search}
          onChange={e => handleSearch(e)}
          placeholder="Search Charging station" />
      </div>}
      <Map markers={markers} search={search} />

    </div>
  );
}

export default App;
