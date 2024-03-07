import LocationSearch from "./components/LocationSearch";
import Place from "./api/Place";
import Map from "./components/Map";
import { useState } from "react";

function App() {
  const [place, setPlace] = useState<Place | null>(null);
  
  // const handlePlaceClick = (p: Place) => {
  //   setPlace(p);
  // };

  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-2">
        <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="col-span-9">
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;
