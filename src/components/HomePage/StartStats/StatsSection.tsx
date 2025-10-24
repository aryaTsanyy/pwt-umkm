import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatItemProps {
  number: number;
  suffix: string;
  description: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({
  number,
  suffix,
  description,
  delay = 0,
}) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!numberRef.current || !itemRef.current) return;
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      const state = { val: 0 };

      // Counter animation
      gsap.to(state, {
        val: number,
        duration: 2.5,
        delay,
        ease: "power2.out",
        snap: { val: 1 },
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (!numberRef.current) return;
          const v = Math.floor(state.val);
          numberRef.current.textContent = v.toLocaleString("id-ID");
        },
      });

      gsap.fromTo(
        itemRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, itemRef);
    return () => {
      ctx.revert();
      try {
        ScrollTrigger.refresh();
      } catch (e) {
        console.log(e);
      }
    };
  }, [number, delay]);

  return (
    <div ref={itemRef} className="flex flex-col items-start opacity-0">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        <span ref={numberRef}>{number.toLocaleString("id-ID")}</span>
        <span className="text-white">{suffix}</span>
      </div>
      <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: 250,
      suffix: "+",
      description: "Pelaku usaha lokal yang bergabung di platform kami",
    },
    {
      number: 1000,
      suffix: "+",
      description: "Pengguna yang menjelajahi UMKM tiap bulan.",
    },
    {
      number: 35,
      suffix: "+",
      description: "Wilayah di Indonesia yang telah terwakili oleh UMKM lokal.",
    },
    {
      number: 50,
      suffix: "+",
      description:
        "Partner, komunitas, dan inisiatif yang mendukung UMKM digital.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br bg-[#13569C] py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <StatItem
                number={stat.number}
                suffix={stat.suffix}
                description={stat.description}
                delay={index * 0.15}
              />
              {/* Garis pembatas - hanya di antara item, bukan setelah item terakhir */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-0 bottom-0 border-l border-dashed border-white/20" 
                     style={{ 
                       left: `${((index + 1) / stats.length) * 100}%`,
                       transform: 'translateX(-0.5px)'
                     }}>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;