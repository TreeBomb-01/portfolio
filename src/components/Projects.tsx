'use client'

import { useState } from 'react'

export default function Projects() {
    const [activeTab, setActiveTab] = useState<{ [key: number]: 'tech' | 'contributions' | undefined }>({})
    const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({})

    const projects = [
        {
            id: 1,
            title: "CCTV 영상 데이터를 이용한 도로 노후화 탐지 시스템",
            description: "전국 CCTV를 통해 도로 상태를 파악하고 데이터 기반 유지보수 체계를 구축",
            category: "공모전",
            period: "2025.07 - 2025.10",
            award: "은상",
            image: "from-blue-500 to-blue-700",
            contributions: [
                {
                    title: "백엔드 서버 설계 및 구현",
                    description: "Spring Boot 기반 RESTful API 설계/구현, 인증/에러 표준화, 페이징/검색 최적화",
                    technologies: ["Spring Boot", "JPA", "MyBatis", "MySQL"]
                },
                {
                    title: "서버 인프라 구축 및 자동화",
                    description: "Docker·Jenkins·OpenStack으로 CI/CD 파이프라인 구축, 브랜치별 자동 배포 및 롤백",
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
            demoUrl: "#",
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
                    description: "Spring Boot 기반 RESTful API 설계/구현, 인증/에러 표준화, JWT 기반 인증/인가 구현",
                    technologies: ["Spring Boot", "Spring Security", "JPA", "PostgreSQL", "WebSocket", "Kakao login API"]
                },
                {
                    title: "AI 기반 운동 자세 분석 및 모델 서빙 시스템",
                    description: "영상 데이터 기반 운동 자세 분석 모델 개발 및 서빙",
                    technologies: ["FastAPI", "MediaPipe", "openCV"]
                },
                {
                    title: "서버 인프라 구축 및 자동화",
                    description: "Docker·Jenkins·OpenStack으로 CI/CD 파이프라인 구축, 브랜치별 자동 배포",
                    technologies: ["Docker", "Jenkins", "proxmox"]
                },
                {
                    title: "파일 업로드 및 이미지 처리",
                    description: "AWS S3를 활용한 파일 업로드 및 관리",
                    technologies: ["AWS S3", "MinIO"]
                }
            ],
            technologies: ["Spring boot", "Spring Security", "JPA", "MyBatis", "WebSocket", "FastAPI", "MediaPipe", "openCV", "PostgreSQL", "AWS S3", "Proxmox", "Docker", "Jenkins"],
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
            description: "사용자의 개인의 취미에 맞춰 데이트 코스 추천 및 계획 웹앱 구축",
            category: "캡스톤디자인",
            period: "2023.09 - 2023.12 (3개월)",
            image: "from-orange-500 to-orange-700",
            contributions: [
                {
                    title: "기획 및 아키텍처 설계",
                    description: "팀장으로 전체적인 아키텍처의 설계와 운영을 담당",
                    technologies: []
                },
                {
                    title: "백엔드 서버 설계 및 구현",
                    description: "Spring Boot 기반 RESTful API 설계/구현, 인증/에러 표준화",
                    technologies: ["Spring Boot", "Spring Security", "MyBatis", "MySQL", "Kakao login API"]
                },
            ],
            technologies: ["Spring Boot", "Spring Security", "MyBatis", "MySQL", "Kakao login API"],
            demoUrl: "#",
            githubUrl: "https://github.com/cosecose",
            featured: false
        },
        {
            id: 5,
            title: "숙박 예약 시스템",
            description: "숙박 예약 웹 서비스를 벤치마킹하여 Spring Boot을 활용해 구현한 프로젝트입니다.",
            category: "코리아 IT 아카데미",
            period: "2024.02 - 2024.02 (1개월)",
            image: "from-red-500 to-red-700",
            contributions: [
                {
                    title: "숙박 업소 카테고리 및 정보 관리",
                    description: "숙박 업소 카테고리 분류 및 기본 정보 관리 기능 구현",
                    technologies: ["Spring", "Oracle DB"]
                }
            ],
            technologies: ["Spring"],
            demoUrl: "#",
            githubUrl: "https://github.com/TreeBomb-01/web",
            featured: false
        },
        {
            id: 6,
            title: "쇼핑몰 서비스 구현",
            description: "Java GUI를 통해 상품 관리, 회원 관리, 주문 관리 기능을 제공하는 쇼핑몰 서비스 구현",
            category: "코리아 IT 아카데미",
            period: "2023.11 - 2023.11 (1개월)",
            image: "from-indigo-500 to-indigo-700",
            contributions: [
                {
                    title: "상품 등록 및 관리 기능 구현",
                    description: "Java GUI를 통해 상품 등록 및 관리 기능을 구현",
                    technologies: ["Java", "SourceTree"]
                }
            ],
            technologies: ["Java", "SourceTree"],
            demoUrl: "#",
            githubUrl: "https://github.com/TreeBomb-01/WebMiniProject",
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
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            {featuredProjects.map((project) => (
                                <div key={project.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-fit">
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
                                            <div className="flex gap-2">
                                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                                                    {project.category}
                                                </span>
                                                {project.award && (
                                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium flex items-center gap-1">
                                                        <span>🏆</span>
                                                        {project.award}
                                                    </span>
                                                )}
                                            </div>
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
                                            {project.demoUrl && project.demoUrl !== '#' ? (
                                                <a
                                                    href={project.demoUrl}
                                                    className="flex-1 bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    데모 보기
                                                </a>
                                            ) : (
                                                <button
                                                    disabled
                                                    className="flex-1 bg-gray-400 text-gray-600 py-2 px-4 rounded-lg font-medium cursor-not-allowed text-center"
                                                >
                                                    데모 보기
                                                </button>
                                            )}
                                            {project.githubUrl && project.githubUrl !== '#' ? (
                                                <a
                                                    href={project.githubUrl}
                                                    className="flex-1 border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    GitHub
                                                </a>
                                            ) : (
                                                <button
                                                    disabled
                                                    className="flex-1 border-2 border-gray-400 text-gray-400 py-2 px-4 rounded-lg font-medium cursor-not-allowed text-center"
                                                >
                                                    GitHub
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Projects */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">기타 프로젝트</h3>
                        <div className="grid md:grid-cols-3 gap-6 items-start">
                            {otherProjects.map((project) => (
                                <div key={project.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-fit">
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
                                            <button
                                                onClick={() => setExpandedProjects(prev => ({ ...prev, [project.id]: !prev[project.id] }))}
                                                className="text-gray-500 hover:text-gray-700 transition-colors p-1 text-xs"
                                            >
                                                {expandedProjects[project.id] ? '접기' : '펼치기'}
                                            </button>
                                        </div>
                                        
                                        <h4 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors mb-2">
                                            {project.title}
                                        </h4>

                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* 기술 스택 섹션 */}
                                        <div className="mb-3">
                                            <div className="flex items-start gap-2 mb-2">
                                                <span className="text-xs font-medium text-gray-700 whitespace-nowrap">기술 스택:</span>
                                                <div className="flex flex-wrap gap-1 flex-1">
                                                    {expandedProjects[project.id] ? (
                                                        // 모든 기술 스택 표시
                                                        project.technologies.map((tech) => (
                                                            <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                                                {tech}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        // 처음 3개 + 더보기 버튼
                                                        <>
                                                            {project.technologies.slice(0, 3).map((tech) => (
                                                                <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                            {project.technologies.length > 3 && (
                                                                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                                                                    +{project.technologies.length - 3}
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* 기여사항 섹션 */}
                                        <div className="mb-3">
                                            <div className="mb-2">
                                                <span className="text-xs font-medium text-gray-700">주요 기여:</span>
                                                <div className="flex items-center gap-1 mt-1">
                                                    {!expandedProjects[project.id] ? (
                                                        // 접힌 상태: 첫 번째 기여만 텍스트로 표시
                                                        <>
                                                            <p className="text-xs text-gray-600 line-clamp-1 flex-1">
                                                                {project.contributions[0]?.title}
                                                            </p>
                                                            {project.contributions.length > 1 && (
                                                                <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded whitespace-nowrap">
                                                                    +{project.contributions.length - 1}
                                                                </span>
                                                            )}
                                                        </>
                                                    ) : null}
                                                </div>
                                            </div>
                                            
                                            {/* 확장된 기여사항 */}
                                            {expandedProjects[project.id] && (
                                                <div className="bg-gray-50 p-2 rounded mb-2 space-y-2">
                                                    {project.contributions.map((contribution, index) => (
                                                        <div key={index} className="bg-white p-2 rounded shadow-sm border-l-2 border-green-300">
                                                            <p className="text-xs font-medium text-gray-800 mb-1">{contribution.title}</p>
                                                            <p className="text-xs text-gray-600 mb-1">{contribution.description}</p>
                                                            <div className="flex flex-wrap gap-1">
                                                                {contribution.technologies.map((tech) => (
                                                                    <span key={tech} className="px-1 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>



                                        <div className="flex gap-2">
                                            {project.demoUrl && project.demoUrl !== '#' ? (
                                                <a
                                                    href={project.demoUrl}
                                                    className="flex-1 bg-gray-700 hover:bg-gray-800 text-white py-1 px-3 rounded text-sm font-medium transition-colors text-center"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    데모
                                                </a>
                                            ) : (
                                                <button
                                                    disabled
                                                    className="flex-1 bg-gray-400 text-gray-600 py-1 px-3 rounded text-sm font-medium cursor-not-allowed text-center"
                                                >
                                                    데모
                                                </button>
                                            )}
                                            {project.githubUrl && project.githubUrl !== '#' ? (
                                                <a
                                                    href={project.githubUrl}
                                                    className="flex-1 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white py-1 px-3 rounded text-sm font-medium transition-colors text-center"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    GitHub
                                                </a>
                                            ) : (
                                                <button
                                                    disabled
                                                    className="flex-1 border border-gray-400 text-gray-400 py-1 px-3 rounded text-sm font-medium cursor-not-allowed text-center"
                                                >
                                                    GitHub
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Summary */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}