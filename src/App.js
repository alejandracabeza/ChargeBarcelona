import React from "react";
import "./App.css";
import Map from "./components/map";

function App() {
  // let [latitude, setLatitude] = useState();
  // let [longitude, setLongitude] = useState();

  // async function fetchJSON() {
  //   try {
  //     const response = await fetch(
  //       "https://api.bsmsa.eu/ext/api/bsm/chargepoints/v1/chargepoints"
  //     );
  //     const json = await response.json();
  //     const temp = json.result.chargepoint;
  //     for (let i = 0; i < temp.length; i++) {
  //       temp.map(location => {
  //         let latitude = location.lat;
  //         let longitude = location.lng;
  //       });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   fetchJSON();
  // }, []);

  return (
    <div className="map">
      <Map />
    </div>
  );
}

export default App;
