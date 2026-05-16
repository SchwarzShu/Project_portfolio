import { motion } from 'framer-motion'
import { heroContent } from '../data/hero'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

/** 首页：大标题 + 简介 + 头像 */
export default function Hero() {
  const { greeting, name, role, bio, avatarSrc, avatarAlt, initials } = heroContent

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-24 md:pb-32"
    >
      {/* 背景渐变光晕 */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-fuchsia-600/15 blur-[80px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
        {/* 头像 */}
        <motion.div
          className="shrink-0"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <motion.div
            className="relative h-56 w-40 overflow-hidden rounded-lg bg-[#141414] md:h-64 md:w-44"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
              {avatarSrc ? (
                <img
                  src={avatarSrc}
                  alt={avatarAlt}
                  className="h-full w-full object-cover"
                  width={176}
                  height={256}
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-950/80 to-fuchsia-950/80"
                  aria-label={avatarAlt}
                >
                  <span className="bg-gradient-to-br from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-3xl font-bold tracking-wide text-transparent md:text-4xl">
                    {initials}
                  </span>
                </div>
              )}
          </motion.div>
        </motion.div>

        {/* 文案 */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.p
            className="mb-2 text-sm font-medium tracking-widest text-muted uppercase md:text-base"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            {greeting}
          </motion.p>

          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              {name}
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 bg-gradient-to-r from-violet-400/90 to-fuchsia-400/90 bg-clip-text text-lg font-medium text-transparent sm:text-xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            {role}
          </motion.p>

          <motion.div
            className="mt-6 h-px w-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 md:mx-0"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            aria-hidden
          />

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            {bio}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-violet-500/40"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition hover:border-violet-400/40 hover:bg-white/10"
            >
              联系我
            </a>
          </motion.div>
        </div>
        </div>
    </section>
  )
}
