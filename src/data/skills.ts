/** 技能列表数据 */
export interface Skill {
  name: string
  description: string
}

export const skills: Skill[] = [
  {
    name: 'Java核心技术',
    description:
      '熟悉Java常用数据结构、I/O、反射、泛型及常用设计模式。理解JVM内存模型、垃圾回收机制与类加载过程，具备基础性能分析与调优能力',
  },
  {
    name: '数据结构与算法',
    description:
      '熟练掌握常用数据结构，对递归、双指针、单调栈、动态规划等算法有扎实理解，并能结合具体应用场景进行设计选型',
  },
  {
    name: '计算机基础',
    description:
      '熟悉计算机网络（TCP/IP、HTTP/HTTPS、TCP连接机制等）与操作系统（内存管理、进程通信、锁）核心原理',
  },
  {
    name: '数据库与缓存',
    description:
      '熟悉MySQL的使用及原理，对MySQL索引、MVCC、事务等有一定了解；熟悉Redis数据类型、持久化机制、内存淘汰策略，了解缓存穿透/击穿/雪崩及常见解决方案',
  },
  {
    name: '开发框架与工具',
    description:
      '熟练使用 SpringBoot3 + MyBatis-Plus 进行后端开发，理解 Spring IOC、AOP 核心思想。熟悉Linux常用命令，熟练使用Git、ApiFox、Maven等开发与项目管理工具',
  },
  {
    name: '分布式与微服务',
    description:
        '了解Spring Cloud微服务组件，包括服务注册与发现、负载均衡、服务调用、熔断机制与API网关；熟悉RabbitMQ消息队列的核心概念与应用，并对Kafka、RocketMQ等主流消息中间件有基本了解；了解分布式事务常见实现方式，如2PC、3PC、TCC及消息事务',
  },
  {
    name: 'AI辅助开发',
    description:
      '熟悉 Vibe Coding、Harness Engineering 等AI编程模式，具备 Prompt 工程优化能力，能使用 Claude Code 等AI工具辅助编码与项目开发',
  },
]
