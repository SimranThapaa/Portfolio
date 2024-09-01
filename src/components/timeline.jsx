import React from "react";
function Timeline() {
  return (
    <div
      class="timeline w-full px-0 pt-[143px] pb-[150px] text-left"
      id="timeline"
    >
      <div class="container mx-auto">
        <div class="title w-full mb-[70px] wow fadeInLeft">
          <span
            class="subtitle inline-block mb-[10px] uppercase relative pl-[60px]"
            data-wow-duration="1s"
          >
            Timeline
          </span>
          <h3 class="text-[45px] font-bold">Timeline Period</h3>
        </div>
        <div class="experience_inner w-full flex">
          <div class="left w-1/2 pr-[20px]">
            <div class="box w-full">
              <div
                class="title w-full py-[25px] px-[40px] bg-[#eaeaea] mb-[30px] wow fadeInLeft"
                data-wow-duration="1s"
              >
                <h3 class="text-[17px] uppercase font-semibold">Experience</h3>
              </div>
              <div class="list_wrap w-full">
                <ul class="relative">
                  <li
                    class="w-full mb-[10px] wow fadeInLeft"
                    data-wow-duration="1s"
                  >
                    <div class="list_inner w-full relative flex justify-between bg-[#f7f7f7] px-[35px] pt-[40px] pb-[35px] border-l-4 border-[#eaeaea]">
                      <div class="occ pr-[20px]">
                        <h3 class="text-[17px] mb-[2px]">
                          IT Help Cental, Texas Tech University
                        </h3>
                        <span>Graduate Assistant/FullStack Developer</span>
                      </div>
                      <div class="time inline-block">
                        <span class="inline-block bg-white py-[10px] px-[20px]">
                          2023-2024
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    class="w-full mb-[10px] wow fadeInLeft"
                    data-wow-duration="1s"
                  >
                    <div class="list_inner w-full relative flex justify-between bg-[#f7f7f7] px-[35px] pt-[40px] pb-[35px] border-l-4 border-[#eaeaea]">
                      <div class="occ pr-[20px]">
                        <h3 class="text-[17px] mb-[2px]">
                          Deparmtnent of Human Science
                        </h3>
                        <span>Graduate Assistant/ Web Developer</span>
                      </div>
                      <div class="time inline-block">
                        <span class="inline-block bg-white py-[10px] px-[20px]">
                          2022-2023
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="w-full wow fadeInLeft" data-wow-duration="1s">
                    <div class="list_inner w-full relative flex justify-between bg-[#f7f7f7] px-[35px] pt-[40px] pb-[35px] border-l-4 border-[#eaeaea]">
                      <div class="occ pr-[20px]">
                        <h3 class="text-[17px] mb-[2px]">
                          YoungInnovations Pvt. Ltd.
                        </h3>
                        <span>Frontend Developer</span>
                      </div>
                      <div class="time inline-block">
                        <span class="inline-block bg-white py-[10px] px-[20px]">
                          2019-2022
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="right w-1/2 pl-[20px]">
            <div class="box w-full">
              <div
                class="title w-full py-[25px] px-[40px] bg-[#eaeaea] mb-[30px] wow fadeInLeft"
                data-wow-duration="1s"
              >
                <h3 class="text-[17px] uppercase font-semibold">Education</h3>
              </div>
              <div class="list_wrap w-full">
                <ul class="relative">
                  <li
                    class="w-full mb-[10px] wow fadeInLeft"
                    data-wow-duration="1s"
                  >
                    <div class="list_inner w-full relative flex justify-between bg-[#f7f7f7] px-[35px] pt-[40px] pb-[35px] border-l-4 border-[#eaeaea]">
                      <div class="occ pr-[20px]">
                        <h3 class="text-[17px] mb-[2px]">
                          Texas Tech University
                        </h3>
                        <span>Masters in Computer Science</span>
                      </div>
                      <div class="time inline-block">
                        <span class="inline-block bg-white py-[10px] px-[20px]">
                          2022-2024
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    class="w-full mb-[10px] wow fadeInLeft"
                    data-wow-duration="1s"
                  >
                    <div class="list_inner w-full relative flex justify-between bg-[#f7f7f7] px-[35px] pt-[40px] pb-[35px] border-l-4 border-[#eaeaea]">
                      <div class="occ pr-[20px] w-[70%]">
                        <h3 class="text-[17px] mb-[2px]">
                          St. Xavier's College
                        </h3>
                        <span>
                          Bachelors in Computer Science and Information
                          Technology
                        </span>
                      </div>
                      <div class="time inline-block">
                        <span class="inline-block bg-white py-[10px] px-[20px]">
                          2015-2019
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="w-full wow fadeInLeft" data-wow-duration="1s">
                    <div class="list_inner w-full relative flex justify-between bg-[#f7f7f7] px-[35px] pt-[40px] pb-[35px] border-l-4 border-[#eaeaea]">
                      <div class="occ pr-[20px]">
                        <h3 class="text-[17px] mb-[2px]">
                          St. Xavier's College
                        </h3>
                        <span>High School</span>
                      </div>
                      <div class="time inline-block">
                        <span class="inline-block bg-white py-[10px] px-[20px]">
                          2011-2014
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Timeline;
