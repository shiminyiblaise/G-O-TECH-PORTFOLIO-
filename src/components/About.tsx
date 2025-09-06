import { Code, Palette, Zap, Users } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code },
    { name: 'UI/UX Design', level: 65, icon: Palette },
    { name: 'Backend Development', level: 70, icon: Zap },
    { name: 'Team Leadership', level: 70, icon: Users },
    { name: 'IT Networking', level: 50, icon: Zap },
   
  ]

  const technologies = [
    'React.js/Native', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'Tailwind CSS/CSS','vue.js',
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Figma & Adobe','CLI','Ruby & Ruby on Rails','MYSQL','PHP','Cisco Parket Tracer','etc',
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and thoughtful design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Text */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building the future, one project at a time
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 2 years of experience in full-stack development, I specialize in creating 
              scalable web applications that deliver exceptional user experiences. I'm passionate 
              about clean code, modern design, and innovative solutions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. My aim is to solve real life problem with software.
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Technologies I work with:
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-blue-50 text-primary rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div key={index} className="skill-item">
                    <div className="flex items-center mb-2">
                      <IconComponent className="h-5 w-5 text-primary mr-3" />
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="ml-auto text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About