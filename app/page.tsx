import { Social } from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'
import { Photo } from "@/components/Photo"
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <section className="size-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-9 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-2xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Weslley</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90">I excel at crafting elegant digital experiences and I am proeficient in various programing langages and techologies </p>

            {/* btn and social medias  */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                className="gap-1 uppercase flex items-center hover:text-accent hover:border-accent">
                <span className=""
                >Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                items-center text-accent text-base hover:bg-accent hover:text-primary hover:border-accent hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-2 xl:mb-0 mt-0 xl:mt-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
