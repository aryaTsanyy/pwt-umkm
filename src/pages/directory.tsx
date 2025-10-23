import React from "react";
import dynamic from "next/dynamic";
import { umkmList } from "@/data/umkmList";
import { Umkm } from "@/pages/api/umkm";
import StatsSection from "@/components/HomePage/StartStats/StatsSection";
import CategorySection from "@/components/HomePage/Category/CategorySection";
import TypographySection from "@/components/HomePage/Typography/TypographySection";

const DynamicMap = dynamic(() => import("@/components/Map/UMKMMap"), {
  ssr: false,
});

const Directory = () => {
  const displayedUmkm: Umkm[] = umkmList;
  const defaultCenter: [number, number] = [-7.4319, 109.2461]; // Koordinat Purwokerto

  const mapData = displayedUmkm.map((umkm) => ({
    lat: umkm.location.lat,
    lng: umkm.location.lng,
    name: umkm.name,
    slug: umkm.slug,
  }));
  return (
    <main className="container mx-auto p-24 pt-20">
      {/* Category Section */}
      <CategorySection />
      <TypographySection />
      <StatsSection />
      <h1 className="text-3xl font-bold mb-6">
        Peta Direktori UMKM Purwokerto
      </h1>

      {/* 3. Render Komponen Peta */}
      <div className="mb-8">
        <DynamicMap data={mapData} center={defaultCenter} />
      </div>

      {/* ... Bagian Grid UMKM Anda di bawahnya ... */}
      {/* Tampilkan {displayedUmkm.length} UMKM yang ditemukan */}
    </main>
  );
};

export default Directory;
