import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import one from "../assets/1.jpg";
function Portfolio() {
  return (
    <div
      className="portfolio w-full bg-[#f7f7f7] py-[143px] px-0 swiper-section text-left"
      id="portfolio"
    >
      <div className="container mx-auto">
        <div class="title w-full mb-[70px] wow fadeInLeft">
          <span
            class="subtitle inline-block mb-[10px] uppercase relative pl-[60px]"
            data-wow-duration="1s"
          >
            Portfolio
          </span>
          <h3 class="text-[45px] font-bold">Creative Portfolio</h3>
        </div>
        {/* swiper */}
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation]}
          navigation
          className="relaive"
        >
          <SwiperSlide>
            <div class="list_inner w-full h-auto clear-both relative overflow-hidden transition-all">
              <div class="image relative overflow-hidden transition-all object-cover">
                <img src={one} alt="Logo" />
              </div>
              <div class="details absolute z-[2] bottom-[-100px] left-[20px] right-[20px] bg-white px-[20px] pt-[8px] pb-[13px] transition-all">
                <span class="text-[12px] uppercase mb-[5px] text-[#868a9b] font-medium">
                  Modalbox
                </span>
                <h3 class="text-black text-[20px] mb-[2px]">Hello Phone</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        {/* swiper */}
      </div>
    </div>
  );
}
export default Portfolio;
