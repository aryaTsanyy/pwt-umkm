import React, { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface IconDefault extends L.Icon.Default {
  _getIconUrl?: string;
}
// Fix untuk Marker Icon
delete (L.Icon.Default.prototype as IconDefault)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
  iconUrl: "leaflet/images/marker-icon.png",
  shadowUrl: "leaflet/images/marker-shadow.png",
});

// Definisikan tipe props yang diterima
interface MapDataItem {
  lat: number;
  lng: number;
  name: string;
  slug: string;
}

interface UMKMMapProps {
  data: MapDataItem[];
  center: [number, number];
}

// ----------------------------------------------------------------------
// Komponen Helper: Mengatur Ulang Peta (Untuk Zoom dan Center Otomatis)
// ----------------------------------------------------------------------
const MapRecenter = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom(), { animate: true });
  }, [center, map]);
  return null;
};
// ----------------------------------------------------------------------

const UMKMMap: React.FC<UMKMMapProps> = ({ data, center }) => {
  // Tentukan Batasan Peta (Boundary)
  // Jika ada data, peta akan menyesuaikan zoom agar semua marker terlihat.
  const bounds = useMemo(() => {
    if (data.length === 0) return undefined;
    return L.latLngBounds(
      data.map((item) => [item.lat, item.lng] as L.LatLngTuple)
    );
  }, [data]);

  return (
    // Styling Modern: H-96 (Tinggi), Rounded-xl, Shadow-lg
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      // Atur view berdasarkan bounds jika ada banyak data
      bounds={bounds}
      className="h-[500px] w-full rounded-xl shadow-lg border-2 border-gray-100"
    >
      {/* Ini memungkinkan peta untuk diatur ulang saat props center/data berubah */}
      <MapRecenter center={center} />

      {/* Styling Peta (TileLayer): Gunakan style yang lebih modern/bersih */}
      <TileLayer
        // OpenStreetMap standar (GRATIS)
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        // Alternatif Styling Modern & Bersih (Minimalis) - GRATIS
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />

      {/* Menampilkan Semua Marker dari Data */}
      {data.map((item) => (
        <Marker key={item.slug} position={[item.lat, item.lng]}>
          <Popup>
            <div className="font-semibold text-lg">{item.name}</div>
            <a
              href={`/umkm/${item.slug}`}
              className="text-blue-500 hover:underline"
            >
              Lihat Detail
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default UMKMMap;
