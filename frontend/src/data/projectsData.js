export const projectCategories = ["learning", "research", "everyday"];

export const projects = [
  {
    id: "anki", category: "learning", repo: "anki-card-skills", image: "/projects/anki.png",
    name: { en: "From reading to remembering", zh: "从读过，到记得" },
    product: "Anki Card Skills",
    question: { en: "What makes an AI-generated card worth studying?", zh: "AI 生成的卡片，怎样才值得认真复习？" },
    problem: { en: "A useful idea in a PDF is easy to forget. Making good review cards takes another round of work.", zh: "PDF 里的好内容容易忘记，制作值得复习的卡片还需要额外花时间。" },
    decisions: {
      en: ["One recall target per card.", "Keep the source page beside the answer.", "Review content before exporting to Anki; preserve note identity on re-import."],
      zh: ["每张卡片围绕一个记忆目标。", "答案保留对应的原始页码。", "导出前审核内容，再次导入时保留卡片身份。"],
    },
    evidence: {
      en: "The included PDF produced 12 cards. A real Anki backend imported and re-imported them without duplicates. Content quality still needs a human review.",
      zh: "仓库中的 PDF 已生成 12 张卡片，通过真实 Anki 后端导入及再次导入，数量保持不变。内容质量仍需要人工审核。",
    },
    requirement: { en: "Python + Anki", zh: "需要 Python 和 Anki" },
  },
  {
    id: "forensics", category: "research", repo: "forensics", image: "/projects/forensics.png",
    name: { en: "What happened behind the chart?", zh: "图表背后，发生过什么？" },
    product: "Forensics",
    question: { en: "How can someone follow and check an AI research process?", zh: "怎样让等待 AI 研究的人看懂过程，也能够检查结果？" },
    problem: { en: "A chart shows movement. Understanding the events behind it needs sources, dates, and a research process people can follow.", zh: "价格图表显示变化，理解背后的事件还需要来源、日期，以及能够跟随的研究过程。" },
    decisions: {
      en: ["Preview the research request before generation.", "Show progress during a longer agent task.", "Keep the chart available to open or download, with a separate stock-data companion."],
      zh: ["生成前可以预览研究请求。", "较长的 Agent 任务提供过程状态。", "图表可以打开或下载，股票数据工具作为配套项目单独维护。"],
    },
    evidence: {
      en: "Sign-in, protected settings, and ticker validation were checked. The stock-data companion fetched real AAPL data and generated a chart. Full agent research needs your own model access and research Skill.",
      zh: "登录、受保护设置和股票代码检查已通过；配套工具已获取真实 AAPL 数据并生成图表。完整 Agent 研究需要自行配置模型与研究 Skill。",
    },
    requirement: { en: "Python + model access + research Skill", zh: "需要 Python、模型权限与研究 Skill" },
  },
  {
    id: "tripsplit", category: "everyday", repo: "tripsplit-wechat-miniprogram", showcase: true,
    name: { en: "Less calculating. More travelling.", zh: "少算一点账，多玩一会儿。" },
    product: "TripSplit · 喵喵旅账",
    question: { en: "Can a group settle shared expenses without the spreadsheet argument?", zh: "怎样让朋友分清旅行费用，也照顾一起旅行的心情？" },
    problem: { en: "One person pays for dinner, another skips an activity, and someone uses a different currency. The group still needs a fair answer.", zh: "有人垫付晚餐，有人没有参加活动，还有人使用不同币种。大家需要一个能够核对的计算结果。" },
    decisions: {
      en: ["Invite friends into the same trip; identify offline companions clearly.", "Keep the original amount, settlement currency, and saved exchange rate.", "Treat payment and receipt as separate confirmations; keep a record of who confirmed each step."],
      zh: ["邀请朋友加入同一旅程，清楚标明由他人代记的成员。", "保留原币金额、结算币种和账单保存时的汇率。", "付款与收款分别确认，并保留双方的确认记录。"],
    },
    evidence: { en: "Explore the product flow and the choices behind shared expenses. WeChat availability is not verified here.", zh: "展示旅行记账的使用流程，以及分摊与结算背后的产品选择。微信中的开放状态尚未核查。" },
    requirement: { en: "A WeChat mini program · product showcase", zh: "微信小程序 · 产品展示" },
  },
];

export const collections = [
  {
    id: "everyday", name: { en: "Everyday life", zh: "日常生活里的小问题" },
    description: { en: "Shared expenses and the small decisions that help people get on with their day.", zh: "从旅行费用开始，探索怎样让日常协作轻松一些。" },
    repos: ["tripsplit-wechat-miniprogram", "option-journal"],
  },
  {
    id: "research", name: { en: "Research & sensemaking", zh: "研究与理解" },
    description: { en: "Trace a chart, question a thesis, and make room for evidence.", zh: "理解图表、追问判断，并让证据有迹可循。" },
    repos: ["forensics", "stock-forensics-skill", "Market-News", "macro-research-pipeline", "buy-side-industry-ramp", "how-to-understand-a-industry", "grill-me-research", "storm-research", "us-tenbagger-stock-picker"],
  },
  {
    id: "learning", name: { en: "Learning & making", zh: "学习与创造" },
    description: { en: "Remember what matters, explore an idea, and make something others can use.", zh: "记住所学，探索想法，把东西做出来。" },
    repos: ["anki-card-skills", "goal-action-coach", "decompose-and-ask", "vibe-to-github", "ai-comic-production", "skill-master"],
  },
  {
    id: "conversations", name: { en: "Conversations & career", zh: "交流与职业探索" },
    description: { en: "Prepare thoughtful questions and learn from the conversation afterward.", zh: "认真准备问题，也从每次交流中继续学习。" },
    repos: ["coffee-chat-skills", "interview-skills"],
  },
];
