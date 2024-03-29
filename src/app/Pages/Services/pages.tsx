// Import the necessary libraries
"use client";
import React, { useEffect, useRef, useState } from 'react';


function Services() {

  return (
    // Services section with a full height background
    <>



      {/* Services Head Start */}
      {/* <section className="h-screen text-black flex items-center justify-center">
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <h1 className='text-4xl font-semibold'>Our Services</h1>
          <p className='px-12 text-center text-lg font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut dui volutpat volutpat. Vulputate sed imperdiet magna ac nunc faucibus. Enim eget egestas ipsum sed sed non ut nulla. Et consectetur venenatis vulputate aliquet gravida eget non</p>
        </div>
      </section> */}
      {/* Services Head End */}

      {/* Services Intro Start */}
      <section className={`md:h-[900px] md:mb-0 mb-9 bg-gradient-to-r from-[#F1F1F4]  to-[#DEDDEA]`}>
        <div className="flex p-7 flex-col items-center md:items-strech gap-8 text-black">
          <h4 className='text-black font-semibold text-center'>Our Services</h4>
          <h1 className='text-4xl text-[#020329] font-semibold text-center'>With Quality Services For You</h1>

          <div className="md:mt-6 flex flex-col justify-left gap-6">
            <div className="flex md:flex-row flex-col gap-6 w-full md:ml-[200px]">
              <div className="z-10 flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>Mukham</h3>
                <img className='h-[300px]' src="/mukham.png" alt="" />
                <p className='font-light text-xs text-center'>Application to simplfy the overall process of marking attendance</p>
              </div>

              <div className="flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>MauthN</h3>
                <img className='h-[300px]' src="/m-auth.svg" alt="" />
                <p className='font-light text-xs text-center mt-[15px]'>Admire the authentication</p>
                <p className='font-light text-xs text-center'>Passwordless authentication to remove risk of cyber attacks</p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-6 md:ml-[500px]">
              <div className="z-10 flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>mXdr</h3>
                <img className='h-[300px]' src="/mxdr.svg" alt="" />
                <p className='font-light text-xs text-center'>Extended detection and response</p>
              </div>

              <div className="flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services ">
                <h3 className='text-xl font-semibold mt-9'>M-Isolate</h3>
                <img className='h-[300px]' src="/misolate.png" alt="" />
                <p className='font-light text-xs text-center'>Disposable Workspaces & <br /> Safest Web Browser in the World!</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Services Intro End */}

      {/* Services Anything Start */}
      <section className="h-[350px] w-full flex shadow-inset items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-[#E2F9F7] mb-9">
        <div className="flex flex-col items-center justify-center gap-7 text-black">
          <h1 className='font-semibold text-center text-3xl'>Anything to Discuss with Us?</h1>
          <p className='font-light text-center'>Ready to explore the future of security? Let's discuss your biometric solutions. Whether you have inquiries or <br />seek collaboration opportunities, we're here to elevate your security standards together.</p>
          <button className='text-sm text-white bg-[#423359] px-14 py-4'>Contact Us</button>
        </div>
      </section>
      {/* Services Anything End */}


      {/* Services Testimonials Start */}
      {/* <section ref={sectionRef} className={`md:h-screen ${isVisible ? 'animation' : ''}`}>
        <div className="flex md:flex-row flex-col items-center justify-center gap-[150px]">
          <div className="md:w-[450px] w-[300px] md:h-[300px] h-[260px] bg-[#ccc]">
            <img src="/testimonials.png" alt="" />
          </div>
          <div className="md:w-[500px] w-full text-black p-7">
            <h4 className='font-semibold text-sm text-black'>Testimonials</h4>
            <h1 className='text-4xl my-2 font-semibold '>Hello World, Welcome to <br /> <span className="text-[#FA975C]">Digital Fortress</span></h1>
            
            <p className='font-light text-xs my-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut dui volutpat volutpat. Vulputate sed imperdiet magna ac nunc faucibus. Enim eget egestas ipsum sed sed non ut nulla. Et consectetur venenatis vulputate aliquet gravida eget non. Nec aliquam dui morbi viverra. Arcu viverra augue tincidunt massa quam bibendum. <br /><br />Pharetra, in elementum mattis duis felis. In malesuada nisi, tincidunt ultrices tempus in tellus at sed. Rutrum est, lacus orci id convallis nibh ac. Justo dignissim eget cras aliquam, eu duis consectetur. Nunc quam sed tellus neque. Vitae mi magna gravida pretium dui. Porttitor ac eget urna egestas faucibus adipiscing </p>

            <p className='font-semibold text-base'>Name-Position</p>
          
          </div>
        </div>
      </section> */}
      {/* Services Testimonials End */}


      {/* Footer Section Start */}
      <section className="">

        <div className="text-white footer-main bg-[#FA975C] p-10 w-full flex flex-col items-center">

          <div className="flex md:flex-row flex-col  justify-around p-3 w-full">
            <div className="flex flex-col items-center justify-center md:mb-0 mb-6 gap-6">
              <p>Follow us on Socials</p>
              <div className='flex gap-4'>
                <img src="/insta.png" alt="" className="h-5 w-5" />
                <img src="/twitter-256.png" alt="" className="h-5 w-5" />
                <img src="/linkedin-256.png" alt="" className="h-5 w-5" />
                <img src="/facebook-256.png" alt="" className="h-5 w-5" />
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-9 ">
              <div className="flex flex-col text-white gap-3 mx-4">
                <h3 className='text-2xl font-semibold'>Our Products</h3>
                <ul className='flex flex-col gap-2.5'>
                  <li><a className='text-base' href="#">Mukham</a></li>
                  <li><a className='text-base' href="#">MauthN</a></li>
                  <li><a className='text-base' href="#">mXdr</a></li>
                  <li><a className='text-base' href="#">mIsolate</a></li>
                </ul>
              </div>

              <div className="flex flex-col text-white gap-3 mx-4">
                <h3 className='text-2xl font-semibold'>Page</h3>
                <ul className='flex flex-col gap-2.5'>
                  <li><a className='text-base' href="#">About Us</a></li>
                  <li><a className='text-base' href="#">Our Team</a></li>
                  <li><a className='text-base' href="#">Pricing</a></li>
                  <li><a className='text-base' href="#">Our Blog</a></li>
                </ul>
              </div>

              <div className="flex flex-col text-white gap-3 mx-4">
                <h3 className='text-2xl font-semibold'>Contact Us</h3>
                <ul className='flex flex-col gap-2.5'>
                  <li className='text-base flex gap-3'><img src="/mobile-phone-8-256.png" alt="" className="h-5 w-5" />&nbsp;+91 9585583918</li>
                  <li className='text-base flex gap-3'><img src="/mail-256.png" alt="" className="h-5 w-5" />&nbsp;sibi@digitalfortress.in</li>
                  <li className='text-base flex gap-3'><img src="/pin-8-256.png" alt="" className="h-5 w-5" />&nbsp;VTBIF, VIT AP University</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-base w-5/6 text-center">
            <br />
            <hr />
            <br />
            <p>All rights reserved</p>
          </div>
        </div>
      </section>
      {/* Footer Section End */}

    
    </>
  );
}

// Export the Services component
export default Services;
