/* =========================================================
   ✏️ 以后更新个人主页，主要修改这个文件即可。
   en = 英文，zh = 中文；不用修改其它文件。
   添加项目：复制 projects 数组中的一个 { ... } 对象。
   ========================================================= */
window.SITE_CONTENT = {
  // 1. 基本信息
  name: 'Xiaoning Zhao',
  nameZh: '', // 中文姓名（不确定可以留空，网页会显示英文名）
  initials: 'XZ',
  // 个人照片：在项目放入 avatar.jpg，再改为 'avatar.jpg'；不使用就留空
  avatar: '',
  email: 'xiaoningzzz@163.com',
  github: 'https://github.com/xiaoningzzz',

  position: {
    en: 'M.S. Student in Software Engineering',
    zh: '软件工程专业 · 硕士研究生'
  },
  university: { en: 'Nankai University', zh: '南开大学' },

  // 2. 自我介绍：数组里的每一项都是一段文字
  about: {
    en: [
      "Hello! I'm Xiaoning Zhao, a master's student in Software Engineering at Nankai University. My research interests lie at the intersection of software engineering and artificial intelligence, particularly code search and retrieval, multimodal learning, and large language models (LLMs).",
      "I'm interested in how representation learning and language models can help researchers and developers better understand, search, and work with software and multimodal information."
    ],
    zh: [
      '你好！我是 Xiaoning Zhao，目前在南开大学攻读软件工程硕士学位。我的研究兴趣位于软件工程与人工智能的交叉领域，主要包括代码搜索与检索、多模态学习以及大语言模型（LLM）。',
      '我关注如何利用表示学习与语言模型，帮助研究人员和开发者更好地理解、检索和利用软件及多模态信息。'
    ]
  },

  // 3. 研究方向：可以增删，编号自动生成
  research: [
    {
      area: 'SE',
      title: { en: 'Code Search & Retrieval', zh: '代码搜索与检索' },
      description: {
        en: 'Semantic code search, code representations, and retrieval methods for software engineering.',
        zh: '面向软件工程的语义代码搜索、代码表示与检索方法。'
      }
    },
    {
      area: 'ML',
      title: { en: 'Multimodal Learning', zh: '多模态学习' },
      description: {
        en: 'Learning from and aligning information across text, images, and other modalities.',
        zh: '跨文本、图像等模态的信息学习、表示与对齐。'
      }
    },
    {
      area: 'AI',
      title: { en: 'Large Language Models', zh: '大语言模型' },
      description: {
        en: 'LLM reasoning, adaptation, and applications to software-related tasks.',
        zh: '大语言模型的推理、适配与软件工程任务应用。'
      }
    }
  ],

  // 4. 教育经历
  education: [
    {
      school: { en: 'Nankai University', zh: '南开大学' },
      degree: { en: "Master's Student · Software Engineering", zh: '软件工程 · 硕士研究生' },
      years: '2026.09 - 2029.6' // 可填 '2025 – Present'；未确认时留空
    },
    {
      school: { en: 'Hebei University of Technology', zh: '河北工业大学' },
      degree: { en: "Graduate Student · Artificial Intelligence", zh: '人工智能 · 本科生' },
      years: '2023.09 - 2026.06' // 可填 '2025 – Present'；未确认时留空
    },
    {
      school: { en: 'Hebei University of Technology', zh: '河北工业大学' },
      degree: { en: "Graduate Student · Environmental Engineering", zh: '环境工程 · 本科生' },
      years: '2022.09 - 2023.06' // 可填 '2025 – Present'；未确认时留空
    }
  ],

  // 5. 项目：每增加一个项目，就复制一个完整的 { ... } 条目
  projects: [
    {
      name: 'Multi-Modal-AI',
      url: 'https://github.com/xiaoningzzz/Multi-Modal-AI',
      description: {
        en: 'Coursework and experiments exploring multimodal AI, fusion methods, model adaptation, reinforcement learning, and AI agents.',
        zh: '多模态人工智能相关的课程实践与实验，涵盖融合方法、模型适配、强化学习和 AI 智能体等主题。'
      },
      tags: ['Multimodal AI', 'VLM', 'LLM']
    }
  ],

  // 6. 论文：目前没有提供，保持 [] 就不会显示 Publications 模块
  // 日后可填：{ title: 'Paper title', authors: '...', venue: '...', year: '2027', url: 'https://...' }
  publications: [],

  // 7. 联系语
  contactText: {
    en: "I'm happy to connect with others interested in software engineering and AI research.",
    zh: '欢迎与我交流软件工程及人工智能相关研究。'
  }
};
