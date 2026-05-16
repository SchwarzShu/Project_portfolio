/** 页脚 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-muted">
      <p>© {year} SchwarzShu's Portfolio. All rights reserved.</p>
    </footer>
  )
}
