import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as THREE from 'three';


document.addEventListener('DOMContentLoaded', () => {




  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = anchor.getAttribute("href")?.substring(1) || null;
      const targetElement = targetId ? document.getElementById(targetId) : null;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  const cursor = document.querySelector(".custom-cursor") as HTMLElement;

  if (cursor) {
    document.addEventListener("mousemove", function (e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    document.addEventListener("mousedown", function () {
      cursor.classList.add("active");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("active");
    });
  }

  const scrollIndicator = document.querySelector(".scroll-indicator") as HTMLElement;

  if (scrollIndicator) {
    window.addEventListener("scroll", function () {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      scrollIndicator.style.width = scrolled + "%";
    });
  }


  // Animate hero section elements
  gsap.to("#hero-title", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
  });

  gsap.to("#hero-text", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8,
  });

  gsap.to("#hero-button", {
    opacity: 1,
    duration: 1,
    delay: 1.1,
  });





  // Animate progress bars on scroll
  const progressBars = document.querySelectorAll(".progress-bar");

  gsap.registerPlugin(ScrollTrigger);

  progressBars.forEach((bar) => {
    ScrollTrigger.create({
      trigger: bar,
      start: "top 80%",
      onEnter: () => bar.classList.add("animate"),
    });
  });


  function initThreeJS() {
    const container = document.getElementById("canvas-container");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    if (container) {
      container.appendChild(renderer.domElement);
    }

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x6366f1,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    interface MouseMoveEvent extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    function onDocumentMouseMove(event: MouseMoveEvent): void {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    }

    document.addEventListener("mousemove", onDocumentMouseMove);

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;

      particlesMesh.rotation.x += mouseY * 0.0005;
      particlesMesh.rotation.y += mouseX * 0.0005;

      renderer.render(scene, camera);
    }

    animate();
  }

  // Animate circle progress on scroll
  const circleProgress = document.querySelectorAll(".circle-progress");

  circleProgress.forEach((circle) => {
    ScrollTrigger.create({
      trigger: circle,
      start: "top 80%",
      onEnter: () => circle.classList.add("animate"),
    });
  });

  // Initialize Three.js scene
  initThreeJS();




  const avatarContainer = document.getElementById("avatar-container");

  if (avatarContainer) {
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

    // Create a simple 3D object as placeholder for the avatar
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      emissive: 0x072534,
      side: THREE.DoubleSide,
      flatShading: true,
    });

    const avatar = new THREE.Mesh(geometry, material);
    scene.add(avatar);

    // Add lights
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(1, 1, 1);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(-1, -1, -1);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Rotation on scroll
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      avatar.rotation.y = scrollPosition * 0.002;
      avatar.rotation.x = scrollPosition * 0.001;
    });

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      avatar.rotation.y += 0.005;

      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect =
        avatarContainer.clientWidth / avatarContainer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        avatarContainer.clientWidth,
        avatarContainer.clientHeight,
      );
    });
  }
});