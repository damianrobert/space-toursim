import Navbar from "@/app/Navbar/page";
import NavigateTechnology from "@/components/NavigateTechnology";

export default function Technology() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-mobileTechnology  bg-cover bg-no-repeat">
        <div className="w-fit mx-auto md:ml-40 text-base md:text-[20px] lg:text-[28px] pt-[7rem] lg:pt-40">
          <p className="opacity-25 text-white font-bold tracking-widest inline-block mr-2">
            03
          </p>
          <h1 className="text-white font-normal uppercase tracking-widest inline-block">
            space launch 101
          </h1>
        </div>

        <NavigateTechnology />
      </main>
    </>
  );
}
