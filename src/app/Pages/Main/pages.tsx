'use client'
import Image from "next/image";
import award from '@/app/assets/Award.svg';
import BG from '@/app/assets/BG.svg';

function Main() {

  const handleStarted = () => {
    var x = document.getElementById('text1');
    var hero = document.getElementById('hero');
    var btn = document.getElementById('getStarted');
    var image = document.getElementById('image');
    var award = document.getElementById('award');

    x?.classList.replace('text-lg', 'text-xl');
    x?.classList.add('text-white');
    btn?.classList.add('hidden');
    hero?.classList.replace('text-[#E76E26]','text-white')
    image?.classList.add('h-screen', 'w-full', 'z-0','transition-image');
    image?.classList.remove('hidden');
    award?.classList.add('hidden'); // Hide awards section
  }

  return (
<>
<section className="h-screen relative">
      {/* Background Image */}
      <div id="image" className="transition ease-in duration-1000 hidden absolute inset-0 overflow-hidden">
        <Image src={BG} alt="Background Image" layout="fill" objectFit="cover" />
      </div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <h1 id="hero" className="transition text-center ease-in-out duration-500 md:text-7xl text-4xl text-[#E76E26] md:tracking-wide">
          Redefining The Authentication
        </h1>
        <p id="text1" className="text-black  text-lg w-7/12 text-center mt-2 transition ease-in-out duration-500 mx-auto tracking-normal">
          It involves using biometric security software to automatically recognise people based on their behavioural or biological characteristics.
        </p>
        <button id="getStarted" className="mt-7 bg-[#423359] hover:bg-[#6f5b8d] py-4 px-9" onClick={handleStarted}>
          Get started
        </button>
      </div>
      {/* Award section */}
      <div id="award" className="md:opacity-100 opacity-0 absolute inset-y-0 right-0">
        <div className="flex justify-center text-[#0A394A]">
          <Image src={award} height={600} width={300} alt="award-image" className="static object-cover"/>
          <div className="absolute flex flex-col justify-center text-center mt-24 gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="anton tracking-wide text-xs font-bold">DIGITAL FORTRESS PRIVATE LIMITED</h1>
              <p className="poppins text-xs">Cyber Security</p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="anton tracking-wide text-sm font-bold">DeepTech AI & Cloud Summit</h1>
              <p className="poppins text-xs">10th Feb 2024</p>
              <p className="poppins-med text-xs">Visakhapatnam</p>
            </div>
          </div>
        </div>  
      </div>
    </section>

      <section className="md:h-screen md:mb-0 mb-6 flex items-center justify-center">
        <div className="flex md:flex-row flex-col gap-16 justify-center items-center">
          <div className="z-10 text-black flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <img className='h-[100px]' src="/seamless.svg" alt="" />
                <h3 className='text-xl font-semibold mt-9'>Seamless Integration</h3>
                <p className='font-light text-xs text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut </p>
          </div>

          <div className="z-10 text-black flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <img className='h-[100px]' src="/biometric.svg" alt="" />
                <h3 className='text-xl font-semibold mt-9'>Multi model Biometric</h3>
                <p className='font-light text-xs text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut </p>
          </div>

          <div className="z-10 text-black flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <img className='h-[100px]' src="/easy-access.svg" alt="" />
                <h3 className='text-xl font-semibold mt-9'>Easy to access</h3>
                <p className='font-light text-xs text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut </p>
          </div>
        </div>
      </section>

      <section className={`md:h-screen  flex md:flex-row p-9 flex-col items-center justify-around`}>
        <div className='md:w-[350px] md:h-[350px] w-[300px] h-[300px]' >
          <img className="rounded-full shadow-2xl" src="/aboutus-logo.png" alt="" />
        </div>
        <div className="md:mt-0 mt-[50px]">
          <h4 className='text-black font-semibold'>About Us</h4>
          <h1 className='text-4xl text-[#020329] font-semibold'>Transform Security With <br /> Biometric Recognition. It's Just A <br /> Click Away With <span className="text-[#FA975C]">Digital Fortress</span></h1>
          <p className='my-7 text-[#6A6A6C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus <br /> modi eius voluptates delectus deserunt earum eaque natus eum. <br />  Et voluptatem doloremque cumque adipisci.</p>
          <button className='text-sm bg-[#423359] hover:bg-[#6f5b8d] px-14 py-4'>See Details</button>
        </div>
      </section>

      <section className={`md:h-[900px] md:mb-0 mb-9 bg-gradient-to-r from-[#F1F1F4] to-[#DEDDEA]`}>
        <div className="flex pt-6 flex-col items-center md:items-strech gap-8 text-black">
          <h4 className='text-black font-semibold text-center'>Our Services</h4>
          <h1 className='text-4xl text-[#020329] font-semibold text-center'>With Quality Services For You</h1>

          <div className="md:mt-6 flex flex-col justify-left gap-6">
            <div className="flex md:flex-row flex-col gap-6 w-full md:ml-[200px]">
              <div className="z-10 flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-white p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>Mukham</h3>
                <img className='h-[300px]' src="/mukham-logo.svg" alt="" />
                <p className='font-light text-xs text-center'>Application to simplfy the overall process of marking attendance</p>
              </div>

              <div className="flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-white p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>MauthN</h3>
                <img className='h-[300px]' src="/m-auth.svg" alt="" />
                <p className='font-light text-xs text-center mt-[15px]'>Admire the authentication</p>
                <p className='font-light text-xs text-center'>Passwordless authentication to remove risk of cyber attacks</p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-6 md:ml-[500px]">
              <div className="z-10 flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-white p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>mXdr</h3>
                <img className='h-[300px]' src="/mxdr.svg" alt="" />
                <p className='font-light text-xs text-center'>Extended detection and response</p>
              </div>

              <div className="flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-white p-9 shadow-services ">
                <h3 className='text-xl font-semibold mt-9'>M-Isolate</h3>
                <img className='h-[300px]' src="/m-isolate.svg" alt="" />
                <p className='font-light text-xs text-center'>Disposable Workspaces & <br /> Safest Web Browser in the World!</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="flex flex-col pt-20 pb-36 justify-center items-center text-center gap-10 text-black ">
        <h1 className="font-semibold text-4xl">Contact Us?</h1>
        <p className="text-lg font-extralight">Reach out to us for inquiries. Support, or collaboration opportunities.</p>
        <button className='text-sm text-white bg-[#423359] hover:bg-[#6f5b8d] px-14 py-4'>Click here</button>
      </section>

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

export default Main;