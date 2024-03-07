import "leaflet/dist/leaflet.css";
import type { Place } from "../api/Place";
import type { Map as LeafletMap } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRef } from "react";
interface MapProps {
  place: Place;
}

export default function Map({ place }: MapProps) {
  // const mapRef = useRef();
  return (
    <MapContainer>
      <TileLayer></TileLayer>
    </MapContainer>
  );
}
