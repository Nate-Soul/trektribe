import Image from "next/image";
import Link from "next/link";

import { articles } from "../../data/articles";
import { vlogs } from "../../data/vlogs";

import ArticleCard from "@/components/subcomponents/ArticleCard";
import SectionHeading from "@/components/subcomponents/SectionHeading";
import VlogCard from "@/components/subcomponents/VlogCard";

const BlogList = () => {

    const featuredArticle = articles[0];

  return (
    <>
        <section className="py-6">
            <div className="container">
                <div className="relative h-[725px] w-full">
                    <Image 
                        src={featuredArticle.featuredImageUrl}
                        alt="lady taking pictures with a camera" 
                        height={725} 
                        width={1143}
                        className="w-full h-full object-cover" 
                        priority
                    />
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-dark-500 bg-opacity-40"></div>
                    <div className="absolute p-5 flex flex-col gap-y-6 text-white bottom-0 self-end">
                        <h2 className="text-2xl uppercase">Featured</h2>
                        <h1 className="text-5xl font-extrabold capitalize leading-[81.96px]">{featuredArticle.title}</h1>
                        <p className="light-500 text-2xl leading-8">{featuredArticle.excerpt}</p>
                        <Link 
                            href="/blog/from-dereams-to-reality"
                            className="py-2 px-3 border bg-transparent inline-flex gap-x-2 justify-center items-center w-max rounded-lg"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16">
            <div className="container">
                <SectionHeading title="Recent Blog Posts" />
                <div className="grid grid-cols-3 gap-x-0 gap-y-16">
                    {articles.length > 0 && articles.splice(1).map((article, articleIndex) => (
                        <ArticleCard article={article} key={articleIndex} />
                    ))}
                </div>
                <div className="mt-20 flex items-center justify-center">
                    <button 
                        className="rounded-lg bg-primary-500 text-white py-2 px-3 inline-flex justify-center items-center gap-x-2"
                    >
                        Load More
                        <span className="bi-arrow-repeat"></span>
                    </button>
                </div>
            </div>
        </section>
        <section className="pt-20 pb-32">
            <div className="container">
                <SectionHeading title="Recent Vlogs" />
                <div className="horizontal-scroll hide-scrollbar gap-x-8">
                    {vlogs.length > 0 && vlogs.map((vlog, vlogIndex) => (
                        <VlogCard vlog={vlog} key={vlogIndex} />
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default BlogList
