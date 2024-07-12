/** @format */

import Image from "next/image";

const teachers = [
  {
    name: "Dwi Ajuni Lelononingsih, Ch. M, S.Pd",
    image: "/img/ava/female-chill.png",
    alt: "Dwi Ajuni Lelononingsih, Ch. M, S.Pd",
    animation: "fade-down-right",
    duration: 1700,
  },
  {
    name: "Hj. Zumrotus Sholichah, S.Pd",
    image: "/img/ava/Female-love.png",
    alt: "Hj. Zumrotus Sholichah, S.Pd",
    animation: "fade-down",
    duration: 1700,
  },
  {
    name: "Yulia Firdaus, S.Pd",
    image: "/img/ava/Female-young-pose.png",
    alt: "Yulia Firdaus, S.Pd",
    animation: "fade-down-left",
    duration: 1700,
  },
  {
    name: "Heri Asmawati, S.Ag",
    image: "/img/ava/Female-young.png",
    alt: "Heri Asmawati, S.Ag",
    animation: "fade-right",
    duration: 1800,
  },
  {
    name: "Siti Munawaroh, S. Psi",
    image: "/img/ava/Female-very_smile.png",
    alt: "Siti Munawaroh, S. Psi",
    animation: "fade-up",
    duration: 1800,
  },
  {
    name: "Rika Amalia, S.Pd",
    image: "/img/ava/Female-heart.png",
    alt: "Rika Amalia, S.Pd",
    animation: "fade-left",
    duration: 1800,
  },
  {
    name: "Mohammad Achsanul Chuluq, S.Pd",
    image: "/img/ava/Male-young.png",
    alt: "Mohammad Achsanul Chuluq, S.Pd",
    animation: "fade-up-right",
    duration: 1900,
  },
  {
    name: "Cholilatul Chumaizah, S.Pd",
    image: "/img/ava/female-very-young.png",
    alt: "Cholilatul Chumaizah, S.Pd",
    animation: "fade-up",
    duration: 1900,
  },
  {
    name: "M. Shafiyyudin Al Aziz, S.Pd",
    image: "/img/ava/Male-old.png",
    alt: "M. Shafiyyudin Al Aziz, S.Pd",
    animation: "fade-up-left",
    duration: 1900,
  },
];

const Teacher = () => {
  return (
    <section className="z-0 mt-10 md:mt-0 h-auto" id="teacher">
      <div className="container w-full">
        <p data-aos="fade-up" data-aos-duration="1300" className="z-20 uppercase text-center font-bold text-semiWhite text-2xl font-poppins">
          Our Teacher
        </p>
        <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {teachers.map((teacher, index) => (
            <a key={index} data-aos={teacher.animation} data-aos-duration={teacher.duration} href="#" className="cursor-pointer">
              <div className="min-h-32 backdrop-blur-md bg-gradient-to-r from-purple-500/30 to-pink-500/20 border hover:border-white/40 border-white/20 rounded-md shadow-lg flex flex-col">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="m-2 rounded-md w-36 md:w-28 relative overflow-hidden">
                    <Image
                      src={teacher.image}
                      alt={teacher.alt}
                      className="rounded-full object-cover w-full h-full"
                      width={144} // width of the image
                      height={144} // height of the image
                    />
                  </div>
                  <div className="p-2 text-center md:text-left">
                    <p className="text-semiWhite text-[14px]">{teacher.name}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teacher;
