/** 顶部导航 */
export default function Header() {
  const navItems = [
    { label: '首页', href: '#hero' },
    { label: '关于我', href: '#about' },
    { label: '项目展示', href: '#projects' },
    { label: '联系我', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-lg font-semibold text-transparent"
        >
          SchwarzShu's Portfolio
        </a>
        <ul className="flex gap-6 text-sm text-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
