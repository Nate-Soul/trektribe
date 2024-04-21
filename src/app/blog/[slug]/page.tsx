import Image from "next/image";
import Link from "next/link";


const BlogDetail = () => {
  return (
    <>
    <div className="relative h-screen bg-[url(/media/images/blog/gallery/the-great-wall-of-china-1.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
    </div>
    <section className="pb-16 bg-white">
      <div className="container relative z-20">
        <div className="-mt-[30%] rounded-xl bg-white shadow-lg px-5 pt-8 pb-10 w-4/5 flex flex-col gap-y-8 mx-auto">
          <div className="flex justify-between items-center gap-0">
            <h5 className="font-semibold text-2xl text-secondary-500">Cover Story</h5>
            <div className="flex items-center gap-x-3">
              <div className="rounded-full text-xs w-6 h-6 bg-secondary-500 text-white inline-flex justify-center items-center">1</div>
              <span className="bi-caret-right-fill"></span>
            </div>
          </div>
          <h1 className="text-6xl text-secondary-500">The Great Wall of China</h1>
          <div className="flex flex-col gap-y-6 text-light-700 text-xl">
            <p>Discover the beautiful story</p>
            <p>24th February, 2024</p>
            <p>
              Though the Great Wall is over 6,000 kilometers long, the best 10 sections to visit are around Beijing's north and east: 1 the best-restored, Mutianyu, 2 the most beautiful, Jinshanling, 3 the wildest, Jiankou, Simatai,5 Huanghuacheng, 6 Gubeikou, 7 Juyongguan, 8 Huangyaguan, 9 Shanhaiguan, and by far the most crowded 10 Badaling.
            </p>
            <p>
              The Mutianyu section is the most popular among international travelers. This is the most child-friendly section
            </p>
            <p>
              Location: 73 kilometers (45 miles) from Beijing, 1½ hours driveFeatures: A superb example of Great Wall fortifications, Mutianyu is uniquely-designed with watchtowers and fortresses densely spaced along its length, and crenellations on both sides. First Lady Michelle Obama has visited it. Activities: sightseeing, hikingTour Time: half a dayFacilities: cable cars or chairlifts up/down and toboggan down
            </p>
          </div>
          <div className="flex items-center justify-end gap-x-3">
            <button className="btn btn-outline-secondary">See Ticket</button>
            <button className="btn btn-secondary">Visit</button>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16">
      <div className="container">
        <header className="flex items-center justify-between mb-8">
          <h2 className="font-bold text-3xl">Gallery</h2>
          <Link href="/blog" className="text-primary-300 hover:text-primary-500">See All</Link>
        </header>
        <div className="grid grid-cols-3 grid-rows-4 gap-4">
          <div className="col-span-1 row-span-4">
            <Image src="/media/images/blog/gallery/the-great-wall-of-china-2.png" alt="side view" height={750} width={365} className="w-full h-full object-cover" priority/>
          </div>
          <div className="col-start-2 row-start-1 row-span-2 grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Image src="/media/images/blog/gallery/the-great-wall-of-china-3.png" alt="side view" height={200} width={200}className="w-full h-full object-cover" priority/>
            </div>
            <div className="col-span-1">
              <Image src="/media/images/blog/gallery/the-great-wall-of-china-4.png" alt="side view" height={200} width={200} className="w-full h-full object-cover" priority/>
            </div>
            <div className="col-span-1">
              <Image src="/media/images/blog/gallery/the-great-wall-of-china-5.png" alt="side view" height={200} width={200} className="w-full h-full object-cover" priority/>
            </div>
            <div className="col-span">
              <Image src="/media/images/blog/gallery/the-great-wall-of-china-6.png" alt="side view" height={200} width={200} className="w-full h-full object-cover" priority/>
            </div>
          </div>
          <div className="col-start-2 row-start-3 row-span-2">
            <Image src="/media/images/blog/gallery/the-great-wall-of-china-7.png" alt="side view" height={380} width={380} className="w-full h-full object-cover" priority/>
          </div>
          <div className="col-span-1 row-span-4">
            <Image src="/media/images/blog/gallery/the-great-wall-of-china-8.png" alt="side view" height={750} width={365} className="w-full h-full object-cover" priority/>
          </div>
        </div>
        <div className="text-light-700 text-lg my-12">
          <p>
            With its 52 distinguished neoclassical structures, the Bund stands as a testament to China's rich history and modern architectural prowess. Strolling along the Bund Riverside Promenade, one can revel in the picturesque vistas flanking both banks of the Huangpu River, immersing oneself in the vibrancy and allure of the city. In this new travel guide to the Bund in 2023, you will get a comprehensive introduction to the history and present of the Bund. Getting what to see and things to do in the Bund will help you better plan a regretless Bund tour.
          </p>
        </div>
        <figure>
          <Image src="/media/images/blog/gallery/the-great-wall-of-china-9.png" alt="side view" height={846} width={1114} className="w-full h-full object-cover" priority/>
          <figcaption className="flex justify-between px-2 py-3">
            <Link href="/" className="underline text-primary-200 hover:text-primary-500">
              See tips for visiting The Bund Shanghai 
              <span className="bi-chevron-right"></span>
              <span className="bi-chevron-right"></span>
              <span className="bi-chevron-right"></span>
            </Link>
            <div className="flex items-center gap-x-4">
              <div>
                <button>
                  <span className="bi-heart mr-2"></span> 
                </button>
                20 Likes
              </div>
              <div>
                <button>
                  <span className="bi-chat-right mr-2"></span>
                </button>
                5 Comments
              </div>
            </div>
          </figcaption>
        </figure>
        <div className="my-12 flex items-center justify-center gap-x-3">
            <button className="btn btn-outline-primary">Back</button>
            <button className="btn btn-primary">Visit</button>          
        </div>
      </div>
    </section>
    </>
  )
}

export default BlogDetail
