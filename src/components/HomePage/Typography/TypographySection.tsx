import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TypographySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current || !sectionRef.current) return;

    // Split text into individual characters
    const text = titleRef.current.textContent || "";
    titleRef.current.innerHTML = "";

    const chars = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.filter = "blur(10px)";
      span.style.opacity = "0.3";
      if (char === " ") {
        span.style.width = "0.5em";
      }
      span.className = "char";
      titleRef.current?.appendChild(span);
      return span;
    });

    // GSAP animation for each character
    gsap.to(chars, {
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.5,
      stagger: {
        each: 0.02,
        from: "start",
      },
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
      },
    });

    // Section fade in
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex items-center justify-center">
      <div className="max-w-5xl mx-auto my-28 text-center">
        <div className="mb-28">
          <span className="inline-block font-geist-mono dark-text rounded-full text-sm font-medium tracking-wide uppercase">
            [ TENTANG KAMI ]
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-2xl md:text-4xl lg:text-5xl font-anton text-[#161D04] font-normal mx-auto leading-tight mb-28"
        >
          KAMI HADIR UNTUK MENGHUBUNGKAN KAMU DENGAN PELAKU UMKM LOKAL AGAR
          BERSAMA-SAMA TUMBUH DAN MENGGERAKKAN EKONOMI KREATIF INDONESIA.
        </h1>
      </div>
    </section>
  );
};

export default TypographySection;
