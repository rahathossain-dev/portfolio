import { useEffect } from "react"
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import Header from "./assets/components/shared/Header";
import Footer from "./assets/components/shared/Footer";
import Hero from "./assets/components/Pages/Home/Hero";
import About from "./assets/components/Pages/Home/About";
import Project from "./assets/components/Pages/Home/Project";
import Skills from "./assets/components/Pages/Home/Skills";
import Contact from "./assets/components/Pages/Home/Contact";
export default function App() {

  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute("href")?.substring(1);
      const targetElement = targetId ? document.getElementById(targetId) : null;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseDown = () => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      cursor?.classList.add("active");
    };

    const handleMouseUp = () => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      cursor?.classList.remove("active");
    };

    const handleScroll = () => {
      const scrollIndicator = document.querySelector(".scroll-indicator") as HTMLElement;
      if (scrollIndicator) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollIndicator.style.width = `${scrolled}%`;
      }
    };

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


    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#hero-title", { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.to("#hero-text", { opacity: 1, y: 0, duration: 1, delay: 0.8 });
    gsap.to("#hero-button", { opacity: 1, duration: 1, delay: 1.1 });

    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      ScrollTrigger.create({
        trigger: bar,
        start: "top 80%",
        onEnter: () => bar.classList.add("animate"),
      });
    });

    const circleProgress = document.querySelectorAll(".circle-progress");
    circleProgress.forEach((circle) => {
      ScrollTrigger.create({
        trigger: circle,
        start: "top 80%",
        onEnter: () => circle.classList.add("animate"),
      });
    });

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

    const initAvatar = () => {
      const avatarContainer = document.getElementById("avatar-container");
      if (!avatarContainer) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        avatarContainer.clientWidth / avatarContainer.clientHeight,
        0.1,
        1000,
      );
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(avatarContainer.clientWidth, avatarContainer.clientHeight);
      avatarContainer.appendChild(renderer.domElement);

      const geometry = new THREE.SphereGeometry(1.5, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: 0x6366f1,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        flatShading: true,
      });

      const avatar = new THREE.Mesh(geometry, material);
      scene.add(avatar);

      const light1 = new THREE.DirectionalLight(0xffffff, 1);
      light1.position.set(1, 1, 1);
      scene.add(light1);

      const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
      light2.position.set(-1, -1, -1);
      scene.add(light2);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        avatar.rotation.y = scrollPosition * 0.002;
        avatar.rotation.x = scrollPosition * 0.001;
      };

      window.addEventListener("scroll", handleScroll);

      const animate = () => {
        requestAnimationFrame(animate);

        avatar.rotation.y += 0.005;

        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        camera.aspect = avatarContainer.clientWidth / avatarContainer.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(avatarContainer.clientWidth, avatarContainer.clientHeight);
      };

      window.addEventListener("resize", handleResize);
    };

    initThreeJS();
    initAvatar();

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);





  return (
    <div>
      <div className="custom-cursor"></div>
      <div className="scroll-indicator"></div>

      <Header />



      <main>

        <Hero />

        <About />

        <Project />

        <Skills />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}