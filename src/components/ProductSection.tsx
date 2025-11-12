import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const products = [
  {
    name: "InstaVoice Ring",
    description:
      "InstaVoice Ring is Kirusa’s unique call-completion service that sends a missed call to the called party when the person trying to call or text, has zero prepaid balance.",
    logo: "/logo.png",
    image: "/instaVoicering.png",
  },
  {
    name: "Kirusa Channels",
    description:
      "Voice-driven entertainment that brings African fans closer to their favorite stars, sports, and stories",
    logo: "/logo.png",
    image: "/kirusachannels.png",
  },
  {
    name: "Melody Crafters",
    description:
      "Craft Personalized Musical Gifts in Minutes with AI — turn your emotions into custom AI songs and videos.",
    logo: "/MelodyCraftersLogo.png",
    image: "/melody.png",
  },
  {
    name: "Video4U",
    description:
      "The platform helps public figures connect personally with fans through custom messages while earning extra income.",
    logo: "/logo.png",
    image: "/video4u.png",
  },
  {
    name: "Corpusio",
    description:
      "AI-driven text intelligence — analyze, summarize, and optimize content effortlessly.",
    logo: "/CorpusioLogo.png",
    image: "/corp.png",
  },
  {
    name: "Convobuddy",
    description:
      "Conversational AI that connects — intelligent assistants built with deep learning.",
    logo: "/ConvoBuddyLogo.png",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",
  },
  // {
  //   name: "VoIP Voice Platform",
  //   description:
  //     "API-powered voice infrastructure enabling automated outbound calls for promotions, surveys,and engagement.",
  //   logo: "/logo.png",
  //   image: "/kirusachannels.png",
  // },
  {
    name: "HappyFit",
    description:
      "Your AI-powered fitness companion. Track, analyze, and improve your health seamlessly.",
    logo: "/HappyFitLogo.png",
    image: "/happyfi.png",
  },
];

const ProductSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  // Animate cards on scroll reveal
  useEffect(() => {
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children);
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.25,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section className="relative bg-linear-to-b from-white via-[#f8f9fa] to-[#eef1f6] py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-4 tracking-tight">
          Our <span className="text-[#e63946]">Products</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our AI-powered experiences that inspire creativity, health, and innovation.
        </p>
      </div>

      {/* Product Cards Grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 md:px-10"
      >
        {products.map((product) => (
          <div
            key={product.name}
            className="
              relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer
              transition-all duration-500 ease-out
              hover:scale-[1.04]
              hover:shadow-[0_0_40px_rgba(230,57,70,0.4)]
            "
          >
            {/* Background Image */}
            <img
              src={product.image}
              alt={product.name}
              className="
                w-full h-[400px] object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Product Logo */}
            <div className="absolute top-6 left-6">
              <img
                src={product.logo}
                alt={`${product.name} Logo`}
                className="w-16 h-16 object-contain drop-shadow-lg"
              />
            </div>

            {/* Text Overlay — shifted upward for better visibility */}
            <div className="absolute bottom-8 left-8 text-white max-w-sm">
              <h3 className="text-3xl font-semibold mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {product.name}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

