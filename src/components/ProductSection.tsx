import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const aiProducts = [
  {
    name: "Melody Crafters",
    description:
      "Craft Personalized Musical Gifts in Minutes with AI — turn your emotions into custom AI songs and videos.",
    logo: "/MelodyCraftersLogo.png",
    image: "/melody.png",
  },
  {
    name: "Corpusio",
    description:
      "AI-driven text intelligence — analyze, summarize, and optimize content effortlessly.",
    logo: "/CorpusioLogo.png",
    image: "/corp.png",
  },
  {
    name: "HappyFit",
    description:
      "Your AI-powered fitness companion. Track, analyze, and improve your health seamlessly.",
    logo: "/HappyFitLogo.png",
    image: "/happyfi.png",
  },
  {
    name: "Convobuddy",
    description:
      "Conversational AI that connects — intelligent assistants built with deep learning.",
    logo: "/ConvoBuddyLogo.png",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",
  },
  
];



const legacyProducts = [
  {
    name: "InstaVoice",
    description:
      "InstaVoice is an innovative, cloud-based call completion solution that empowers users to stay connected by providing seamless access to voicemails, missed call alerts, and reachability notifications.",
    logo: "/InstaVoiceLogo.svg",
    image: "/InstaVoice (1).png",
  },
  {
    name: "Kirusa Channels",
    description:
      "Kirusa Channels is a premier celebrity–fan engagement platform designed to foster meaningful and interactive connections between celebrities and their fans through the power of voice and video.",
    logo: "/KirusaChannels.svg",
    image: "/kirusachannels.png",
  },
  {
    name: "InstaVoice Ring",
    description:
      "InstaVoice Ring is Kirusa’s innovative call completion service that enables users with zero prepaid balance to stay connected by automatically triggering a missed call notification to the intended recipient.",
    logo: "/InstaVoiceRingLogo.svg",
    image: "/InstaVoiceRing (1).png",
  },
  {
    name: "Video4u",
    description:
      "We help public figures connect personally with fans through custom messages while earning extra income.",
    logo: "/Video4uLogo.png",
    image: "/Video4u (1).png",
  },
];

const ProductSection: React.FC = () => {
  const aiRef = useRef<HTMLDivElement | null>(null);
  const legacyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const refs = [aiRef.current, legacyRef.current];
    refs.forEach((ref) => {
      if (ref) {
        const cards = Array.from(ref.children);
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
    });
  }, []);

  // ✅ FIXED TYPE
  const scrollHorizontally = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    const container = ref.current;
    if (!container) return;
    const amount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  const renderProductCards = (products: typeof aiProducts) =>
    products.map((product) => (
      <div
        key={product.name}
        className="min-w-[300px] sm:min-w-[340px] md:min-w-[400px]
          relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer
          transition-all duration-500 ease-out
          hover:scale-[1.04]
          hover:shadow-[0_0_40px_rgba(230,57,70,0.4)]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute top-6 left-6">
          <img
            src={product.logo}
            alt={`${product.name} Logo`}
            className="w-14 h-14 object-contain drop-shadow-lg"
          />
        </div>
        <div className="absolute bottom-8 left-8 text-white max-w-sm">
          <h3 className="text-2xl font-semibold mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {product.name}
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    ));

  // ✅ FIXED TYPE
  const renderScrollableRow = (
    products: typeof aiProducts,
    ref: React.RefObject<HTMLDivElement | null>
  ) => (
    <div className="relative px-6 md:px-10 mb-20">
      {/* <h3 className="text-2xl font-semibold text-[#222] mb-6">{title}</h3> */}

      {/* Scroll Arrows */}
      <button
        onClick={() => scrollHorizontally(ref, "left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg
                   rounded-full p-2 hover:bg-[#e63946] hover:text-white transition z-10 animate-pulse"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scrollHorizontally(ref, "right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg
                   rounded-full p-2 hover:bg-[#e63946] hover:text-white transition z-10 animate-pulse"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={ref}
        className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory"
      >
        {renderProductCards(products)}
      </div>
    </div>
  );

  return (
    <section className="relative bg-gradient-to-b from-white via-[#f8f9fa] to-[#eef1f6] py-20">
      {/* Main Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-4 tracking-tight">
          Our <span className="text-[#e63946]">Products</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our experiences — from timeless legacy platforms to cutting-edge AI innovations.
        </p>
      </div>

      

      {/* --- AI Products --- */}
      {renderScrollableRow( aiProducts, aiRef)}

      {/* --- Legacy Products (Now on Top) --- */}
      {renderScrollableRow( legacyProducts, legacyRef)}
    </section>
  );
};

export default ProductSection;

