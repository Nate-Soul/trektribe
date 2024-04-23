import MainHeader from "@/components/MainHeader";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="relative bg-[url(/media/images/gallery/villa.png)] bg-no-repeat bg-center bg-cover">
      <div className="absolute top-0 left-0 w-full h-full flex z-0">
        <div className="w-1/4 bg-primary-500 h-full"></div>
        <div className="w-3/4 bg-black bg-opacity-10 h-full"></div>
      </div>
      <div className="container min-h-screen flex items-center">
        <div className="hero-text z-10 w-4/5 flex flex-col gap-y-6">
          <p className="uppercase text-xl text-secondary-500">Tour Guide</p>
          <h1 className="text-7xl text-white font-bold">
            Travel Savvy: Your Key to Seamless Adventures
          </h1>
          <p className="font-light text-light-300">
            Prepare for your travels like a seasoned explorer with our insider knowledge on the safest, most breathtaking destinations and the best strategies for every type of adventure. Let us guide you through the best travel seasons, top-notch agencies, and essential hacks for seamless exploration.
          </p>
          <Link href="/blog" className="font-extrabold inline-flex gap-x-2 items-center text-white">
            <span className="bi-arrow-right rounded-full h-6 w-6 bg-white text-black inline-flex justify-center items-center"></span>
            Explore
          </Link>
        </div>
        <div className="hero-icons w-1/5 flex flex-col items-end">
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
  );
}
