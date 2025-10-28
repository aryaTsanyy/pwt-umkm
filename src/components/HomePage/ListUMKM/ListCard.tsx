import React, { useState } from "react";
import Image from "next/image";

// Types
interface UMKM {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

interface UMKMCardProps {
  umkm: UMKM;
  index: number;
}

// UMKMCard Component (Reusable)
const ListCard: React.FC<UMKMCardProps> = ({ umkm, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl cursor-pointer animate-fadeInRight"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
        {/* Content */}
        <div className="flex-1 py-2 relative overflow-hidden">
          <h3 className="text-3xl font-anton text-[#161D04] font-normal mb-4 group-hover:text-[#13569C] transition-colors duration-500">
            {umkm.name}
          </h3>
          <p className="text-[#515151] font-geist-mono leading-relaxed mb-8 line-clamp-3">
            {umkm.description}
          </p>

          {/* Buttons Container */}
          <div className="flex items-center gap-3 relative">
            <div
              className={`transition-all duration-500 ease-out ${
                isHovered
                  ? "opacity-100 translate-x-0 max-w-xs"
                  : "opacity-0 -translate-x-8 max-w-0 overflow-hidden"
              }`}
            >
              <button className="px-6 py-2.5 bg-white border-2 border-[#161D04] text-[#161D04] rounded-full font-semibold font-geist-mono hover:bg-gray-900 hover:text-white transition-all duration-300 whitespace-nowrap">
                LIHAT DETAIL
              </button>
            </div>

            <div
              className={`transition-all duration-500 ease-out ${
                isHovered
                  ? "opacity-100 translate-x-0 delay-75"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <span className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-full font-bold text-sm whitespace-nowrap">
                {umkm.category}
              </span>
            </div>

            {/* Default Category Tag - Fades out on hover */}
            <div
              className={`absolute left-0 transition-all duration-300 ${
                isHovered
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <span className="px-5 py-2.5 bg-gray-200 text-gray-800 rounded-full font-bold text-sm whitespace-nowrap">
                {umkm.category}
              </span>
            </div>
          </div>
        </div>
        {/* Image Container */}
        <div className="relative flex-shrink-0 w-48 h-48 rounded-xl overflow-hidden">
          <Image
            src={umkm.image}
            alt={umkm.name}
            width={200}
            height={200}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default ListCard;
