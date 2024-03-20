import SectionHeading from "@/components/subcomponents/SectionHeading";
import Image from "next/image";

import { teamMembers } from "@/data/team";

const AboutPage = () => {
  return (
    <>
      <section className="py-14">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
            <figure className="col-span-1">
                <Image 
                    src="/media/images/gallery/happy-tribers.png" 
                    alt="about trektribe" 
                    width={713} 
                    height={437}
                    priority
                />
            </figure>
            <article className="col-span-1">
                <SectionHeading title="About Us" />
                <p className="py-5 border-t border-b border-dashed border-light-400 text-[1.375rem] leading-[1.875rem]">
                    Welcome to our corner of the internet, where travelbugs meets wisdom, and every journey is a story waiting to be told. At Trektribe, we&apos;re more than just a travel website; we&apos;re your ultimate companion on the quest for adventure, discovery, and unforgettable experiences around the globe.
                </p>
            </article>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
            <SectionHeading title="Our Mission"/>
            <figure className="h-[448px] w-full relative">
                <Image
                    src="/media/images/gallery/hands-on-hands.png"
                    alt="hands holding hands signifying unity"
                    width={1142}
                    height={448}
                    className="w-full h-full object-cover"
                    priority
                />
                <figcaption className="absolute top-0 left-0 w-1/2 h-3/4 bg-white pr-24 pt-5 rounded-br-[144px]">
                    <p className="text-[1.375rem] leading-[1.875rem]">
                        At Trektribe, our mission is simple yet profound: to empower travelers like you with the knowledge, inspiration, and resources needed to turn your travel dreams into reality. We believe that travel isn&apos;t just about visiting new places; it&apos; about immersing yourself in cultures, embracing diversity, and creating memories that last a lifetime.
                    </p>
                </figcaption>
            </figure>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="gallery grid grid-rows-2 grid-cols-2 gap-3 justify-items-center">
                    <Image
                        src="/media/images/gallery/gallery-1.png"
                        alt="dunno again o"
                        width={246}
                        height={338}
                        className="col-span-1 row-span-2 w-full h-full object-cover rounded-l-lg"
                        priority
                    />
                    <Image
                        src="/media/images/gallery/gallery-3.png"
                        alt="dunno again o"
                        width={298}
                        height={163}
                        className="col-span-1 row-span-1 w-full h-full object-cover rounded-tr-lg"
                        priority
                    />
                    <Image
                        src="/media/images/gallery/gallery-2.png"
                        alt="dunno again o"
                        width={298}
                        height={163}
                        className="col-span-1 row-span-1 w-full h-full object-cover rounded-br-lg"
                        priority
                    />
                </div>
                <div>
                    <SectionHeading title="What We Offer" />
                    <div className="flex flex-col gap-y-6 text-[1.375rem] leading-[1.875rem]">
                        <p>
                            Through our meticulously curated blog posts and captivating travel vlogs, we strive to be your one-stop destination for everything travel-related. 
                        </p>
                        <p>
                            Whether you&apos;re seeking insider tips for off-the-beaten-path destinations, advice on the best way to prepare for your next adventure, or recommendations for reliable travel agencies, we&apos;ve got you covered.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
            <SectionHeading title="Meet Our Team"/>
            <div className="grid grid-cols-5 grid-rows-5">
                {teamMembers.length > 0 && teamMembers.map((teamMember, teamMemberIndex) => (
                    <figure 
                        key={teamMemberIndex}
                        className={`rounded-lg overflow-hidden w-32 h-32 ${teamMemberIndex === 2 ? 'row-start-1 row-end-3' :(teamMemberIndex === 0 || teamMemberIndex === 4) ? 'row-start-3 row-end-5' : (teamMemberIndex === 1 || teamMemberIndex === 3) ? 'row-start-2 row-end-4' : ''} col-start-${teamMemberIndex + 1}`}
                    >
                        <Image
                            src={teamMember.imageUrl}
                            alt={teamMember.name}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                ))}
            </div>
            <div className="text-[1.375rem] leading-[1.875rem] text-center w-1/2 mx-auto">
                <p>
                    Embark on a virtual journey with us as we uncover the most enchanting landscapes, bustling cities, and hidden gems across the globe.
                </p>
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
