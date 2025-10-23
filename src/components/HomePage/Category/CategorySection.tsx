// Main DirectorySection Component
import React, { useRef, useState, useEffect, useMemo } from "react";
import CategoryCard from "@/components/HomePage/Category/CategoryCard";
import { umkmList } from "@/data/umkmList";

interface Category {
  id: number;
  title: string;
  description: string;
  categoryDescriptions: string;
  icon: string;
}

const CategorySection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  /* Mock data for categories */
  const categories: Category[] = useMemo(() => {
    const counts = new Map<string, number>();
    for (const u of umkmList) {
      for (const c of u.categories) {
        counts.set(c, (counts.get(c) ?? 0) + 1);
      }
    }

    const pickIcon = (title: string) => {
      const t = title.toLowerCase();
      if (t.includes("makanan")) return "Coffee";
      if (t.includes("minuman")) return "Leaf";
      if (t.includes("fashion") || t.includes("pakaian")) return "Shirt";
      if (t.includes("kerajinan") || t.includes("oleh")) return "Palette";
      if (t.includes("kecantikan") || t.includes("kosmetik")) return "Sparkles";
      if (t.includes("jasa")) return "Laptop";
      return "Leaf";
    };
    const getCategoryDesc = (title: string): string => {
      switch (title) {
        case "Makanan":
          return "Nikmati cita rasa khas lokal dari berbagai pelaku usaha kuliner yang menawarkan hidangan autentik dan lezat";
        case "Minuman":
          return "Temukan berbagai minuman kreatif dan inovatif dari para pengusaha lokal";
        case "Jasa":
          return "Layanan profesional dan berkualitas dari pelaku usaha jasa lokal";
        case "Kosmetik":
          return "Produk kecantikan dan perawatan berkualitas dari produsen lokal";
        case "Oleh-oleh":
          return "Temukan oleh-oleh khas dan kerajinan tangan lokal yang unik";
        default:
          return "Berbagai produk dan layanan unik lainnya dari UMKM lokal";
      }
    };

    return Array.from(counts.entries()).map(([title, count], i) => ({
      id: i + 1,
      title,
      categoryDescriptions: getCategoryDesc(title),
      description: `${count} UMKM • Klik untuk lihat`,
      icon: pickIcon(title),
    }));
  }, []);

  /* Handle scroll */
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftGradient(scrollLeft > 0);
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Mouse drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
      scrollContainerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = "grab";
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="h-full w-full py-28">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="w-full h-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 gap-6">
          <div className="flex-1">
            <p className="text-sm darkblue-text mb-10 tracking-wider">
              [ KATEGORI ]
            </p>
            <div className="flex w-full items-start justify-between">
              <div className="flex flex-col items-start gap-4.5 ">
                <h1 className="text-3xl dark-text font-anton sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
                  SETIAP KATEGORI, PUNYA CERITA SENDIRI
                </h1>
                <p className="text-[#515151] font-inter text-base sm:text-lg max-w-2xl">
                  Pilih kategori yang paling menarik bagimu, dan temukan cerita
                  perjuangan di balik produk lokal yang mereka ciptakan
                </p>
              </div>
              <div className="h-auto flex items-center lg:items-end">
                <button className="primary-button text-white px-8 py-3.5 rounded-full font-geist-mono font-bold hover:bg-blue-800 transition-all duration-300 hover:shadow-lg whitespace-nowrap self-start lg:self-center hover:scale-105">
                  JELAJAHI UMKM
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative pb-28">
          {/* Gradient Overlays */}
          {showLeftGradient && (
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FEFFFB] via-[#FEFFFB]/80 to-transparent z-10 pointer-events-none transition-opacity duration-300"></div>
          )}
          {showRightGradient && (
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FEFFFB] via-[#FEFFFB]/80 to-transparent z-10 pointer-events-none transition-opacity duration-300"></div>
          )}

          {/* Cards Container with Drag to Scroll */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-hidden py-5 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>

          {/* Scroll Hint */}

          <div
            className={`flex justify-center mt-6 transition-opacity duration-300 ${
              showRightGradient
                ? "opacity-100 animate-bounce"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!showRightGradient}
          >
            <p className="text-sm text-gray-500">
              ← Geser untuk melihat lebih banyak →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
