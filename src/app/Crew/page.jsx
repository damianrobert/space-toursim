import Navbar from "@/app/Navbar/page";
import NavigateCrew from "@/components/NavigateCrew";

export default function Crew() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-mobileCrew md:bg-tabletCrew lg:bg-desktopCrew bg-cover bg-no-repeat">
        <div className="w-fit mx-auto md:ml-40 text-base md:text-[20px] lg:text-[28px] pt-[7rem] lg:pt-40">
          <p className="opacity-25 text-white font-bold tracking-widest inline-block mr-2">
            02
          </p>
          <h1 className="text-white font-normal uppercase tracking-widest inline-block">
            meet your crew
          </h1>
        </div>

        <NavigateCrew />
      </main>
    </>
  );
}
