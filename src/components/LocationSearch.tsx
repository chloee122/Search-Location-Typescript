import { useState, Fragment } from "react";
import { search } from "../api/search";
import Place from "../api/Place";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = await search(term);
    setPlaces(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
      </form>
      <div>
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p>{place.name}</p>
              <button onClick={() => onPlaceClick(place)}>Go</button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
