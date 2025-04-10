import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className=" col-span-7 place-self-center">
          <h1 className=" text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Ezhar
          </h1>
          <p className=" text-[#ADB7BE] text-lg lg:text-xl">
            I am software Engineer
          </p>
        </div>
        <div className=" col-span-5">
          <div className=" bg-amber-200 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/ezhar_karim.png"
              alt="image here"
              className=" absolute transform -translate-x-1/2 -translate-y-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
