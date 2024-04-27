"use client";

import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarSecondary from "./NavbarSecondary";


type mainHeaderProps = {
  transparent: boolean,
  otherClasses?: string
}

const MainHeader = ({ transparent, otherClasses }: mainHeaderProps) => {

    const currentUrl = usePathname();

  return (
    <header className={`${transparent ? 'bg-transparent text-light-300 w-full' : 'bg-white text-dark-300'} text-lg ${currentUrl === '/blog' ? 'pt-4' : 'py-3'} ${otherClasses ? otherClasses : ''}`}>
        <div className="container flex items-center justify-between">
            <Logo/>
            <Navbar transparent={transparent}/>
        </div>
        {currentUrl === "/blog" && <NavbarSecondary/>}
    </header>
  )
}

export default MainHeader
