"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

import Main from "./Pages/Main/pages";
import AboutUs from "./Pages/AboutUs/pages";
import Services from "./Pages/Products/pages";
import ContactUs from "./Pages/ContactUs/pages";

export default function Home() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('Main'); // Initial page is Main

  const handleNavigation = (page: string) => {
    setCurrentPage(page); // Set the current page based on the clicked button
    router.push('/'); // Navigate to the home page
  };

  // Render the current page component based on currentPage state
  const renderPage = () => {
    switch(currentPage) {
      case 'Main':
        return <Main />;
      case 'AboutUs':
        return <AboutUs />;
      case 'Products':
        return <Services />;
      case 'ContactUs':
        return <ContactUs />;
      default:
        return <Main />; // Default to Main page
    }
  };

  return (
    <main>
      <div className="flex md:flex-row flex-col md:text-base text-sm justify-between p-5">
        <div className="w-[200px]">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="flex font-light text-[#423359] md:mt-0 mt-6 gap-9">
          <button className="hover:text-indigo-900 hover:font-semibold" onClick={() => handleNavigation("Main")}>Home</button>
          <button className="hover:text-indigo-900 hover:font-semibold" onClick={() => handleNavigation("AboutUs")}>About Us</button>
          <button className="hover:text-indigo-900 hover:font-semibold" onClick={() => handleNavigation("Products")}>Products</button>
          
        </div>
        <div className="">
        <button className="bg-[#423359] px-6 py-4 text-white hover:text-[#f1f1f1]" onClick={() => handleNavigation("ContactUs")}>Contact Us</button>
        </div>
      </div>
      {renderPage()} {/* Render the current page component */}
    </main>
  );
}
