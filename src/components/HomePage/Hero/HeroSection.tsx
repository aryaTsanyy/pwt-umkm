import DomeGallery from "@/components/domeGallery/DomeGallery";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-full px-24">
      <div className="top-section mt-14 flex flex-col items-center gap-8 ">
        <div className="top-content flex flex-col mx-auto items-center gap-4.5">
          <h2 className="uppercase text-[#081F36] font-anton font-normal tracking-[-2%] text-center text-[52px]/[120%]">
            Temukan & Dukung UMKM Lokal di Sekitarmu Jelajahi berbagai usaha
            kecil yang tumbuh di daerahmu
          </h2>
          <p className="font-inter max-w-9/12 text-[#515151] text-[18px]/[150%] tracking-[-2%] text-center font-medium">
            Jelajahi berbagai usaha kecil di sekitar kamu, dari kuliner rumahan
            hingga produk kreatif. Setiap dukunganmu membantu bisnis lokal
            berkembang dan memperkuat ekonomi masyarakat.
          </p>
        </div>
        <div className="bot-content flex items-center gap-2">
          <button className="px-8 py-3.5 upppercase font-geist-mono text-[16px] bg-[#13569C] text-white rounded-full tracking-[-2%]">
            Jelajahi UMKM
          </button>
          <button className="px-8 py-3.5 upppercase font-geist-mono text-[16px] rounded-full bg-[#FFF] border border-[#161D04] tracking-[-2%]">
            Lihat Kategori
          </button>
        </div>
      </div>
      <div className="bot-section w-full">
        <div style={{ width: "90vw", height: "80vh" }}>
          <DomeGallery />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
