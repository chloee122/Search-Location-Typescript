import LocationSearch from "./components/LocationSearch";
import Place from "./api/Place";
import Map from "./components/Map";
import { useState } from "react";

function App() {
  const [place, setPlace] = useState<Place | null>(null);
  console.log(place);
  // const handlePlaceClick = (p: Place) => {
  //   setPlace(p);
  // };

  return (
    <div>
      <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      <Map place={place} />
    </div>
  );
}

export default App;
