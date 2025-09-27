export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "Node.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "C#", level: 70 },
      ]
    },
    {
      title: "Database & Infrastructure",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Spring Boot", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "Django", level: 75 },
        { name: "Git", level: 90 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 90 },
      ]
    },
    {
      title: "DevOps & Others",
      skills: [
        { name: "Linux", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Nginx", level: 65 },
        { name: "Kubernetes", level: 60 },
        { name: "GraphQL", level: 70 },
        { name: "REST API", level: 90 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              기술 스택
            </h2>
            <p className="text-xl text-gray-600">
              백엔드 개발에 활용하는 기술들입니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-700 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-gray-600 to-slate-800 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              핵심 기술
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
              {['Java', 'Node.js', 'Python', 'MySQL', 'Docker', 'AWS'].map((tech) => (
                <div key={tech} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-gray-600 to-slate-800 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    {tech.slice(0, 2)}
                  </div>
                  <div className="text-sm font-medium text-gray-700">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}