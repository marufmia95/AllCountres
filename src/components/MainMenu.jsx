import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const MainMenu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        {
            id: 1,
            title: "Home",
            link: "/",
        },
        {
            id: 5,
            title: "AllCountres",
            link: "/allcountres",
        },
        {
            id: 2,
            title: "News",
            link: "/news",
        },
        {
            id: 3,
            title: "Features",
            link: "/features",
        },
        {
            id: 4,
            title: "Contact",
            link: "/contact",
        },
       
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className=" manubar bg-[#3081D0] py-2">
         
           <div className="container flex mx-auto items-center justify-between">
               
               
               <div className="w-[20%]">
                   <Link to='/' className="text-white font-bold text-4xl font-roboto">NexusDev</Link>
               </div>


               <div className="w-[80%] hidden  md:flex !lg:flex justify-end gap-11 mt-[6px]">
                   <ul className="flex gap-11">
                       {menuItems.map(item => (
                           <li key={item.id}>
                               <Link to={item.link} className="text-white font-roboto font-medium">
                                   {item.title}
                               </Link>
                           </li>
                       ))}
                   </ul>
               </div>



               <div className="lg:hidden">
                   <button onClick={toggleMobileMenu} className="text-white">
                       {isMobileMenuOpen?
                       <IoClose className="text-5xl text-red-700" />
                       :
                       <form className="text-4xl">☰</form>     
                       }
                   </button>
                   {isMobileMenuOpen && (
                       <div className="absolute top-14 right-0 bg-green-950 rounded-lg w-[30%] py-2">
                           <ul className="flex flex-col items-center  ">
                               {menuItems.map(item => (
                                   <li key={item.id}>
                                       <Link
                                           to={item.link}
                                           className="ply text-white font-roboto font-medium hover:text-[#ff00ff] "
                                           onClick={toggleMobileMenu}
                                       >
                                           {item.title}
                                       </Link>
                                   </li>
                               ))}
                           </ul>
                       </div>
                   )}
               </div>
           </div>
          
        </nav>
    );
};

export default MainMenu;
