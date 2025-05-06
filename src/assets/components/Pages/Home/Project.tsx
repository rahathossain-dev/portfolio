export default function Project() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card glass-card rounded-lg overflow-hidden">
            <div className="h-56 bg-gray-200 relative overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20interactive%203D%20e-commerce%20website%20with%20product%20visualization%2C%20clean%20minimalist%20design%2C%20high-end%20fashion%20products%20displayed%20in%203D%2C%20professional%20web%20application%20interface%2C%20dark%20mode%20UI%2C%20realistic%20product%20rendering&width=600&height=400&seq=1&orientation=landscape"
                alt="E-commerce Platform" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3D E-commerce Platform
              </h3>
              <p className="text-gray-600 mb-4">
                Interactive product visualization platform with WebGL-powered
                3D models and real-time customization
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Three.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">WebGL</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-opacity-80 transition-colors flex items-center">
                  <i className="ri-eye-line mr-2"></i> Live Demo
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors flex items-center">
                  <i className="ri-github-line mr-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card glass-card rounded-lg overflow-hidden">
            <div className="h-56 bg-gray-200 relative overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=data%20visualization%20dashboard%20with%203D%20charts%20and%20graphs%2C%20professional%20business%20analytics%20interface%2C%20modern%20UI%20design%2C%20blue%20and%20white%20color%20scheme%2C%20clean%20layout%20with%20multiple%20interactive%20data%20displays%2C%20corporate%20data%20platform&width=600&height=400&seq=2&orientation=landscape"
                alt="Data Visualization Dashboard" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3D Data Visualization
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced data visualization dashboard with interactive 3D
                charts and real-time data processing
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">D3.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Express</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">WebGL</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-opacity-80 transition-colors flex items-center">
                  <i className="ri-eye-line mr-2"></i> Live Demo
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors flex items-center">
                  <i className="ri-github-line mr-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card glass-card rounded-lg overflow-hidden">
            <div className="h-56 bg-gray-200 relative overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=interactive%203D%20virtual%20reality%20art%20gallery%2C%20modern%20digital%20art%20exhibition%20space%2C%20minimalist%20gallery%20design%20with%20artwork%20displays%2C%20professional%20web-based%20VR%20experience%2C%20clean%20white%20gallery%20space%20with%20digital%20art%20installations%2C%20immersive%20web%20application&width=600&height=400&seq=3&orientation=landscape"
                alt="Virtual Art Gallery" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Virtual Art Gallery
              </h3>
              <p className="text-gray-600 mb-4">
                Immersive WebVR art gallery experience with interactive
                exhibits and spatial audio
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Three.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">WebVR</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">GLSL</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-opacity-80 transition-colors flex items-center">
                  <i className="ri-eye-line mr-2"></i> Live Demo
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors flex items-center">
                  <i className="ri-github-line mr-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card glass-card rounded-lg overflow-hidden">
            <div className="h-56 bg-gray-200 relative overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=AI-powered%20chatbot%20interface%20with%20natural%20language%20processing%2C%20modern%20chat%20application%20design%2C%20professional%20conversational%20UI%2C%20clean%20messaging%20interface%20with%20AI%20assistant%2C%20blue%20and%20white%20color%20scheme%2C%20enterprise%20chatbot%20solution&width=600&height=400&seq=4&orientation=landscape"
                alt="AI Chatbot Platform" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI Chatbot Platform
              </h3>
              <p className="text-gray-600 mb-4">
                Intelligent conversational platform with natural language
                processing and animated 3D assistant
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">TensorFlow.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">WebGL</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-opacity-80 transition-colors flex items-center">
                  <i className="ri-eye-line mr-2"></i> Live Demo
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors flex items-center">
                  <i className="ri-github-line mr-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card glass-card rounded-lg overflow-hidden">
            <div className="h-56 bg-gray-200 relative overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=interactive%20music%20visualization%20web%20application%2C%20audio%20waveform%20and%20spectrum%20analysis%2C%203D%20sound%20visualization%2C%20modern%20audio%20player%20interface%2C%20dark%20UI%20with%20colorful%20visualizations%2C%20professional%20music%20production%20tool&width=600&height=400&seq=5&orientation=landscape"
                alt="Music Visualizer" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3D Music Visualizer
              </h3>
              <p className="text-gray-600 mb-4">
                Reactive audio visualization platform with WebGL shaders and
                Web Audio API integration
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Web Audio API</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Three.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">GLSL</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">JavaScript</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-opacity-80 transition-colors flex items-center">
                  <i className="ri-eye-line mr-2"></i> Live Demo
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors flex items-center">
                  <i className="ri-github-line mr-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card glass-card rounded-lg overflow-hidden">
            <div className="h-56 bg-gray-200 relative overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=interactive%203D%20educational%20platform%20with%20physics%20simulations%2C%20scientific%20visualization%20tool%2C%20professional%20educational%20technology%20interface%2C%20clean%20UI%20design%20for%20learning%20platform%2C%20interactive%20science%20demonstrations%2C%20modern%20e-learning%20application&width=600&height=400&seq=6&orientation=landscape"
                alt="Educational Platform" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Interactive Learning Platform
              </h3>
              <p className="text-gray-600 mb-4">
                Educational platform with interactive 3D simulations and
                real-time collaboration features
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Three.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Socket.io</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-opacity-80 transition-colors flex items-center">
                  <i className="ri-eye-line mr-2"></i> Live Demo
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors flex items-center">
                  <i className="ri-github-line mr-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}