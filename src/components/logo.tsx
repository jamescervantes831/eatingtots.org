"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const logos = [
  { src: "/eatingTots.png", alt: "Eating Tots" },
  { src: "/happyFace.png", alt: "Happy Face" },
  { src: "/usda.png", alt: "USDA" },
  { src: "/map.png", alt: "Map" },
  { src: "/logo.png", alt: "Logo" },
];

export default function LogoSlider() {
  return (
    <section className="block md:hidden w-full px-4 py-8">
      <div className="mx-auto max-w-6xl">
        {/* Title (optional but makes it feel more intentional) */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[#0da84a] font-extrabold text-lg">
            Trusted & Connected
          </p>
          <span className="rounded-full border-2 border-lime-300 bg-[#c1ff72] px-3 py-1 text-xs font-extrabold text-green-900">
            Slide ➜
          </span>
        </div>

        <Swiper
          spaceBetween={12}
          slidesPerView={2}
          autoplay={{ delay: 1400, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            380: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={logo.src} className="pb-8">
              <div className="h-[110px] w-full rounded-3xl border-4 border-lime-300 bg-lime-100 shadow-sm flex items-center justify-center px-4">
                <div className="relative h-[70px] w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 200px"
                    className="object-contain"
                    priority={index < 2}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* little note */}
        <p className="mt-2 text-center text-xs font-semibold text-green-900/70">
          Partners & resources we’re building alongside 💚
        </p>
      </div>
    </section>
  );
}
