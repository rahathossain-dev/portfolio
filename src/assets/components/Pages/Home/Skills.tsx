export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Technical Proficiency
            </h3>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="circle-progress mx-auto" style={{ ["--progress" as string]: '95' }}>
                  <svg width="80" height="80" viewBox="0 0 100 100">
                    <circle className="bg" cx="50" cy="50" r="40"></circle>
                    <circle className="progress" cx="50" cy="50" r="40"></circle>
                  </svg>
                  <div className="percentage">95%</div>
                </div>
                <p className="mt-2 text-gray-700 font-medium">Frontend</p>
              </div>

              <div className="text-center">
                <div className="circle-progress mx-auto" style={{ ["--progress" as string]: '90' }}>
                  <svg width="80" height="80" viewBox="0 0 100 100">
                    <circle className="bg" cx="50" cy="50" r="40"></circle>
                    <circle className="progress" cx="50" cy="50" r="40"></circle>
                  </svg>
                  <div className="percentage">90%</div>
                </div>
                <p className="mt-2 text-gray-700 font-medium">Backend</p>
              </div>

              <div className="text-center">
                <div className="circle-progress mx-auto" style={{ ["--progress" as string]: '85' }}>
                  <svg width="80" height="80" viewBox="0 0 100 100">
                    <circle className="bg" cx="50" cy="50" r="40"></circle>
                    <circle className="progress" cx="50" cy="50" r="40"></circle>
                  </svg>
                  <div className="percentage">85%</div>
                </div>
                <p className="mt-2 text-gray-700 font-medium">3D/WebGL</p>
              </div>

              <div className="text-center">
                <div className="circle-progress mx-auto" style={{ ["--progress" as string]: '80' }}>
                  <svg width="80" height="80" viewBox="0 0 100 100">
                    <circle className="bg" cx="50" cy="50" r="40"></circle>
                    <circle className="progress" cx="50" cy="50" r="40"></circle>
                  </svg>
                  <div className="percentage">80%</div>
                </div>
                <p className="mt-2 text-gray-700 font-medium">UI/UX</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Technology Stack
            </h3>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-2">
                  <i className="ri-reactjs-line ri-2x text-blue-500"></i>
                </div>
                <span className="text-gray-700">React</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-full mb-2">
                  <i className="ri-nodejs-line ri-2x text-green-600"></i>
                </div>
                <span className="text-gray-700">Node.js</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-50 rounded-full mb-2">
                  <i className="ri-javascript-line ri-2x text-purple-600"></i>
                </div>
                <span className="text-gray-700">JavaScript</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-50 rounded-full mb-2">
                  <i className="ri-html5-line ri-2x text-yellow-600"></i>
                </div>
                <span className="text-gray-700">HTML5</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-2">
                  <i className="ri-css3-line ri-2x text-blue-600"></i>
                </div>
                <span className="text-gray-700">CSS3</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-50 rounded-full mb-2">
                  <i className="ri-vuejs-line ri-2x text-indigo-600"></i>
                </div>
                <span className="text-gray-700">Vue.js</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full mb-2">
                  <i className="ri-database-2-line ri-2x text-red-600"></i>
                </div>
                <span className="text-gray-700">MongoDB</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-2">
                  <i className="ri-github-line ri-2x text-blue-900"></i>
                </div>
                <span className="text-gray-700">Git/GitHub</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-50 rounded-full mb-2">
                  <i className="ri-code-s-slash-line ri-2x text-purple-600"></i>
                </div>
                <span className="text-gray-700">TypeScript</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-full mb-2">
                  <i className="ri-server-line ri-2x text-green-600"></i>
                </div>
                <span className="text-gray-700">Express</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-2">
                  <i className="ri-database-line ri-2x text-blue-600"></i>
                </div>
                <span className="text-gray-700">SQL</span>
              </div>

              <div className="skill-icon flex flex-col items-center opacity-80 hover:opacity-100">
                <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full mb-2">
                  <i className="ri-terminal-box-line ri-2x text-red-600"></i>
                </div>
                <span className="text-gray-700">WebGL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Specialized Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mx-auto mb-4">
                <i className="ri-3d-cube-line ri-2x text-primary"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                3D Web Development
              </h4>
              <p className="text-gray-600">
                Creating immersive 3D experiences using Three.js, WebGL, and
                GLSL shaders for interactive visualizations and product
                showcases
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-50 rounded-full mx-auto mb-4">
                <i className="ri-code-box-line ri-2x text-primary"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Full Stack Architecture
              </h4>
              <p className="text-gray-600">
                Designing and implementing scalable application architectures
                with modern JavaScript frameworks and cloud infrastructure
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-full mx-auto mb-4">
                <i className="ri-user-smile-line ri-2x text-primary"></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Interactive UX Design
              </h4>
              <p className="text-gray-600">
                Crafting intuitive user experiences with advanced animations,
                micro-interactions, and responsive design principles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}