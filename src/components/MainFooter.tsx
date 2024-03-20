import Image from "next/image";
import Link from "next/link";

import Logo from "./Logo";

const MainFooter = () => {
  return (
    <footer className="py-16 bg-secondary-500 text-white">
        <div className="container flex flex-col gap-y-16 items-center">
            <div className="flex gap-3 items-center">
                <span className="h-px bg-light-700 w-72"></span>
                <Logo/>
                <h5 className="text-4xl font-bellefair">TrekTribe.com</h5>
                <span className="h-px bg-light-700 w-72"></span>
            </div>
            <div className="flex flex-col gap-y-3 items-center">
                <ul className="flex gap-x-5 items-center">
                    <li className="bg-light-400 w-[50px] h-[47px] rounded-2xl inline-flex items-center justify-center">
                        <Link href="https://instagram.com/trektribe">
                            <Image src="/media/images/icons/youtube.svg" height={30} width={30} alt="TrekTribe's YouTube channel" />
                        </Link>
                    </li>
                    <li className="bg-light-400 w-[50px] h-[47px] rounded-2xl inline-flex items-center justify-center">
                        <Link href="https://instagram.com/trektribe">
                            <Image src="/media/images/icons/instagram.svg" height={30} width={30} alt="TrekTribe's instagram handle" />
                        </Link>
                    </li>
                    <li className="bg-light-400 w-[50px] h-[47px] rounded-2xl inline-flex items-center justify-center">
                        <Link href="https://instagram.com/trektribe">
                            <Image src="/media/images/icons/facebook.svg" height={30} width={30} alt="TrekTribe's facebook page" />
                        </Link>
                    </li>
                </ul>
                <p className="text-light-700 text-[1.75rem] font-bellefair">&copy; <span>2022</span> TrekTribe.com | All rights reserved.</p>
            </div>
        </div>
      
    </footer>
  )
}

export default MainFooter
