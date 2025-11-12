
import React, { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import ThreeBackground from "./ThreeBackground";

const LandingPage: React.FC = () => {
  useEffect(() => {
    // Entry animations
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        clearProps: "all",
      }
    );

    gsap.fromTo(
      ".hero-subtext",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "all",
      }
    );

    // Floating + 3D tilt animation for parts of text
    gsap.to(".hero-title .word-1", {
      rotationY: 10,
      rotationX: -5,
      y: "+=10",
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });

    // used it here for keeping text bound 
    gsap.to(".hero-title .word-3", {
      rotationY: -15,
      rotationX: 5,
      y: "-=10",
      repeat: -1,
      yoyo: true,
      duration: 3.5,
      ease: "sine.inOut",
    });

    // Glowing AI pulse effect
    gsap.to(".hero-title .word-3", {
      textShadow: "0 0 30px #ff4d4d",
      repeat: -1,
      yoyo: true,
      duration: 1.8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      className="relative bg-[#0f0f0f] text-white min-h-screen overflow-visible"
      data-scroll-section
    >
      {/* 3D Animated Background */}
      <ThreeBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="hero-title text-5xl md:text-8xl lg:text-9xl font-extrabold leading-tight space-x-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="word-1 inline-block ">Engineering</span>{" "}
          <span className="word-2 inline-block text-gray-300">The Future with</span>{" "}
          <span className="word-3 inline-block text-[#ff4d4d]">AI</span>
        </motion.h1>

        <motion.p
          className="hero-subtext text-xl font-semibold mt-6 max-w-2xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Kirusa is shaping adaptive AI platforms that boost productivity,
           power healthier living, and create deeper digital connections.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 bg-[#ff4d4d] text-white rounded-full shadow-lg hover:bg-[#e83e3e] transition-all duration-300"
        >
          Explore Our Products
        </motion.button>
      </section>
    </div>
  );
};

export default LandingPage;

