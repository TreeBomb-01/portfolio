import { projectsData, awardsData } from '@/data/portfolioData'

// Code View Content Generator
export const getCodeContent = (section: string): string => {
  switch (section) {
    case 'readme':
      return `<span class="c-comment"># Backend Engineer Portfolio</span>
<span class="c-comment"># Name: HurTaeBum</span>
<span class="c-comment"># Role: Junior Backend Developer</span>

<span class="c-keyword">##</span> Table of Contents
1. [About Me](#about)
2. [Skills](#skills)
3. [Projects](#projects)
4. [Awards](#awards)

<span class="c-comment"># 안정적이고 확장 가능한 서버 시스템을 구축하는</span>
<span class="c-comment"># 백엔드 개발자입니다.</span>

<span class="c-keyword">##</span> Contact
- <span class="c-string">Email: htb010630@gmail.com</span>
- <span class="c-string">GitHub: github.com/TreeBomb-01</span>`

    case 'about':
      return `<span class="c-keyword">package</span> com.portfolio.me;

<span class="c-comment">/**
 * 안녕하세요. 안정성과 확장성을 중시하는 백엔드 개발자입니다.
 * 프로젝트와 공모전을 통해 운영 효율성과 신뢰성을 높이는
 * 시스템 설계를 경험했습니다.
 */</span>
<span class="c-keyword">public class</span> <span class="c-type">AboutMe</span> {
    <span class="c-keyword">private final</span> <span class="c-type">String</span> <span class="c-var">name</span> = <span class="c-string">"HurTaeBum"</span>;
    <span class="c-keyword">private final</span> <span class="c-type">String</span> <span class="c-var">email</span> = <span class="c-string">"htb010630@gmail.com"</span>;
    
    <span class="c-keyword">public void</span> <span class="c-func">introduction</span>() {
        <span class="c-type">System</span>.out.println(<span class="c-string">"🏗️ 안정성과 확장성을 고려한 서버 아키텍처 설계"</span>);
        <span class="c-type">System</span>.out.println(<span class="c-string">"📡 RESTful API 설계 및 개발, 최적화"</span>);
        <span class="c-type">System</span>.out.println(<span class="c-string">"🗄️ 데이터베이스 모델링 및 성능 개선"</span>);
        <span class="c-type">System</span>.out.println(<span class="c-string">"⚡ 분산 처리 및 대규모 트래픽 대응"</span>);
        <span class="c-type">System</span>.out.println(<span class="c-string">"🔄 CI/CD 자동화 및 운영 효율화"</span>);
    }
}`

    case 'skills':
      return `<span class="c-prop">backend:</span>
  <span class="c-string">- Spring Boot</span>
  <span class="c-string">- FastAPI</span>
  <span class="c-string">- RESTful API</span>

<span class="c-prop">database:</span>
  <span class="c-string">- MySQL</span>
  <span class="c-string">- PostgreSQL</span>
  <span class="c-string">- Redis</span>

<span class="c-prop">devops:</span>
  <span class="c-string">- Docker</span>
  <span class="c-string">- Jenkins</span>
  <span class="c-string">- GitHub Actions</span>

<span class="c-prop">languages:</span>
  <span class="c-string">- Java</span>
  <span class="c-string">- Python</span>
  <span class="c-string">- SQL</span>

<span class="c-prop">philosophy:</span>
  <span class="c-comment"># 안정성과 확장성을 중시하며,</span>
  <span class="c-comment"># 클린 아키텍처를 적용해 변화에 유연하고</span>
  <span class="c-comment"># 유지보수가 쉬운 백엔드 시스템을 구축합니다.</span>`

    case 'awards':
      const awardsList = awardsData.map(a => 
        `<span class="c-num">[${a.date}]</span> <span class="c-keyword">INFO</span>: <span class="c-string">${a.title} - ${a.grade}</span>`
      ).join('\n')
      return `<span class="c-comment"># Awards & Certifications Log</span>
<span class="c-comment"># Backend Engineer Portfolio</span>

${awardsList}

<span class="c-comment"># Total Awards: ${awardsData.length}</span>
<span class="c-comment"># Project-based Awards: ${awardsData.filter(a => a.project).length}</span>`

    default:
      // Project code views
      const project = projectsData.find(p => p.id === section)
      if (project) {
        const techList = project.technologies.map(t => `  <span class="c-string">- ${t}</span>`).join('\n')
        const contribList = project.contributions.map(c => 
          `    <span class="c-comment">// ${c.title}</span>\n    <span class="c-comment">// ${c.description}</span>`
        ).join('\n\n')
        
        return `<span class="c-comment">/**
 * Project: ${project.title}
 * Category: ${project.category}
 * Period: ${project.period}
 */</span>

<span class="c-annotation">@Project</span>(<span class="c-string">"${project.id}"</span>)
<span class="c-keyword">public class</span> <span class="c-type">${project.id.charAt(0).toUpperCase() + project.id.slice(1)}</span> {

    <span class="c-prop">description:</span>
      <span class="c-string">"${project.description}"</span>

    <span class="c-prop">technologies:</span>
${techList}

    <span class="c-keyword">public void</span> <span class="c-func">contributions</span>() {
${contribList}
    }
}`
      }
      return '// No content available'
  }
}

interface CodeViewProps {
  activeSection: string
}

export default function CodeView({ activeSection }: CodeViewProps) {
  const code = getCodeContent(activeSection)
  const lineCount = code.split('\n').length

  return (
    <div className="flex w-full">
      <div className="py-4 bg-[#1e1e1e] flex flex-col items-end text-gray-600 select-none text-right min-w-[3.5rem] border-r border-[#333] mr-4 pr-2">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i} className="leading-6 text-xs">{i + 1}</div>
        ))}
      </div>
      <div className="py-4 pr-4 w-full cursor-text overflow-x-auto">
        <pre 
          className="pl-4 font-mono text-sm leading-6"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>
    </div>
  )
}
