/** @format */

import { useEffect } from "react";

const useNavbarEffect = () => {
  useEffect(() => {
    const navbar = document.getElementById("nav-menu");
    const btnToggle = document.querySelector(".buttonTogle");
    const mobileMenu = document.querySelector(".mobileMenu");

    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.remove("bg-opacity-80", "bg-gray-800");
          navbar.classList.add("bg-gradient-to-br", "from-primary/70", "to-purple-500/20", "backdrop-blur-sm");
        } else {
          navbar.classList.remove("bg-gradient-to-br", "from-primary/70", "to-purple-500/20", "backdrop-blur-sm");
          navbar.classList.add("bg-transparent");
        }
      }
    };

    const handleToggleClick = () => {
      if (mobileMenu) {
        mobileMenu.classList.toggle("hidden");
      }
    };

    const handleNavLinkClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav_link");
      navLinks.forEach(link => link.classList.remove("active"));
      target.classList.add("active");

      const targetId = target.getAttribute("href");
      const offsetValue = 90;
      const targetElement = targetId ? document.querySelector(targetId) : null;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - offsetValue,
          behavior: "smooth",
        });
      }
    };

    if (btnToggle) {
      btnToggle.addEventListener("click", handleToggleClick);
    }

    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav_link");
    navLinks.forEach(link => {
      link.addEventListener("click", handleNavLinkClick);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (btnToggle) {
        btnToggle.removeEventListener("click", handleToggleClick);
      }
      navLinks.forEach(link => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
};

export default useNavbarEffect;
