'use client'

import { useState } from 'react'

export default function Projects() {
    const [activeTab, setActiveTab] = useState<{ [key: number]: 'tech' | 'contributions' }>({})

    const projects = [
        {
            id: 1,
            title: "CCTV 영상 데이터를 이용한 도로 노후화 탐지 시스템",
            description: "전국 CCTV를 통해 도로 상태를 파악하고 데이터 기반 유지보수 체계를 구축",
            category: "공모전",
            period: "2025.07 - 현재 (진행중)",
            image: "from-blue-500 to-blue-700",
            contributions: [
                {
                    title: "백엔드 서버 설계 및 구현",
                    description: "Spring Boot 기반 RESTful API 설계/구현, 인증/에러 표준화, 페이징/검색 최적화 (API p95 지연 감소)",
                    technologies: ["Spring Boot", "JPA", "MyBatis", "MySQL"]
                },
                {
                    title: "서버 인프라 구축 및 자동화",
                    description: "Docker·Jenkins·OpenStack으로 CI/CD 파이프라인 구축, 브랜치별 자동 배포 및 롤백 (배포 시간 단축)",
                    technologies: ["Docker", "Jenkins", "OpenStack"]
                },
                {
                    title: "Redis 작업 큐 & 성능 개선",
                    description: "Redis Streams + Consumer Group 재설계, 유령 컨슈머 정리·메시지 환수·리트라이·워커 병렬화로 처리량 향상 (4,600건 배치 7h → 1h 24m)",
                    technologies: ["Redis"]
                },
                {
                    title: "영상 데이터 처리 파이프라인 개발",
                    description: "FastAPI·FFmpeg·OpenCV로 대용량 영상 전처리/프레임 추출 파이프라인 구현, 비동기 처리와 백프레셔 적용",
                    technologies: ["FastAPI", "OpenCV", "FFmpeg"]
                },
                {
                    title: "AI 모델 서빙 API 구축",
                    description: "YOLO 기반 도로 손상 탐지 모델 서빙, 배치/실시간 추론 엔드포인트 제공 및 로깅/모니터링",
                    technologies: ["FastAPI", "YOLO", "PyTorch"]
                },
                {
                    title: "데이터베이스 스키마 설계 및 최적화",
                    description: "CCTV·검출결과·이미지 메타데이터 스키마 설계, 복합/공간 인덱스(Point, SPATIAL)로 지역 기반 조회 가속",
                    technologies: ["MySQL", "ERDCloud"]
                }
            ],
            technologies: ["Spring Boot", "FastAPI", "MySQL", "Redis", "Jenkins", "YOLO", "OpenCV", "PyTorch"],
            demoUrl: "https://www.helios-cctv.org/",
            githubUrl: "https://github.com/Helios-CCTV/",
            featured: true
        },
        {
            id: 2,
            title: "헬스케어 웹앱 프로젝트",
            description: "영상 데이터 기반 운동 자세 분석 및 피드백 웹앱 구축",
            category: "캡스톤디자인",
            period: "2025.03 - 현재 (진행중)",
            image: "from-purple-500 to-purple-700",
            contributions: [
                {
                    title: "백엔드 서버 설계 및 구현",
                    description: "Spring Boot 기반 RESTful API 설계/구현, 인증/에러 표준화, 페이징/검색 최적화 (API p95 지연 감소)",
                    technologies: ["Spring Boot", "JPA", "PostgreSQL"]
                },
                {
                    title: "서버 인프라 구축 및 자동화",
                    description: "Docker·Jenkins·OpenStack으로 CI/CD 파이프라인 구축, 브랜치별 자동 배포 및 롤백 (배포 시간 단축)",
                    technologies: ["Docker", "Jenkins", "proxmox"]
                },
                {
                    title: "파일 업로드 및 이미지 처리",
                    description: "AWS S3를 활용한 파일 업로드 및 관리",
                    technologies: ["AWS S3", "MinIO"]
                },
                {
                    title: "파일 업로드 및 이미지 처리",
                    description: "영상 데이터 기반 운동 자세 분석 모델 개발 및 서빙",
                    technologies: ["FastAPI", "MediaPipe", "openCV"]
                }
            ],
            technologies: ["Spring boot", "JPA", "MyBatis", "WebSocket", "FastAPI", "MediaPipe", "openCV", "PostgreSQL", "AWS S3", "Docker", "Jenkins"],
            demoUrl: "#",
            githubUrl: "https://github.com/LevelUpFit",
            featured: true
        },
        {
            id: 3,
            title: "금융 + 메신저 프로젝트",
            description: "마이크로서비스 아키텍처 기반 모의투자 애플리케이션 구현",
            category: "개인",
            period: "2024.10 - 현재 (진행중)",
            image: "from-green-500 to-green-700",
            contributions: [
                {
                    title: "상태관리 및 서버 통신 구현",
                    description: "Spring Boot WebSocket을 활용한 실시간 메시징 시스템 개발",
                    technologies: ["React Native", "Zustand", "React Query"]
                }
            ],
            technologies: ["React Native", "Zustand", "React Query"],
            demoUrl: "#",
            githubUrl: "https://github.com/ST00CK",
            featured: true
        },
        {
            id: 4,
            title: "데이트코스 추천 웹앱 프로젝트",
            description: "사용자의 개개인의 취미에 맞춰 데이트 코스 추천 및 계획 윕앱 구축",
            category: "캡스톤디자인",
            period: "2023.09 - 2023.12 (3개월)",
            image: "from-orange-500 to-orange-700",
            contributions: [
                {
                    title: "마이크로서비스 아키텍처 설계",
                    description: "도메인 기반 서비스 분리 및 독립적 배포 가능한 아키텍처 설계",
                    technologies: ["Node.js", "Express", "MongoDB"]
                },
                {
                    title: "API Gateway 구현",
                    description: "Nginx 기반 API Gateway 및 로드밸런싱 시스템 구축",
                    technologies: ["Nginx", "Docker", "Consul"]
                }
            ],
            technologies: ["Docker", "Kubernetes", "Node.js", "Nginx", "MongoDB", "Consul"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            id: 5,
            title: "데이터 분석 API",
            description: "대용량 데이터 처리를 위한 분석 API입니다. 데이터 파이프라인을 구축하고 실시간 데이터 처리 및 시각화를 지원합니다.",
            category: "개인",
            period: "2023.05 - 2023.07 (3개월)",
            image: "from-red-500 to-red-700",
            contributions: [
                {
                    title: "대용량 데이터 처리 파이프라인 구축",
                    description: "Apache Kafka를 활용한 실시간 데이터 스트리밍 파이프라인 개발",
                    technologies: ["Apache Kafka", "Python", "Pandas"]
                }
            ],
            technologies: ["Python", "FastAPI", "Apache Kafka", "ElasticSearch", "Pandas"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        },
        {
            id: 6,
            title: "인증 서버",
            description: "OAuth 2.0과 JWT를 활용한 중앙 집중식 인증 서버입니다. 다중 애플리케이션에서 사용할 수 있는 SSO(Single Sign-On) 기능을 제공합니다.",
            category: "개인",
            period: "2023.02 - 2023.04 (3개월)",
            image: "from-indigo-500 to-indigo-700",
            contributions: [
                {
                    title: "OAuth 2.0 프로토콜 기반 인증 서버 구현",
                    description: "Spring Security OAuth2를 활용한 인증/인가 서버 개발",
                    technologies: ["Spring Security", "OAuth 2.0", "JWT"]
                }
            ],
            technologies: ["Java", "Spring Security", "OAuth 2.0", "MySQL", "JWT"],
            demoUrl: "#",
            githubUrl: "#",
            featured: false
        }
    ]

    const featuredProjects = projects.filter(project => project.featured)
    const otherProjects = projects.filter(project => !project.featured)

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            프로젝트
                        </h2>
                        <p className="text-xl text-gray-600">
                            제가 작업한 프로젝트들을 소개합니다
                        </p>
                    </div>

                    {/* Featured Projects */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">주요 프로젝트</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredProjects.map((project) => (
                                <div key={project.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className={`h-48 bg-gradient-to-r ${project.image} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                        <div className="absolute top-3 right-3">
                                            <span className="text-sm text-white bg-black bg-opacity-60 px-3 py-1 rounded-full backdrop-blur-sm">
                                                {project.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors mb-3">
                                            {project.title}
                                        </h4>

                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tab Navigation */}
                                        <div className="mb-4">
                                            <div className="flex border-b border-gray-200">
                                                <button
                                                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${(activeTab[project.id] || 'tech') === 'tech'
                                                            ? 'border-gray-700 text-gray-700'
                                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                                        }`}
                                                    onClick={() => setActiveTab(prev => ({ ...prev, [project.id]: 'tech' }))}
                                                >
                                                    사용 스택
                                                </button>
                                                <button
                                                    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab[project.id] === 'contributions'
                                                            ? 'border-gray-700 text-gray-700'
                                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                                        }`}
                                                    onClick={() => setActiveTab(prev => ({ ...prev, [project.id]: 'contributions' }))}
                                                >
                                                    주요 기여사항
                                                </button>
                                            </div>
                                        </div>

                                        {/* Tab Content */}
                                        <div className="mb-4 min-h-[200px]">
                                            {(activeTab[project.id] || 'tech') === 'tech' ? (
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech) => (
                                                        <span key={tech} className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="space-y-3">
                                                    {project.contributions.map((contribution, index) => (
                                                        <div key={index} className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-700">
                                                            <h6 className="text-sm font-semibold text-gray-800 mb-1">
                                                                {contribution.title}
                                                            </h6>
                                                            <p className="text-xs text-gray-600 mb-2">
                                                                {contribution.description}
                                                            </p>
                                                            <div className="flex flex-wrap gap-1">
                                                                {contribution.technologies.map((tech) => (
                                                                    <span key={tech} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex gap-4">
                                            <a
                                                href={project.demoUrl}
                                                className="flex-1 bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
                                            >
                                                데모 보기
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                className="flex-1 border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Projects */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">기타 프로젝트</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {otherProjects.map((project) => (
                                <div key={project.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                                    <div className={`h-32 bg-gradient-to-r ${project.image} relative`}>
                                        <div className="absolute top-2 right-2">
                                            <span className="text-xs text-white bg-black bg-opacity-60 px-2 py-1 rounded-full backdrop-blur-sm">
                                                {project.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors mb-2">
                                            {project.title}
                                        </h4>

                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* 주요 기여 사항 (간략) */}
                                        <div className="mb-2">
                                            <p className="text-xs font-medium text-gray-700 mb-1">주요 기여:</p>
                                            <p className="text-xs text-gray-600 line-clamp-2">
                                                {project.contributions[0]?.title}
                                            </p>
                                        </div>

                                        {/* 사용 기술 */}
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 text-gray-500 text-xs">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex gap-2">
                                            <a
                                                href={project.demoUrl}
                                                className="flex-1 bg-gray-700 hover:bg-gray-800 text-white py-1 px-3 rounded text-sm font-medium transition-colors text-center"
                                            >
                                                데모
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                className="flex-1 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white py-1 px-3 rounded text-sm font-medium transition-colors text-center"
                                            >
                                                코드
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Summary */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            모든 프로젝트는 클린 코드 원칙과 SOLID 설계 원칙을 준수하여 개발되었으며,
                            단위 테스트와 통합 테스트를 통해 코드 품질을 보장합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}