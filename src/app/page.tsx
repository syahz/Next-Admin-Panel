/** @format */
"use client";
import Head from "next/head";
import Navbar from "@/components/landingPage/navbar";
import Hero from "@/components/landingPage/hero";
import Teacher from "@/components/landingPage/teacher";
import Footer from "@/components/landingPage/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      delay: 50,
    });
  });

  return (
    <div className="bg-semiBlack overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <Teacher />
      <Footer />
    </div>
  );
}
