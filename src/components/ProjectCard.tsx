import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

/** 单个项目卡片：标题、描述、技术栈 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, techStack } = project

  return (
    <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-violet-500/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-violet-500/10">
      <h3 className="text-lg font-semibold text-foreground transition group-hover:text-violet-200">
        {name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="技术栈">
        {techStack.map((tech) => (
          <li key={tech}>
            <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-0.5 text-xs font-medium text-violet-300">
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}
