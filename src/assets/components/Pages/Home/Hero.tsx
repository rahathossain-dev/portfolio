import { useEffect } from "react"

import * as THREE from 'three';
export default function Hero() {

  useEffect(() => {

    const handleResize = () => {
      const canvasContainer = document.getElementById("canvas-container");
      if (canvasContainer) {
        const renderer = canvasContainer.querySelector("canvas")?.getContext("webgl");
        if (renderer) {
          renderer.canvas.width = window.innerWidth;
          renderer.canvas.height = window.innerHeight;
        }
      }
    };


    window.addEventListener("resize", handleResize);
    const initThreeJS = () => {
      const container = document.getElementById("canvas-container");
      if (!container) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 1500;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 50;
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0x6366f1,
        transparent: true,
        opacity: 0.8,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      let mouseX = 0;
      let mouseY = 0;

      const onDocumentMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - window.innerWidth / 2) / 100;
        mouseY = (event.clientY - window.innerHeight / 2) / 100;
      };

      document.addEventListener("mousemove", onDocumentMouseMove);

      const animate = () => {
        requestAnimationFrame(animate);

        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;

        particlesMesh.rotation.x += mouseY * 0.0005;
        particlesMesh.rotation.y += mouseX * 0.0005;

        renderer.render(scene, camera);
      };

      animate();
    };


    initThreeJS();

    return () => {

      window.removeEventListener("resize", handleResize);
    }
  })
  return (
    <div>
      <div id="canvas-container" className="dark:bg-gray-900"></div>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 opacity-0 transform translate-y-10 dark:text-white"
            id="hero-title">
            Rahat Hossain
          </h1>
          <div className="typewriter-container h-12 flex justify-center items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-white">
              Full Stack Developer
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 opacity-0 transform translate-y-10 dark:text-white"
            id="hero-text">
            Creating immersive digital experiences with modern web technologies
            and creative problem-solving
          </p>
          <a href="#projects"
            className="inline-block bg-[#6366f1] text-white px-8 py-3 rounded-button text-lg font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg opacity-0"
            id="hero-button">
            View My Work
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-10 h-10 flex items-center justify-center text-gray-600">
            <i className="ri-arrow-down-line ri-2x"></i>
          </div>
        </div>
      </section>
    </div>

  )
}