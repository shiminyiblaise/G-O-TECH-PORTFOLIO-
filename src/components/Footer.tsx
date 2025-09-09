import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="text-3xl font-bold mb-4 font-serif">
            <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          
          {/* Tagline */}
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Creating beautiful digital experiences with passion and precision.
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
              <p className="flex items-center">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Shiminyi Blaise
              </p>
              <p className="mt-2 sm:mt-0">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer