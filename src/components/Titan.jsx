import Image from "next/image";
import sm_titan from "../../public/assets/sm-titan.png";
import md_titan from "../../public/assets/md-titan.png";
import lg_titan from "../../public/assets/lg-titan.png";

export default function Titan() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div>
        <div className="w-fit mx-auto pt-6 md:hidden">
          <Image src={sm_titan} alt="titan" />
        </div>

        <div className="w-fit mx-auto pt-6 hidden md:block lg:hidden">
          <Image src={md_titan} alt="titan" />
        </div>

        <div className="hidden lg:block w-fit ml-16 pt-24">
          <Image src={lg_titan} alt="titan" />
        </div>
      </div>

      <div className="lg:pt-40 lg:ml-12">
        <h2 className="text-center text-white text-[56px] md:text-[80px] lg:text-[100px] font-normal uppercase font-belleFair pt-14 lg:text-left">
          europa
        </h2>

        <p className="w-[327px] md:w-[573px] text-center text-indigo-200 text-[15px] md:text-base lg:text-lg font-normal leading-normal md:leading-7 lg:text-left">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>

        <div className="w-[327px] md:w-[573px] h-[1px] bg-gray-700 mt-6" />

        <div className="pt-6 md:flex justify-around">
          <div>
            <h3 className="w-[216px] text-center text-indigo-200 text-[14px] font-normal uppercase tracking-widest mx-auto">
              avg. distance
            </h3>

            <p className="w-[216px] text-center text-white text-[28px] font-normal uppercase mx-auto font-belleFair">
              1.6 BIL. km
            </p>
          </div>

          <div>
            <h3 className="w-[216px] text-center pt-6 md:p-0 text-indigo-200 text-[14px] font-normal uppercase tracking-widest mx-auto">
              est. travel time
            </h3>

            <p className="w-[216px] text-center text-white text-[28px] font-normal uppercase mx-auto font-belleFair">
              7 years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
