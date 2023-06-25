import Image from "next/image";
import sm_douglas from "../../public/assets/sm-douglas.png";
import md_douglas from "../../public/assets/md-douglas.png";
import lg_douglas from "../../public/assets/lg-douglas.png";

export default function Douglas() {
  return (
    <>
      <div className="md:hidden max-w-fit mx-auto">
        <Image
          className="max-w-fit mx-auto"
          src={sm_douglas}
          alt="Douglas Hurley"
        />
        <div className="w-[327px] h-[1px] mx-auto bg-gray-700 md:hidden" />
      </div>

      <div className="hidden md:block w-fit mx-auto lg:hidden">
        <Image src={md_douglas} alt="Douglas Hurley" />
      </div>

      <div className="hidden lg:block ">
        <Image src={lg_douglas} alt="Douglas Hurley" />
      </div>
    </>
  );
}
