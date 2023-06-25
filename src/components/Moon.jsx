import Image from "next/image";
import sm_moon from "../../public/assets/sm-moon.png";
import md_moon from "../../public/assets/md-moon.png";
import lg_moon from "../../public/assets/lg-moon.png";

export default function Moon() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div>
        <div className="w-fit mx-auto pt-6 md:hidden">
          <Image src={sm_moon} alt="moon" />
        </div>

        <div className="w-fit mx-auto pt-6 hidden md:block lg:hidden">
          <Image src={md_moon} alt="moon" />
        </div>

        <div className="hidden lg:block w-fit ml-16 pt-24">
          <Image src={lg_moon} alt="moon" />
        </div>
      </div>

      <div className="lg:pt-40 lg:ml-12">
        <h2 className="text-center text-white text-[56px] md:text-[80px] lg:text-[100px] font-normal uppercase font-belleFair pt-14 lg:text-left">
          moon
        </h2>

        <p className="w-[327px] md:w-[573px] text-center text-indigo-200 text-[15px] md:text-base lg:text-lg font-normal leading-normal md:leading-7 lg:text-left">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <div className="w-[327px] md:w-[573px] h-[1px] bg-gray-700 mt-6" />

        <div className="pt-6 md:flex justify-around">
          <div>
            <h3 className="w-[216px] text-center text-indigo-200 text-[14px] font-normal uppercase tracking-widest mx-auto">
              avg. distance
            </h3>

            <p className="w-[216px] text-center text-white text-[28px] font-normal uppercase mx-auto font-belleFair">
              384,400 km
            </p>
          </div>

          <div>
            <h3 className="w-[216px] text-center pt-6 md:p-0 text-indigo-200 text-[14px] font-normal uppercase tracking-widest mx-auto">
              est. travel time
            </h3>

            <p className="w-[216px] text-center text-white text-[28px] font-normal uppercase mx-auto font-belleFair">
              3 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
