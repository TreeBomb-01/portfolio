import { notFound } from 'next/navigation'
import { projectsData } from '@/data/projects'
import ProjectDetail from './ProjectDetail'

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.name} — 허태범 포트폴리오`,
    description: project.subtitle,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) notFound()

  return <ProjectDetail project={project} />
}
