import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

function About() {
  return (
    <div
      className="about w-full bg-[#f7f7f7] px-0 py-[143px] text-left"
      id="about"
    >
      <div className="container mx-auto">
        <div className="about_inner w-full flex">
          <div
            className="left wow fadeInLeft w-1/2 pr-[50px]"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInLeft",
            }}
          >
            <div className="title w-full mb-[30px]">
              <span className="inline-block mb-[10px] uppercase relative pl-[60px] subtitle">
                Simran Thapa
              </span>
              <h3 className="text-[45px] font-bold">
                Software Engineer based in Texas, USA since 2019
              </h3>
            </div>
            <div className="text w-full mb-[40px]">
              <p>
                My name is Simran Thapa and I am a Software Engineer, and I'm
                very passionate and dedicated to my work. With 4 years
                experience as a professional software engineer, I have acquired
                the skills and knowledge necessary to make your project a
                success. I enjoy every step of the software development process,
                from UI implementation and animations.
              </p>
            </div>
            <div className="button">
              <a
                href="assets/img/cv/1.jpg"
                download=""
                className="bg-black text-white inline-block py-5 px-10 transition-all ease-linear hover:shadow-lg"
              >
                Download CV
              </a>
            </div>
          </div>
          <div
            className="right wow fadeInLeft w-1/2 pl-[50px]"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.2s",
              animationName: "fadeInLeft",
            }}
          >
            <Accordion>
              <div className="accordion active w-full mb-[10px] ">
                <AccordionItem header="Personal Details" initialEntered>
                  <div
                    className="accordion_content w-full p-[40px] bg-white"
                    style={{ display: "block" }}
                  >
                    <div className="info_list w-full">
                      <ul>
                        <li className="w-full mb-[14px]">
                          <span className="inline-block min-w-[135px] pr-[20px]">
                            Name:
                          </span>
                          <span className="inline-block">Simran Thapa</span>
                        </li>
                        <li className="w-full mb-[14px]">
                          <span className="inline-block min-w-[135px] pr-[20px]">
                            Email:
                          </span>
                          <span className="inline-block">
                            <a className="line_effect text-black" href="#">
                              simran.thapa2052@gmail.com
                            </a>
                          </span>
                        </li>
                        <li className="w-full">
                          <span className="inline-block min-w-[135px] pr-[20px]">
                            Phone:
                          </span>
                          <span className="inline-block">
                            <a className="line_effect text-black" href="#">
                              +1(806)3176456
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionItem>
              </div>

              <div className="accordion active w-full mb-[10px]">
                <AccordionItem header="Programming Skills">
                  <div className="accordion_content w-full p-[40px] bg-white">
                    <div className="info_list w-full">
                      <div className="my_skills">
                        <ul>
                          <li className="w-full mb-[14px] flex items-center">
                            <span className="title min-w-[135px] pr-[20px]">
                              ReactJs
                            </span>
                            <div className="progress w-full relative">
                              <div className="progress_inner" data-value="60">
                                <div className="background h-2 bg-[#0000000d] w-full">
                                  <div className="bar open h-full">
                                    <div className="bar_in bg-[#d9d9d9] h-full w-[85%]"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="w-full mb-[14px] flex items-center">
                            <span className="title min-w-[135px] pr-[20px]">
                              PHP
                            </span>
                            <div className="progress w-full relative">
                              <div className="progress_inner" data-value="60">
                                <div className="background h-2 bg-[#0000000d] w-full">
                                  <div className="bar open h-full">
                                    <div className="bar_in bg-[#d9d9d9] h-full w-[75%]"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="w-full mb-[14px] flex items-center">
                            <span className="title min-w-[135px] pr-[20px]">
                              Python
                            </span>
                            <div className="progress w-full relative">
                              <div className="progress_inner" data-value="60">
                                <div className="background h-2 bg-[#0000000d] w-full">
                                  <div className="bar open h-full">
                                    <div className="bar_in bg-[#d9d9d9] h-full w-[70%]"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              </div>
              <div className="accordion active w-full mb-[10px]">
                <AccordionItem header="Language Skills">
                  <div className="accordion_content w-full p-[40px] bg-white">
                    <div className="info_list w-full">
                      <div className="my_skills">
                        <ul>
                          <li className="w-full mb-[14px] flex items-center">
                            <span className="title min-w-[135px] pr-[20px]">
                              English
                            </span>
                            <div className="progress w-full relative">
                              <div className="progress_inner" data-value="60">
                                <div className="background h-2 bg-[#0000000d] w-full">
                                  <div className="bar open h-full">
                                    <div className="bar_in bg-[#d9d9d9] h-full w-[90%]"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="w-full mb-[14px] flex items-center">
                            <span className="title min-w-[135px] pr-[20px]">
                              Nepali
                            </span>
                            <div className="progress w-full relative">
                              <div className="progress_inner" data-value="60">
                                <div className="background h-2 bg-[#0000000d] w-full">
                                  <div className="bar open h-full">
                                    <div className="bar_in bg-[#d9d9d9] h-full w-[100%]"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="w-full mb-[14px] flex items-center">
                            <span className="title min-w-[135px] pr-[20px]">
                              Hindi
                            </span>
                            <div className="progress w-full relative">
                              <div className="progress_inner" data-value="60">
                                <div className="background h-2 bg-[#0000000d] w-full">
                                  <div className="bar open h-full">
                                    <div className="bar_in bg-[#d9d9d9] h-full w-[80%]"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
