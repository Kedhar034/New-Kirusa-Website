import React, { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Beams from "./ui/Beams"; // 👈 use the Beams component you shared earlier

const LandingPage2: React.FC = () => {
  useEffect(() => {
    // Entry animations for text
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

    // Floating tilt animations
    gsap.to(".hero-title .word-1", {
      rotationY: 10,
      rotationX: -5,
      y: "+=10",
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });

    gsap.to(".hero-title .word-3", {
      rotationY: -15,
      rotationX: 5,
      y: "-=10",
      repeat: -1,
      yoyo: true,
      duration: 3.5,
      ease: "sine.inOut",
    });

    // Subtle red glow pulse
    gsap.to(".hero-title .word-3", {
      textShadow: "0 0 20px #ff4d4d",
      repeat: -1,
      yoyo: true,
      duration: 1.8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      className="relative bg-black text-white min-h-screen overflow-hidden"
      data-scroll-section
    >
      {/* 🔴 Light Beams Background */}
      <div className="absolute inset-0 -z-10">
        <Beams
          beamWidth={3}
          beamHeight={35}
          beamNumber={10}
          lightColor="#ff4d4d"  // slight red accent
          speed={3}
          noiseIntensity={2.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* 🟢 Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-12">
        <motion.h1
          className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="word-1 inline-block">Engineering</span>{" "}
          <span className="word-2 inline-block text-gray-400">
            the Future with
          </span>{" "}
          <span className="word-3 inline-block text-[#ff4d4d]">AI</span>
        </motion.h1>

        <motion.p
          className="hero-subtext text-lg sm:text-xl mt-6 max-w-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          From telecom roots to AI-driven innovation, we’re shaping tomorrow’s
          digital world.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: 2,
            backgroundColor: "#ff4d4d",
            color: "#fff",
            boxShadow: "0 0 20px rgba(255,77,77,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 bg-[#ff4d4d]/90 text-white rounded-full shadow-lg hover:bg-[#e83e3e] transition-all duration-300 text-base sm:text-lg font-semibold"
        >
          Explore Our Vision
        </motion.button>
      </section>
    </div>
  );
};

export default LandingPage2;
