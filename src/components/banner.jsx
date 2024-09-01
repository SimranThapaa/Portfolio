import React from "react";
function Banner() {
  return (
    <div className="home w-full h-auto clear-both clearfix" id="home">
      <div className="hero-banner w-full min-h-[100vh] relative">
        <div className=" container mx-auto">
          <div className="content w-full h-[100vh] relative flex items-center">
            <div className="details flex items-center">
              {/* <div className="image relative w-[450px] h-[450px]">
                  <img></img>
                </div> */}
              <div className="text text-left">
                <h3 className="stroke text-[130px] font-extrabold leading-[1.1] uppercase font-archivo">
                  Simran
                </h3>
                <h3 className="text-[130px] font-extrabold leading-[1.1] uppercase font-archivo">
                  Thapa
                </h3>
                <div className="job inline-block bg-[#f5f5f5] py-[15px] px-[40px] mt-[30px]">
                  <span className="job-title relative inline-block pr-4 mr-2">
                    UI Developer
                  </span>
                  <span className="job-title relative inline-block pr-4 mr-2">
                    Web Developer
                  </span>
                  <span className="job-title relative inline-block pr-4 mr-2">
                    Frontend Developer
                  </span>
                  <span className="relative inline-block pr-4 mr-2">
                    FullStack Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
