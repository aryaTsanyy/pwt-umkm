import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Popup } from "react-leaflet/Popup";
import { Marker } from "react-leaflet/Marker";

interface UMKMMapProps {
  lat: number;
  lng: number;
  name: string;
}

export default function UMKMMap({ lat, lng, name }: UMKMMapProps) {
  // Koordinat pusat peta (menggunakan koordinat UMKM)
  const position: [number, number] = [lat, lng];

  // Konfigurasi zoom awal
  const defaultZoom = 15;

  return (
    <MapContainer
      center={position}
      zoom={defaultZoom}
      scrollWheelZoom={false}
      className="h-96 w-full rounded-lg shadow-md"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marker ditempatkan di posisi UMKM */}
      <Marker position={position}>
        <Popup>
          Lokasi UMKM: <b>{name}</b>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
