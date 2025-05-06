export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Get In Touch
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Me a Message
            </h3>

            <form>
              <div className="mb-6 relative">
                <input type="text" id="name"
                  className="w-full py-3 px-0 text-gray-700 border-b-2 border-gray-200 focus:border-primary"
                  placeholder=" " />
                <label htmlFor="name" className="floating-label">Your Name</label>
              </div>

              <div className="mb-6 relative">
                <input type="email" id="email"
                  className="w-full py-3 px-0 text-gray-700 border-b-2 border-gray-200 focus:border-primary"
                  placeholder=" " />
                <label htmlFor="email" className="floating-label">Your Email</label>
              </div>

              <div className="mb-6 relative">
                <input type="text" id="subject"
                  className="w-full py-3 px-0 text-gray-700 border-b-2 border-gray-200 focus:border-primary"
                  placeholder=" " />
                <label htmlFor="subject" className="floating-label">Subject</label>
              </div>

              <div className="mb-8 relative">
                <textarea id="message" rows={4}
                  className="w-full py-3 px-0 text-gray-700 border-b-2 border-gray-200 focus:border-primary"
                  placeholder=" "></textarea>
                <label htmlFor="message" className="floating-label">Your Message</label>
              </div>

              <button type="submit"
                className="bg-primary text-white px-8 py-3 rounded-button text-lg font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg !rounded-button whitespace-nowrap">
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2">
            <div className="glass-card p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div
                    className="w-10 h-10 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mr-4 mt-1">
                    <i className="ri-mail-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      alexander.mitchell@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="w-10 h-10 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mr-4 mt-1">
                    <i className="ri-phone-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="w-10 h-10 flex items-center justify-center bg-primary bg-opacity-10 rounded-full mr-4 mt-1">
                    <i className="ri-map-pin-line text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      Location
                    </h4>
                    <p className="text-gray-600">San Francisco, California</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Connect With Me
              </h3>

              <div className="flex space-x-6">
                <a href="#"
                  className="social-icon w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-700">
                  <i className="ri-github-fill ri-lg"></i>
                </a>
                <a href="#"
                  className="social-icon w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-700">
                  <i className="ri-linkedin-fill ri-lg"></i>
                </a>
                <a href="#"
                  className="social-icon w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-700">
                  <i className="ri-twitter-fill ri-lg"></i>
                </a>
                <a href="#"
                  className="social-icon w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-700">
                  <i className="ri-dribbble-fill ri-lg"></i>
                </a>
                <a href="#"
                  className="social-icon w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-700">
                  <i className="ri-instagram-fill ri-lg"></i>
                </a>
              </div>

              <div className="mt-8 h-40 bg-gray-100 rounded-lg overflow-hidden" id="location-map">
                <img src="https://public.readdy.ai/gen_page/map_placeholder_1280x720.png" alt="Location Map"
                  className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}