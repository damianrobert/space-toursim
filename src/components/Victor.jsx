import Image from "next/image";
import sm_victor from "../../public/assets/sm-victor.png";
import md_victor from "../../public/assets/md-victor.png";
import lg_victor from "../../public/assets/lg-victor.png";

export default function Douglas() {
  return (
    <>
      <div className="md:hidden max-w-fit mx-auto">
        <Image
          className="max-w-fit mx-auto"
          src={sm_victor}
          alt="Victor Glover"
        />
        <div className="w-[327px] h-[1px] mx-auto bg-gray-700 md:hidden" />
      </div>

      <div className="hidden md:block w-fit mx-auto lg:hidden">
        <Image src={md_victor} alt="Victor Glover" />
      </div>

      <div className="hidden lg:block ">
        <Image src={lg_victor} alt="Victor Glover" />
      </div>
    </>
  );
}
