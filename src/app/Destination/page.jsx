import Navbar from "@/app/Navbar/page";
import NavigateDestination from "@/components/NavigateDestination";

export default function Destination() {
  return (
    <>
      <Navbar />
      <main className="max-w-full min-h-screen bg-mobileDestination md:bg-tabletDestination lg:bg-desktopDestination bg-cover bg-no-repeat">
        <div className="w-fit mx-auto md:ml-40 text-base md:text-[20px] lg:text-[28px] pt-[7rem] lg:pt-40">
          <p className="opacity-25 text-white font-bold tracking-widest inline-block mr-2">
            01
          </p>
          <h1 className="text-white font-normal uppercase tracking-widest inline-block">
            pick your destination
          </h1>
        </div>

        <NavigateDestination />
      </main>
    </>
  );
}
