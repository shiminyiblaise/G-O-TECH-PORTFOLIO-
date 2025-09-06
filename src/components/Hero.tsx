import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Hello, I'm</span>
            <br />
            <span className="gradient-text font-serif">Shiminyi Blaise</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate <span className="text-primary font-semibold">Full Stack Developer</span> crafting beautiful, 
            functional digital experiences with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/shiminyiblaise"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <Github className="h-6 w-6 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com/shiminyiblaise"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6 text-gray-700" />
            </a>
            <a
              href="mailto:shiminyiblaise650@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6 text-gray-700" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ArrowDown className="h-8 w-8 text-gray-500 mx-auto cursor-pointer hover:text-primary transition-colors duration-200" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero