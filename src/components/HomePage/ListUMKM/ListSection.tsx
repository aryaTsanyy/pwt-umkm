import React from "react";
import ListCard from "@/components/HomePage/ListUMKM/ListCard";

interface UMKM {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

const ListSection = () => {
  const topUMKMs: UMKM[] = [
    {
      id: 1,
      name: "ROTI BAHAGIA",
      description:
        "Roti lembut dan harum dengan resep keluarga, menghadirkan rasa hangat ala rumahan di setiap gigitannya.",
      category: "KULINER",
      image: "/UMKM/ListUmkm.png",
    },
    {
      id: 2,
      name: "ROTI BAHAGIA",
      description:
        "Roti lembut dan harum dengan resep keluarga, menghadirkan rasa hangat ala rumahan di setiap gigitannya.",
      category: "KULINER",
      image: "/UMKM/ListUmkm.png",
    },
    {
      id: 3,
      name: "ROTI BAHAGIA",
      description:
        "Roti lembut dan harum dengan resep keluarga, menghadirkan rasa hangat ala rumahan di setiap gigitannya.",
      category: "KULINER",
      image: "/UMKM/ListUmkm.png",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
          opacity: 0;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="w-full h-full px-20">
        <div className="mb-10">
          <p className="text-sm text-[#19395F] mb-9 tracking-wider">
            [ TOP UMKM ]
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-3xl max-w-10/12 sm:text-3xl lg:text-5xl font-black text-[#081F36] mb-5 leading-tight">
                MENJADI WADAH BAGI UMKM TERBAIK NEGERI
              </h2>

              <p className="text-[#515151] max-w-10/12 text-lg leading-relaxed mb-8">
                Temukan deretan UMKM yang paling banyak diminati dan mendapat
                ulasan positif. Dukung mereka dengan mengenal produk serta kisah
                di balik usahanya.
              </p>

              <button className="bg-[#13569C] text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-800 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                <span className="flex items-center font-geist-mono">
                  JELAJAHI UMKM
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - UMKM List */}
          <div className="w-full lg:col-span-6">
            <div className="space-y-6">
              {topUMKMs.map((umkm, index) => (
                <ListCard key={umkm.id} umkm={umkm} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
