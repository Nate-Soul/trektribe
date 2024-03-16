"use client";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarSecondary from "./NavbarSecondary";



const MainHeader = () => {

    const currentUrl = usePathname();

  return (
    <header className="bg-white text-dark-300 text-lg pt-4">
        <div className="container flex items-center justify-between">
            <Logo/>
            <Navbar/>
        </div>
        {currentUrl === "/blog" && <NavbarSecondary/>}
    </header>
  )
}

export default MainHeader
