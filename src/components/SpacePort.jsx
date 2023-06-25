import Image from "next/image";
import sm_spaceport from "../../public/assets/sm-spaceport.png";
import md_spaceport from "../../public/assets/md-spaceport.png";
import lg_spaceport from "../../public/assets/lg-spaceport.png";

export default function Rocket() {
  return (
    <>
      <div className="md:hidden max-w-fit mx-auto">
        <Image
          className="max-w-fit mx-auto"
          src={sm_spaceport}
          alt="spaceport
        "
        />
      </div>

      <div className="hidden md:block w-fit mx-auto lg:hidden">
        <Image
          src={md_spaceport}
          alt="spaceport
        "
        />
      </div>

      <div className="hidden lg:block ">
        <Image
          src={lg_spaceport}
          alt="spaceport
        "
        />
      </div>
    </>
  );
}
