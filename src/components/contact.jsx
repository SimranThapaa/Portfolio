import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
function Contact() {
  return (
    <div
      class="=contact w-full pt-[143px] px-0 pb-[140px] bg-[#f5f5f5] text-left"
      id="contact"
    >
      <div class="container mx-auto">
        <div class="title w-full mb-[70px] wow fadeInLeft">
          <span
            class="subtitle inline-block mb-[10px] uppercase relative pl-[60px]"
            data-wow-duration="1s"
          >
            Contact
          </span>
          <h3 class="text-[45px] font-bold">Get in Touch</h3>
        </div>
        <div class="contact_inner w-full ">
          <Accordion>
            <div className="accordion active w-full mb-[10px] ">
              <AccordionItem header="Social Profile" initialEntered>
                <div
                  className="accordion_content w-full p-[40px] bg-white"
                  style={{ display: "block" }}
                >
                  <div class="social w-full">
                    <ul class="flex flex-wrap ml-[-20px]">
                      <li class="w-1/2 mb-[14px] pl-[20px]">
                        <a class="text-black line_effect" href="#">
                          Linkedin
                        </a>
                      </li>
                      <li class="w-1/2 mb-[14px] pl-[20px]">
                        <a class="text-black line_effect" href="#">
                          GitHub
                        </a>
                      </li>
                      <li class="w-1/2 mb-[14px] pl-[20px]">
                        <a class="text-black line_effect" href="#">
                          Codepen
                        </a>
                      </li>
                      <li class="w-1/2 mb-[14px] pl-[20px]">
                        <a class="text-black line_effect" href="#">
                          Medium
                        </a>
                      </li>
                      <li class="w-1/2 mb-[14px] pl-[20px]">
                        <a class="text-black line_effect" href="#">
                          Facebook
                        </a>
                      </li>
                      <li class="w-1/2 pl-[20px]">
                        <a class="text-black line_effect" href="#">
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            </div>

            <div className="accordion active w-full mb-[10px]">
              <AccordionItem header="Extra Info">
                <div className="accordion_content w-full p-[40px] bg-white">
                  <div class="info_list w-full">
                    <ul>
                      <li class="w-full mb-[14px]">
                        <span class="inline-block min-w-[135px] pr-[20px]">
                          Address:
                        </span>
                        <span class="inline-block">
                          3122, 4th Street 2303, Lubbock, Texas, 79415
                        </span>
                      </li>
                      <li class="w-full mb-[14px]">
                        <span class="inline-block min-w-[135px] pr-[20px]">
                          Email:
                        </span>
                        <span class="inline-block">
                          <a class="text-black line_effect" href="#">
                            simran.thapa2052@gmail.com
                          </a>
                        </span>
                      </li>
                      <li class="w-full mb-[14px]">
                        <span class="inline-block min-w-[135px] pr-[20px]">
                          Phone:
                        </span>
                        <span class="inline-block">
                          <a class="text-black line_effect" href="#">
                            +1(806)3176456
                          </a>
                        </span>
                      </li>
                      <li class="w-full">
                        <span class="inline-block min-w-[135px] pr-[20px]">
                          Website:
                        </span>
                        <span class="inline-block">
                          <a class="text-black line_effect" href="#">
                            www.thesimranthapa.com
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            </div>
            <div className="accordion active w-full mb-[10px]">
              <AccordionItem header="Fill the Form">
                <div className="accordion_content w-full p-[40px] bg-white">
                  <div className="info_list w-full">
                    <ul>
                      <li className="mb-5">
                        <input
                          type="text"
                          placeholder="Name"
                          name="contact_name"
                          className="bg-[#eaeaea] px-6 py-3 outline-none w-full"
                        />
                        <span></span>
                      </li>
                      <li className="mb-5">
                        <input
                          type="text"
                          placeholder="Email"
                          name="contact_email"
                          className="bg-[#eaeaea] px-6 py-3 outline-none w-full"
                        />
                        <span></span>
                      </li>
                      <li className="mb-5">
                        <input
                          type="text"
                          placeholder="Phone"
                          name="contact_phone"
                          className="bg-[#eaeaea] px-6 py-3 outline-none w-full"
                        />
                        <span></span>
                      </li>

                      <li id="text-area-w mb-5">
                        <textarea
                          placeholder="Message"
                          name="contact_message"
                          className="bg-[#eaeaea] px-6 py-3 outline-none w-full "
                        ></textarea>
                      </li>
                    </ul>
                  </div>

                  <div className="button mt-8">
                    <a
                      href="assets/img/cv/1.jpg"
                      download=""
                      className="bg-black text-white inline-block py-5 px-10 transition-all ease-linear hover:shadow-lg"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
export default Contact;
