import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

/** 项目展示：项目卡片列表 */
export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          custom={0}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              项目展示
            </span>
          </h2>
        </motion.div>

        {projects.length === 0 ? (
          <p className="mt-12 text-muted">暂无项目，请在 src/data/projects.ts 中添加。</p>
        ) : (
          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.li
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={0.1 + index * 0.08}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
