import React from "react";
import nine from "../assets/9.jpg";
function Testimonial() {
  return (
    <div
      className="testimonials w-full bg-[#f7f7f7] px-0 pt-[143px] pb-[150px] text-left"
      id="testimonial"
    >
      <div className="container mx-auto">
        <div class="title w-full mb-[70px] wow fadeInLeft">
          <span
            class="subtitle inline-block mb-[10px] uppercase relative pl-[60px]"
            data-wow-duration="1s"
          >
            Testimonial
          </span>
          <h3 class="text-[45px] font-bold">Valuable Feedback</h3>
        </div>
        <div class="wrapper w-full flex">
          <div
            class="box w-full bg-white relative wow fadeInLeft"
            data-wow-duration="1s"
          >
            <div class="short w-full bg-[#eaeaea] py-[25px] px-[40px] flex items-center justify-between">
              <div class="title">
                <h3 class="text-[17px] uppercase font-semibold">
                  Albert Kennedy
                </h3>
                <span>Graphic Designer</span>
              </div>
              <img
                class="w-[60px] h-[60px] rounded-full object-cover"
                src={nine}
                alt=""
              />
            </div>
            <div class="desc w-full px-[40px] pt-[40px] pb-[60px]">
              <ul class="rating flex mb-[20px]">
                <li>
                  <i class="icon-star-1 text-[18px]"></i>
                </li>
                <li>
                  <i class="icon-star-1 text-[18px]"></i>
                </li>
                <li>
                  <i class="icon-star-1 text-[18px]"></i>
                </li>
                <li>
                  <i class="icon-star-1 text-[18px]"></i>
                </li>
                <li>
                  <i class="icon-star-1 text-[18px]"></i>
                </li>
              </ul>
              <p class="relative z-[1]">
                I generally begin with what people are doing well. It’s too
                deflating for them if you start by immediately identifying all
                the things that are wrong. There’s a tipping point when any more
                negative feedback could shatter their confidence. If it’s really
                bad work, I ask them to stop and have a different kind of
                discussion. There are times where you may need just to say,
                ‘Stop, we need to reset. I generally begin with what people are
                doing well. It’s too deflating for them if you start by
                immediately identifying all the things that are wrong.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="svg absolute bottom-[-130px] right-[-100px] w-[500px] h-[500px] opacity-[.07] replaced-svg"
            >
              <path
                d="M9.13456 9H12.1346L10 14.6075H7L9.13456 9Z"
                fill="#000000"
              ></path>
              <path
                d="M14.1346 9H17.1346L15 14.6075H12L14.1346 9Z"
                fill="#000000"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
