import Link from "next/link";
import MainHeader from "@/components/MainHeader";

const page = () => {
  return (
    <>
    <MainHeader transparent={true} otherClasses="fixed top-0 z-40"/>
    <section className="relative bg-[url(/media/images/gallery/villa.jpg)] bg-no-repeat bg-center bg-cover pt-24 pb-8">
      <div className="absolute top-0 left-0 w-full h-full flex z-0">
        <div className="w-1/4 h-full flex">
            <div className="bg-primary-600 text-white w-2/5 h-full flex flex-col justify-between items-center pt-[20%] pb-8">
                <button>
                    <span className="bi-arrow-left"></span>
                </button>
                <span className="text-lg rotate-[270deg]">Greece</span>
                <div className="rotate-[270deg] flex gap-x-2 items-center">
                    <span className="h-1 w-1 rounded-full bg-light-700"></span>
                    <span className="h-1 w-1 rounded-full bg-light-700"></span>
                    <span className="h-1 w-1 rounded-full bg-white"></span>
                    <span className="h-1 w-1 rounded-full bg-light-700"></span>
                </div>
                <div className="flex flex-col items-center gap-0">
                    <span className="h-[72px] w-[2px] bg-light-300"></span>
                    <span className="bi-chevron-down text-light-300 -mt-3"></span>
                </div>
            </div>
            <div className="bg-primary-500 w-3/5 h-full"></div>
        </div>
        <div className="w-3/4 bg-black bg-opacity-80 h-full"></div>
      </div>
      <div className="container flex items-center justify-between">
        <div className="hero-text z-10 pl-5">
            <div className="rounded-xl bg-white shadow-lg px-8 pt-8 pb-16 w-1/2 flex flex-col gap-y-8">
                <div className="flex justify-between items-center gap-0">
                    <h5 className="font-semibold text-2xl text-secondary-500">Cover Story</h5>
                    <div className="flex items-center gap-x-3">
                    <div className="rounded-full text-xs w-6 h-6 bg-secondary-500 text-white inline-flex justify-center items-center">1</div>
                    <span className="bi-caret-right-fill"></span>
                    </div>
                </div>
                <h1 className="text-5xl text-secondary-500 font-extrabold leading-[65.57px]">The Great Wall of China</h1>
                <div className="flex flex-col gap-y-6 text-light-700">
                    <p className="text-lg">Discover the beautiful story</p>
                    <p className="text-xl">
                        This museum houses ancient artifacts that have been found on Crete. Specifically it covers the neolithic and historic periods from 7000 BCE to 200 ACE.
                    </p>
                    <Link href="/blog/the-great-wall-of-china" className="btn btn-primary w-max">Read More</Link>
                </div>
            </div>
        </div>
        <div className="hero-icons z-10 flex flex-col items-end">
          <ul className="flex flex-col gap-y-8 text-white text-2xl">
            <li className="hover:text-white">
              <span className="bi-whatsapp"></span>
            </li>
            <li className="hover:text-white">
              <span className="bi-envelope"></span>
            </li>
            <li className="hover:text-white">
              <span className="bi-facebook"></span>
            </li>
          </ul>
          <div className="flex items-center gap-x-2 text-white mt-[100%]">
            <span>00</span>
            <span className="h-px w-20 bg-white"></span>
            <span>10</span>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default page
