//there is another library called vanta, try that too 
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // no background
    mountRef.current?.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.05, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff4d4d });
    const particles: THREE.Mesh[] = [];

    for (let i = 0; i < 200; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      scene.add(particle);
      particles.push(particle);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach((p) => {
        p.position.y += Math.sin(Date.now() * 0.001 + p.position.x) * 0.002;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10 pointer-events-none" />;

};

export default ThreeBackground;
