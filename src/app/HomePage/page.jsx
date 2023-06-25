import Navbar from "../Navbar/page";
import Explore from "@/components/ExploreButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen h-screen bg-mobileHome md:bg-tabletHome lg:bg-desktopHome bg-cover bg-left bg-no-repeat flex items-start pt-28 md:items-end md:pb-28 lg:pb-48 overflow-x-hidden">
        <section className="w-[20.5rem] md:w-[28.125rem] lg:w-screen h-fit mx-auto flex flex-col justify-center lg:block lg:px-16">
          <div className=" lg:flex mx-auto lg:ml-12 justify-between items-center ">
            <div>
              <h3 className="text-center text-lightBlue tracking-[2.7px] md:text-xl md:mb-6 lg:text-left lg:text-[1.8rem]">
                SO, YOU WANT TO TRAVEL TO
              </h3>
              <h1 className="font-belleFair text-center text-white text-[5rem] md:text-[9.375rem] leading-[6.25rem] tracking-[5px] mb-4 md:mb-6 md:leading-[9.375rem] lg:text-left">
                SPACE
              </h1>

              <p className="text-lightBlue md:w-[27.755rem] leading-6 md:leading-7 text-[0.9375rem] md:text-base text-center mb-6 md:mb-[9.5rem] lg:m-0 lg:text-left lg:text-lg">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>

            <div className="w-fit mx-auto lg:m-0 lg:w-60 lg:h-60 lg:mr-12 relative ">
              <Explore />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
