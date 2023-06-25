import Image from "next/image";
import sm_mark from "../../public/assets/sm-mark.png";
import md_mark from "../../public/assets/md-mark.png";
import lg_mark from "../../public/assets/lg-mark.png";

export default function Douglas() {
  return (
    <>
      <div className="md:hidden max-w-fit mx-auto">
        <Image
          className="max-w-fit mx-auto"
          src={sm_mark}
          alt="Mark Shuttleworth"
        />
        <div className="w-[327px] h-[1px] mx-auto bg-gray-700 md:hidden" />
      </div>

      <div className="hidden md:block w-fit mx-auto lg:hidden">
        <Image src={md_mark} alt="Mark Shuttleworth" />
      </div>

      <div className="hidden lg:block ">
        <Image src={lg_mark} alt="Mark Shuttleworth" />
      </div>
    </>
  );
}
