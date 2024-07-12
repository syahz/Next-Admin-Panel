/** @format */
"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir yang dikirim
    console.log(formData);
    // Misalnya, Anda bisa mengirimkan data ke backend di sini
  };

  return (
    <section className="my-10 h-auto" id="contact">
      <div className="container w-full">
        <div data-aos="zoom-in" data-aos-duration="1900">
          <p className="z-20 uppercase text-center font-bold text-semiWhite text-2xl font-poppins">Contact</p>
          <p className="z-20 text-center font-light text-semiWhite text-[12px] font-poppins">Anda Dapat Menghubungi Kami dengan kontak dibawah ini</p>
        </div>
        <form onSubmit={handleSubmit} data-aos="flip-up" data-aos-duration="1400" className="mt-4 flex flex-col">
          <div className="flex flex-col md:flex-row gap-2">
            <Input
              type="text"
              className="hover:border-indigo-300 bg-transparent text-white mt-3 block w-full rounded-md border-slate-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Nama"
            />

            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="hover:border-indigo-300 bg-transparent text-white mt-3 block w-full rounded-md border-slate-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Email"
            />
          </div>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="hover:border-indigo-300 bg-transparent text-white mt-3 block w-full rounded-md border-slate-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Subject"
          />
          <Textarea
            id="about"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="text-white hover:border-indigo-300 bg-transparent mt-3 block w-full rounded-md border-slate-600 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-1.5 shadow-sm sm:text-sm sm:leading-6"
            placeholder="Pesan"
          />
          <button type="submit" className="mt-4 py-2 px-3 bg-primaryLP text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none">
            Kirim pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Footer;
