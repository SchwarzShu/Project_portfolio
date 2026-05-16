/** 联系方式：邮箱、GitHub、社交媒体 */
export interface ContactLink {
  label: string
  href: string
}

const contactLinks: ContactLink[] = [
  { label: '邮箱', href: 'mailto:xuhao.shu@qq.com' },
  { label: 'GitHub', href: 'https://github.com/SchwarzShu' },
  { label: '个人博客', href: 'https://www.cnblogs.com/SchwarzShu' },
  { label: '微信：SchwarzShu', href: '' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-6 text-2xl font-semibold">
        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          联系方式
        </span>
      </h2>
      <ul className="flex flex-wrap gap-4">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-sm transition-colors hover:border-violet-400/50 hover:text-violet-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
