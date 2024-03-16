"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const currentUrl = usePathname();
    const links = [
        {
            id: 1,
            url: "/",
            text: "Home"
        },
        {
            id: 1,
            url: "/blog",
            text: "Blog"
        },
        {
            id: 1,
            url: "/about",
            text: "About"
        },
        {
            id: 1,
            url: "/#",
            text: "More"
        },
    ];

  return (
    <nav className="bg-inherit flex items-center justify-between py-2 w-4/5">
        <ul className="flex items-center gap-x-8">
            {
                links && links.map((link, linkIndex) => (
                    <li 
                        key={linkIndex}
                        className={`hover:text-secondary-500 ${currentUrl === link.url && 'text-secondary-500 hover:text-primary-500'}`}
                    >
                        <Link href={link.url}>{link.text}</Link>
                    </li>
                ))
            }
        </ul>
        <ul>
            <li className="flex gap-2 items-center"> en <span className="bg-secondary-500 h-px w-8 inline-flex"></span> fr </li>
        </ul>
        <span>Search</span>
    </nav>
  )
}

export default Navbar
