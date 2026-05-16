import { skills } from '../data/skills'
import { evaluations } from '../data/evaluation'

/** 将 **强调** 语法渲染为加粗 */
function renderWithEmphasis(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

/** 关于我：详细介绍 + 专业技能 + 个人评价 */
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-6 text-2xl font-semibold">
        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          关于我
        </span>
      </h2>
      <p className="mb-12 max-w-2xl text-muted">
        长沙理工大学计算机科学与技术卓越班2027届毕业生，专业排名前20%，具备扎实的Java开发技能，拥有组织管理和团队协作经验，具备良好的工程化思维，善于系统化学习与问题解决。
      </p>

      {skills.length > 0 && (
        <div className="mb-12">
          <h3 className="mb-6 text-lg font-medium text-foreground">专业技能</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20"
              >
                <h4 className="font-medium text-violet-300">{skill.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {evaluations.length > 0 && (
        <div>
          <h3 className="mb-6 text-lg font-medium text-foreground">个人评价</h3>
          <ul className="grid gap-4">
            {evaluations.map((item, index) => (
              <li
                key={index}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/20"
              >
                <p className="text-sm leading-relaxed text-muted">{renderWithEmphasis(item)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
