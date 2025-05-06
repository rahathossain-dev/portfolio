import { useEffect, useState } from "react";

export default function Header() {


  const [hamburger, setHamburger] = useState(false);
  useEffect(() => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const hamburgerHtml = document.querySelector(".hamburger");
    if (hamburger) {
      mobileMenu?.classList.toggle("open");
      hamburgerHtml?.classList.toggle("open");
    }

  }, [hamburger])
  return (
    <div>
      <header className="fixed top-0 left-0 w-full glass-nav bg-white dark:bg-transparent z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-['Pacifico'] text-gray-900 dark:text-white">Rahat Hossain.</a>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors dark:text-white">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors dark:text-white">About</a>
            <a href="#projects" className="text-gray-700 hover:text-primary transition-colors dark:text-white">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-primary transition-colors dark:text-white">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors dark:text-white">Contact</a>
          </nav>

          <div className="md:hidden hamburger" onClick={() => setHamburger(!hamburger)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div className="mobile-menu">
        <a href="#home" className="text-2xl font-medium text-gray-900 mb-8">Home</a>
        <a href="#about" className="text-2xl font-medium text-gray-900 mb-8">About</a>
        <a href="#projects" className="text-2xl font-medium text-gray-900 mb-8">Projects</a>
        <a href="#skills" className="text-2xl font-medium text-gray-900 mb-8">Skills</a>
        <a href="#contact" className="text-2xl font-medium text-gray-900 mb-8">Contact</a>
      </div>
    </div>

  )
}