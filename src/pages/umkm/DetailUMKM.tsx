import React from "react";
import dynamic from "next/dynamic";
import { umkmList } from "@/data/umkmList";
import { Umkm } from "@/pages/api/umkm";
const DynamicMap = dynamic(() => import("@/components/Map/UMKMMap"), {
  ssr: false,
});

const DetailUMKM = () => {
  const mockUmkm: Umkm =
    umkmList.find((u) => u.slug === "Link Coffee & Barber") || umkmList[0];

  const { name, location } = mockUmkm;

  return (
    <div>
      <h1>{name} Detail Page</h1>
      <p>Alamat: {mockUmkm.address}</p>

      <h2 className="text-2xl mt-6 mb-4">Lokasi UMKM</h2>

      <DynamicMap lat={location.lat} lng={location.lng} name={name} />

      <a
        href={location.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 p-3 bg-blue-600 text-white rounded-lg"
      >
        Buka di Google Maps
      </a>
    </div>
  );
};

export default DetailUMKM;
