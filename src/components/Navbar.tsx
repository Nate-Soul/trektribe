"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


type navbarProps = {
    transparent: boolean
};

const Navbar = ({ transparent }: navbarProps) => {

    const currentUrl = usePathname();
    const links = [
        {
            id: 1,
            url: "/",
            text: "Home"
        },
        {
            id: 2,
            url: "/blog",
            text: "Blog"
        },
        {
            id: 3,
            url: "/about",
            text: "About"
        }
    ];

  return (
    <nav className="bg-inherit flex items-center justify-between py-2 w-4/5">
        <ul className="flex items-center gap-x-8">
            {
                links && links.map((link, linkIndex) => (
                    <li 
                        key={linkIndex}
                        className={`${transparent ? 'hover:text-white' : 'hover:text-secondary-500'} ${currentUrl === link.url ? transparent ? 'text-white hover:text-primary-50' : 'text-secondary-500 hover:text-primary-500': ''}`}
                    >
                        <Link href={link.url}>{link.text}</Link>
                    </li>
                ))
            }
        </ul>
        <ul>
            <li className="flex gap-2 items-center"> en <span className={`${transparent ? 'bg-white' : 'bg-secondary-500'} h-px w-8 inline-flex`}></span> fr </li>
        </ul>
        <ul className="flex gap-x-4 items-center">
            <li><button></button><span className="bi-list"></span></li>
            <li><button></button><span className="bi-search"></span></li>
        </ul>
        
    </nav>
  )
}

export default Navbar
