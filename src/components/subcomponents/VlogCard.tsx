import Image from "next/image";

import { VlogCardProps } from "@/types/interfaces";


const VlogCard: React.FC<VlogCardProps> = ({ vlog }) => {
  return (
    <div 
        className="basis-[35%] flex-none flex flex-col justify-between gap-y-4"
    >
        <div className="flex flex-col gap-y-4">
            <div className="h-60 overflow-hidden rounded-lg">
                <Image 
                    src={vlog.posterImageUrl}
                    alt={vlog.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                />
            </div>
            <div className="flex gap-3">
                <Image 
                    src={vlog.author.imageUrl}
                    alt={vlog.author.name}
                    width={51}
                    height={51}
                    className="w-12 h-12 object-cover rounded-full"
                />
                <h3 className="capitalize text-dark-500 font-extrabold text-lg leading-6">
                    {vlog.title}
                </h3>
            </div>
        </div>
        <footer className="flex items-center justify-between">
            <h6 className="text-dark-500">{vlog.author.name}</h6>
            <div className="flex items-center gap-x-3 text-light-700 text-sm">
                <span>{vlog.views}</span>
                <span className="rounded-full w-[6px] h-[6px] bg-light-700"></span>
                <span>{vlog.publishedAt}</span>
            </div>
        </footer>
    </div>
  )
}

export default VlogCard
