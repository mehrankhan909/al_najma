export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#f5f5f5] via-[#ededed] to-[#e3e3e3] text-[#2c2c2c] py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#c59d5f] to-[#00675b] bg-clip-text text-transparent">
              AL-NAJ(MA)<span className="font-light">rble</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Dubai's premier marble polishing and restoration service for high-end residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#c59d5f] transition-colors">
                {/* Facebook Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#c59d5f] transition-colors">
                {/* Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#c59d5f] transition-colors">
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-600 hover:text-[#c59d5f] transition-colors">
                  Diamond Polishing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-[#c59d5f] transition-colors">
                  Deep Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-[#c59d5f] transition-colors">
                  Nano Sealing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-[#c59d5f] transition-colors">
                  Crack Repair
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero-section" className="text-gray-600 hover:text-[#c59d5f] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#our-services" className="text-gray-600 hover:text-[#c59d5f] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#live-demo" className="text-gray-600 hover:text-[#c59d5f] transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#client-reviews" className="text-gray-600 hover:text-[#c59d5f] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#book-consultation" className="text-gray-600 hover:text-[#c59d5f] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-[#c59d5f] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">Downtown Dubai, Sheikh Mohammed bin Rashid Blvd, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-[#c59d5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-[#c59d5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">info@alnajma.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Al Najma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
