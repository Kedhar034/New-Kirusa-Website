import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import AiConsultingLogo from "../res/AiConsulting.png";
import ProductEngineeringLogo from "../res/ProductEngineeringLogo.png";
import HealthAndFitnessLogo from "../res/HealthAndFitnessLogo.png";
import CostIntelligenceLogo from "../res/CostIntelligenceLogo.png";
import IOTLogo from "../res/IOTLogo.png";
import AiIdeaLabLogo from "../res/AiIdeaLab.png";

const services = [
  {
    title: "AI Consulting",
    description:
      "We help organizations unlock the full potential of artificial intelligence through customized model design, optimization, and deployment. From LLM fine-tuning to automation workflows, our consulting ensures AI becomes a true growth driver — transforming data into business outcomes.",
    image: AiConsultingLogo,
  },
  {
    title: "Product Engineering",
    description:
      "We build intelligent, scalable software products that combine advanced AI models with elegant design — creating systems that are both smart and seamless from backend to user interface.",
    image: ProductEngineeringLogo,
  },
  {
    title: "Health & Fitness AI",
    description:
      "Through Happy Fit AI, we personalize workouts and meal plans using on-device intelligence — providing real-time posture feedback and adaptive routines without compromising privacy.",
    image: HealthAndFitnessLogo,
  },
  {
    title: "Cost Intelligence",
    description:
      "Our AI-driven systems continuously optimize cloud and SaaS costs — analyzing workloads, usage patterns, and storage demands to reduce expenses while improving efficiency.",
    image: CostIntelligenceLogo,
  },
  {
    title: "IoT & Edge Automation",
    description:
      "We design self-learning IoT ecosystems for predictive maintenance, energy efficiency, and adaptive control — empowering smarter operations in logistics and manufacturing.",
    image: IOTLogo,
  },
  {
    title: "AI Idea Lab",
    description:
      "Our Idea Lab helps startups prototype AI solutions rapidly — from concept to deployment — leveraging frameworks like LangChain and Hugging Face to fast-track innovation.",
    image: AiIdeaLabLogo,
  },
];

const OurServices: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (servicesRef.current) {
      const items = Array.from(servicesRef.current.children);
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  // Floating animation for subtle motion
  useEffect(() => {
    gsap.to(".service-card", {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
      stagger: { amount: 1.5, from: "center" },
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ff4d4d] mb-4 tracking-wide">
          Our Services
        </h2>
        <p className="text-lg text-gray-300">
          Discover how we’re shaping innovation and intelligence with AI.
        </p>
      </div>

      {/* Grid of services */}
      <div
        ref={servicesRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-8"
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="service-card group bg-[#121212] rounded-2xl p-8 shadow-lg border border-[#222] hover:border-[#ff4d4d]/60 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,77,77,0.4)] relative overflow-hidden"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mb-4 text-center group-hover:text-[#ff4d4d] transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 text-center leading-relaxed">
              {service.description}
            </p>

            {/* Subtle glowing overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-[#ff4d4d] via-transparent to-transparent transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
