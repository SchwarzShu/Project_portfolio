/** 项目展示数据 */
export interface Project {
  id: string
  name: string
  description: string
  techStack: string[]
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    name: '个人作品集网站',
    description:
      '本项目是一个基于 React 19 与 TypeScript 开发的单页个人作品集网站，采用 Vite 8 构建与热更新、Tailwind CSS v4 实现深色主题及紫粉渐变视觉风格。页面按 Hero 首页、关于我、项目展示、联系方式等模块拆分为可复用函数式组件，通过锚点导航实现区块间平滑滚动；使用 Framer Motion 为首页与各板块配置入场及滚动触发动画。站点将个人简介、专业技能、个人评价与项目信息集中维护于 TypeScript 数据文件，实现内容与视图分离，便于后续增删与维护。整体采用响应式布局适配多端浏览，并集成思源黑体优化中文排版，配合 ESLint 保障代码质量。',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion'
    ],
  },
  {
    id: 'community',
    name: 'MagicShushu寻物平台',
    description:
      '本项目是一个面向校园的寻物信息交流平台，提供失物招领、寻物启事和物品交换服务，支持用户注册登录、发帖评论、点赞关注、私信互动等功能。平台通过邮件激活、验证码校验、密码加密与Session管理保障账户安全，内置敏感词过滤与内容审核机制。基于Redis实现高性能缓存与用户关系存储，集成Elasticsearch支持关键词搜索与热帖排序，通过Kafka异步处理实时通知，并使用Quartz定时更新数据，为用户提供流畅、安全的信息交互体验。',
    techStack: [
      'Spring Boot',
      'Spring Security',
      'MySQL',
      'Redis',
      'Caffeine',
      'Kafka',
      'Quartz',
      'Elasticsearch',
      'Spring Email',
      'Kaptcha',
      'MD5（加盐）',
    ],
  },
  {
    id: 'kanban',
    name: '任务看板系统',
    description:
        '本项目是基于Spring Boot与Vue 3构建的全栈任务看板系统，后端采用MyBatis-Plus实现数据持久化，通过JWT无状态认证、统一Result< T >返回结构及全局异常处理保障接口规范与安全，并利用自动填充机制简化元数据管理；前端基于Vite构建，使用Element Plus与Vue Router实现包含看板、任务、成员及评论在内的模块化单页应用，支持任务状态拖拽流转与基于Token的路由守卫控制，配套SQL脚本可实现快速部署与演示。',
    techStack: [
      'Spring Boot',
      'MyBatis-Plus',
      'MySQL',
      'JWT',
      'Vue 3',
      'Vite',
      'Vue Router',
      'Axios',
      'Element Plus',
    ],
  },
  {
    id: 'waimai',
    name: '校园订餐平台',
    description:
      '本项目是一个基于 Spring Boot 的校园订餐平台，提供在线点餐、购物车管理、订单支付与配送跟踪服务，支持用户浏览菜品、下单结算、地址管理、催单评价等功能。系统通过 JWT 令牌校验、MD5 密码加密与拦截器鉴权保障接口安全，内置阿里云 OSS 对象存储实现图片上传，并采用 Redis 缓存热点菜品数据提升访问性能。基于 WebSocket 实现客户端与服务端的双向通信以支持催单提醒，集成 Spring Task 定时处理超时订单，并通过 Nginx 反向代理与负载均衡优化请求分发，为商家和用户提供高效、稳定的订餐服务体验。',
    techStack: [
      'Spring Boot',
      'MyBatis-Plus',
      'MySQL',
      'Redis',
      'Nginx',
      'JWT',
      'WebSocket',
      'Spring Task',
    ],
  },
]
