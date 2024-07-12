/** @format */

// components/Hero.js
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full container mx-auto z-0 h-auto md:h-screen mt-32 lg:mt-0 lg:grid lg:content-center" id="home">
      <div className="relative w-full">
        <div className="absolute animate-scale -z-10 -left-44 -top-28 h-72 w-72 filter blur-3xl bg-primaryLP rounded-full"></div>
        <div className="absolute animate-rotate delay-150 -z-10 -right-[150px] top-80 h-72 w-72 filter border-2 border-dashed border-primaryLP rounded-full lg:-right-60 lg:h-96 lg:w-96">
          <div className="absolute animate-scale -z-10 -right-0 -top-0 h-72 w-72 filter blur-3xl bg-primaryLP rounded-full lg:h-96 lg:w-96"></div>
        </div>
        <div data-aos="fade-up-right" data-aos-easing="linear" data-aos-duration="500" className="-z-10 absolute -left-7 -top-10 lg:-right-60 lg:top-0 lg:w-2/5 w-[30%]">
          <Image src="/img/Star-3d.svg" alt="Star 3d" width={300} height={300} />
        </div>
        <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="700" className="-z-10 absolute right-0 lg:-right-[380px] top-80 w-2/5">
          <Image src="/img/Book-3d.svg" alt="Book 3d" width={300} height={300} />
        </div>
        <p data-aos="fade-down" data-aos-duration="1000" className="z-20 text-primaryLP font-poppins font-normal text-[15px] lg:text-[24px] mx-4 text-center">
          MTsN 3 Jombang Present
        </p>
        <p data-aos="fade-up" data-aos-duration="1200" className="z-20 text-semiWhite font-poppins font-extrabold text-[32px] lg:text-[64px] mx-4 text-center uppercase">
          Middle School <br className="hidden md:inline" />
          Counseling Website
        </p>
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="mt-5 mx-auto max-w-3xl backdrop-blur-md bg-gradient-to-r from-purple-500/30 to-pink-500/20 p-3 rounded-md md:bg-none md:border-none">
          <p className="text-center text-white font-poppins font-thin text-[13px]">
            Website bimbingan konseling Madrasah Tsanawiyah 3 Jombang adalah sebuah platform daring yang secara khusus dirancang untuk memberikan panduan dan dukungan konseling kepada siswa-siswa di
            tingkat Madrasah Tsanawiyah 3 di Jombang.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
