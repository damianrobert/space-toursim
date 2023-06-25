import Image from "next/image";
import sm_spaceCapsule from "../../public/assets/sm-spaceCapsule.png";
import md_spaceCapsule from "../../public/assets/md-spaceCapsule.png";
import lg_spaceCapsule from "../../public/assets/lg-spaceCapsule.png";

export default function Rocket() {
  return (
    <>
      <div className="md:hidden max-w-fit mx-auto">
        <Image
          className="max-w-fit mx-auto"
          src={sm_spaceCapsule}
          alt="Rocket"
        />
      </div>

      <div className="hidden md:block w-fit mx-auto lg:hidden">
        <Image src={md_spaceCapsule} alt="Rocket" />
      </div>

      <div className="hidden lg:block ">
        <Image src={lg_spaceCapsule} alt="Rocket" />
      </div>
    </>
  );
}
