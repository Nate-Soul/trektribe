import Image from "next/image";
import Link from "next/link";

import { ArticleProps } from "@/types/interfaces";

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
  return (
    <article 
        className="flex flex-col justify-between gap-y-5 px-6 border-light-400 text-dark-500"
    >
        <div className="flex flex-col gap-y-5">
            <Link href={`/blog/${article.title}`} className="block h-52 rounded-lg overflow-hidden">
                <Image 
                    src={article.featuredImageUrl} 
                    alt={article.title} 
                    height={208} 
                    width={267}
                    className="rounded-lg w-full h-full object-cover"
                />
            </Link>
            <div className="flex flex-col gap-y-5">
                <Link href={`/blog/${article.title}`}>
                    <h3 className="text-lg font-extrabold">{article.title}</h3>
                </Link>
                <p className="text-light-700">{article.excerpt}</p>
            </div>
        </div>
        <footer className="flex items-center gap-3">
            <div className="flex items-center gap-3">
                <Image
                    src={article.author.imageUrl}
                    alt={article.author.name}
                    height={22}
                    width={22}
                />
                {article.author.name}
            </div>
            <span className="w-2 h-2 rounded-full bg-dark-500"></span>
            <span>{article.createdAt}</span>
        </footer>
    </article>
  )
}

export default ArticleCard;
