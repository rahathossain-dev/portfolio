export default function Hero() {
  return (
    <div>
      <div id="canvas-container"></div>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">

        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 opacity-0 transform translate-y-10"
            id="hero-title">
            Alexander Mitchell
          </h1>
          <div className="typewriter-container h-12 flex justify-center items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
              Full Stack Developer
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 opacity-0 transform translate-y-10"
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