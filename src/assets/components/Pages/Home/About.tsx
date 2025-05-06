export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden relative" id="avatar-container">
              {/* <!-- 3D model will be rendered here --> */}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Who I Am
            </h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate Full Stack Developer with over 7 years of
              experience crafting digital solutions that combine technical
              excellence with creative vision. Specializing in building
              immersive web experiences using modern technologies, I bring
              ideas to life through clean code and thoughtful design.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              My Expertise
            </h3>
            <div className="space-y-4 mb-8">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Frontend Development</span>
                  <span className="text-gray-600">95%</span>
                </div>
                <div className="progress-bar" style={{ ["--progress" as string]: '95%' }}></div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Backend Development</span>
                  <span className="text-gray-600">90%</span>
                </div>
                <div className="progress-bar" style={{ ["--progress" as string]: '90%' }}></div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">3D Web Development</span>
                  <span className="text-gray-600">85%</span>
                </div>
                <div className="progress-bar" style={{ ["--progress" as string]: '85%' }}></div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">UI/UX Design</span>
                  <span className="text-gray-600">80%</span>
                </div>
                <div className="progress-bar" style={{ ["--progress" as string]: '80%' }}></div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Journey
            </h3>
            <div className="space-y-6">
              <div className="timeline-item">
                <h4 className="text-lg font-medium text-gray-900">
                  Senior Full Stack Developer
                </h4>
                <p className="text-primary font-medium">
                  TechInnovate Solutions • 2022 - Present
                </p>
                <p className="text-gray-600 mt-1">
                  Leading development of enterprise web applications with
                  React, Node.js, and WebGL
                </p>
              </div>
              <div className="timeline-item">
                <h4 className="text-lg font-medium text-gray-900">
                  Frontend Developer
                </h4>
                <p className="text-primary font-medium">
                  Digital Crafters • 2019 - 2022
                </p>
                <p className="text-gray-600 mt-1">
                  Built interactive web experiences using Three.js and modern
                  JavaScript frameworks
                </p>
              </div>
              <div className="timeline-item">
                <h4 className="text-lg font-medium text-gray-900">
                  Web Developer
                </h4>
                <p className="text-primary font-medium">
                  Creative Solutions Agency • 2017 - 2019
                </p>
                <p className="text-gray-600 mt-1">
                  Developed responsive websites and applications for diverse
                  client needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}