import Image from "next/image";
import sm_anousheh from "../../public/assets/sm-anousheh.png";
import md_anousheh from "../../public/assets/md-anousheh.png";
import lg_anousheh from "../../public/assets/lg-anousheh.png";

export default function Douglas() {
  return (
    <>
      <div className="md:hidden max-w-fit mx-auto">
        <Image
          className="max-w-fit mx-auto"
          src={sm_anousheh}
          alt="Anousheh Ansari"
        />
        <div className="w-[327px] h-[1px] mx-auto bg-gray-700 md:hidden" />
      </div>

      <div className="hidden md:block w-fit mx-auto lg:hidden">
        <Image src={md_anousheh} alt="Anousheh Ansari" />
      </div>

      <div className="hidden lg:block ">
        <Image src={lg_anousheh} alt="Anousheh Ansari" />
      </div>
    </>
  );
}
