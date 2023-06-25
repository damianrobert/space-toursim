import Image from "next/image";
import sm_rocket from "../../public/assets/sm-rocket.jpg";
import md_rocket from "../../public/assets/md-rocket.png";
import lg_rocket from "../../public/assets/lg-rocket.png";

export default function Rocket() {
  return (
    <>
      <div className="md:hidden max-w-fit mx-auto">
        <Image className="max-w-fit mx-auto" src={sm_rocket} alt="Rocket" />
      </div>

      <div className="hidden md:block w-fit mx-auto lg:hidden">
        <Image src={md_rocket} alt="Rocket" />
      </div>

      <div className="hidden lg:block ">
        <Image src={lg_rocket} alt="Rocket" />
      </div>
    </>
  );
}
