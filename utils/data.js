const categories = [
  { id: 1, name: '家常菜', icon: '🍳' },
  { id: 2, name: '川菜', icon: '🌶️' },
  { id: 3, name: '湘菜', icon: '🥘' },
  { id: 4, name: '甜品', icon: '🍰' },
  { id: 5, name: '早餐', icon: '🍞' },
  { id: 6, name: '减脂', icon: '🥗' },
  { id: 7, name: '儿童餐', icon: '👶' },
  { id: 8, name: '粤菜', icon: '🦐' }
]

const banners = [
  { id: 1, image: 'https://picsum.photos/800/300?random=1', title: '新手厨师训练营' },
  { id: 2, image: 'https://picsum.photos/800/300?random=2', title: '夏季清凉食谱' },
  { id: 3, image: 'https://picsum.photos/800/300?random=3', title: '母亲节特惠' }
]

const recipes = [
  {
    id: 1,
    title: '红烧肉',
    image: 'https://picsum.photos/400/300?random=10',
    difficulty: '中等',
    time: '60分钟',
    taste: '咸甜',
    category: '家常菜',
    author: '美食达人',
    authorAvatar: 'https://picsum.photos/100/100?random=100',
    likes: 12580,
    favorites: 8960,
    views: 156000,
    suitable: '全家享用',
    ingredients: {
      main: [
        { name: '五花肉', amount: '500g' },
        { name: '姜片', amount: '10g' }
      ],
      auxiliary: [
        { name: '八角', amount: '2个' },
        { name: '桂皮', amount: '1小块' },
        { name: '香叶', amount: '2片' }
      ],
      seasoning: [
        { name: '生抽', amount: '2勺' },
        { name: '老抽', amount: '1勺' },
        { name: '冰糖', amount: '30g' },
        { name: '料酒', amount: '2勺' }
      ]
    },
    steps: [
      { order: 1, image: 'https://picsum.photos/400/300?random=11', description: '五花肉切成3厘米见方的块，冷水下锅焯水，撇去浮沫后捞出洗净备用。' },
      { order: 2, image: 'https://picsum.photos/400/300?random=12', description: '锅中放少许油，放入冰糖小火炒出糖色，注意不要炒糊。' },
      { order: 3, image: 'https://picsum.photos/400/300?random=13', description: '放入五花肉翻炒均匀，让每块肉都裹上糖色。' },
      { order: 4, image: 'https://picsum.photos/400/300?random=14', description: '加入姜片、八角、桂皮、香叶炒香，然后加入料酒、生抽、老抽翻炒。' },
      { order: 5, image: 'https://picsum.photos/400/300?random=15', description: '加入开水没过肉块，大火烧开后转小火炖50分钟。' },
      { order: 6, image: 'https://picsum.photos/400/300?random=16', description: '最后大火收汁，汤汁浓稠即可出锅。' }
    ],
    tips: [
      '五花肉要选择肥瘦相间的，口感更好',
      '炒糖色时一定要小火，避免糊锅发苦',
      '加水时要加热水，肉质才不会柴'
    ],
    pitfalls: [
      '不要用冷水炖肉，会使肉质变老',
      '收汁时不要离开，防止糊锅',
      '盐不要放太早，否则肉质不容易炖烂'
    ],
    videoUrl: ''
  },
  {
    id: 2,
    title: '麻婆豆腐',
    image: 'https://picsum.photos/400/300?random=20',
    difficulty: '简单',
    time: '20分钟',
    taste: '麻辣',
    category: '川菜',
    author: '川菜大师',
    authorAvatar: 'https://picsum.photos/100/100?random=101',
    likes: 9860,
    favorites: 6540,
    views: 98000,
    suitable: '喜欢辣味的人',
    ingredients: {
      main: [
        { name: '嫩豆腐', amount: '400g' },
        { name: '牛肉末', amount: '100g' }
      ],
      auxiliary: [
        { name: '蒜末', amount: '10g' },
        { name: '姜末', amount: '5g' },
        { name: '葱花', amount: '适量' }
      ],
      seasoning: [
        { name: '豆瓣酱', amount: '1勺' },
        { name: '花椒粉', amount: '1勺' },
        { name: '生抽', amount: '1勺' },
        { name: '水淀粉', amount: '适量' }
      ]
    },
    steps: [
      { order: 1, image: 'https://picsum.photos/400/300?random=21', description: '豆腐切成2厘米见方的块，放入加盐的开水中焯烫2分钟捞出。' },
      { order: 2, image: 'https://picsum.photos/400/300?random=22', description: '锅中放油，放入牛肉末炒散炒至变色。' },
      { order: 3, image: 'https://picsum.photos/400/300?random=23', description: '加入豆瓣酱、蒜末、姜末炒出红油。' },
      { order: 4, image: 'https://picsum.photos/400/300?random=24', description: '加入适量清水，放入豆腐块，加入生抽调味。' },
      { order: 5, image: 'https://picsum.photos/400/300?random=25', description: '小火炖煮5分钟让豆腐入味。' },
      { order: 6, image: 'https://picsum.photos/400/300?random=26', description: '淋入水淀粉勾芡，出锅前撒上花椒粉和葱花。' }
    ],
    tips: [
      '豆腐要用嫩豆腐，口感更嫩滑',
      '焯豆腐时加盐可以去豆腥味',
      '勾芡分两次进行，效果更好'
    ],
    pitfalls: [
      '豆腐不要用力翻炒，容易碎',
      '花椒粉最后放，麻香味更浓'
    ],
    videoUrl: ''
  },
  {
    id: 3,
    title: '剁椒鱼头',
    image: 'https://picsum.photos/400/300?random=30',
    difficulty: '中等',
    time: '30分钟',
    taste: '香辣',
    category: '湘菜',
    author: '湘菜名厨',
    authorAvatar: 'https://picsum.photos/100/100?random=102',
    likes: 8520,
    favorites: 5680,
    views: 89000,
    suitable: '朋友聚餐',
    ingredients: {
      main: [
        { name: '胖头鱼头', amount: '1个约1000g' },
        { name: '剁椒', amount: '150g' }
      ],
      auxiliary: [
        { name: '姜片', amount: '10g' },
        { name: '葱段', amount: '20g' },
        { name: '蒜末', amount: '20g' }
      ],
      seasoning: [
        { name: '料酒', amount: '2勺' },
        { name: '蒸鱼豉油', amount: '3勺' },
        { name: '食用油', amount: '适量' }
      ]
    },
    steps: [
      { order: 1, image: 'https://picsum.photos/400/300?random=31', description: '鱼头洗净，从中间劈开但不要切断，用料酒、盐腌制15分钟。' },
      { order: 2, image: 'https://picsum.photos/400/300?random=32', description: '盘底铺上姜片和葱段，放上鱼头。' },
      { order: 3, image: 'https://picsum.photos/400/300?random=33', description: '将剁椒均匀铺在鱼头上。' },
      { order: 4, image: 'https://picsum.photos/400/300?random=34', description: '水开后放入蒸锅，大火蒸12分钟。' },
      { order: 5, image: 'https://picsum.photos/400/300?random=35', description: '取出倒掉盘中汤汁，淋上蒸鱼豉油。' },
      { order: 6, image: 'https://picsum.photos/400/300?random=36', description: '撒上葱花，淋上热油激发香味。' }
    ],
    tips: [
      '鱼头要新鲜，蒸出来才鲜美',
      '蒸的时间不要太长，鱼肉会老',
      '最后淋的油要热，才能激发出香味'
    ],
    pitfalls: [
      '蒸好的汤汁要倒掉，否则太腥',
      '剁椒本身有咸味，注意控制盐量'
    ],
    videoUrl: ''
  },
  {
    id: 4,
    title: '提拉米苏',
    image: 'https://picsum.photos/400/300?random=40',
    difficulty: '困难',
    time: '120分钟',
    taste: '甜',
    category: '甜品',
    author: '甜品师',
    authorAvatar: 'https://picsum.photos/100/100?random=103',
    likes: 15680,
    favorites: 12300,
    views: 200000,
    suitable: '下午茶、甜点爱好者',
    ingredients: {
      main: [
        { name: '马斯卡彭奶酪', amount: '250g' },
        { name: '淡奶油', amount: '200ml' },
        { name: '手指饼干', amount: '200g' },
        { name: '蛋黄', amount: '3个' }
      ],
      auxiliary: [
        { name: '咖啡液', amount: '200ml' },
        { name: '可可粉', amount: '适量' }
      ],
      seasoning: [
        { name: '细砂糖', amount: '60g' },
        { name: '朗姆酒', amount: '1勺' }
      ]
    },
    steps: [
      { order: 1, image: 'https://picsum.photos/400/300?random=41', description: '蛋黄加糖隔水加热打发至颜色变浅、体积变大。' },
      { order: 2, image: 'https://picsum.photos/400/300?random=42', description: '马斯卡彭奶酪搅打顺滑，与蛋黄糊混合均匀。' },
      { order: 3, image: 'https://picsum.photos/400/300?random=43', description: '淡奶油打发至6分发，与奶酪糊混合。' },
      { order: 4, image: 'https://picsum.photos/400/300?random=44', description: '手指饼干快速蘸取咖啡酒液，铺在容器底部。' },
      { order: 5, image: 'https://picsum.photos/400/300?random=45', description: '铺上一层奶酪糊，再铺一层蘸好的饼干，重复操作。' },
      { order: 6, image: 'https://picsum.photos/400/300?random=46', description: '冷藏4小时以上，食用前筛上可可粉。' }
    ],
    tips: [
      '马斯卡彭奶酪要室温软化',
      '淡奶油不要打发过度',
      '冷藏时间越长，味道越好'
    ],
    pitfalls: [
      '手指饼干不要浸泡太久，会太软',
      '一定要冷藏足够时间再食用'
    ],
    videoUrl: ''
  },
  {
    id: 5,
    title: '三明治早餐',
    image: 'https://picsum.photos/400/300?random=50',
    difficulty: '简单',
    time: '15分钟',
    taste: '清淡',
    category: '早餐',
    author: '早餐达人',
    authorAvatar: 'https://picsum.photos/100/100?random=104',
    likes: 18900,
    favorites: 15600,
    views: 250000,
    suitable: '上班族、学生',
    ingredients: {
      main: [
        { name: '吐司片', amount: '4片' },
        { name: '鸡蛋', amount: '2个' },
        { name: '生菜', amount: '4片' },
        { name: '番茄', amount: '1个' }
      ],
      auxiliary: [
        { name: '火腿片', amount: '4片' },
        { name: '芝士片', amount: '2片' }
      ],
      seasoning: [
        { name: '沙拉酱', amount: '适量' },
        { name: '盐', amount: '少许' },
        { name: '黑胡椒', amount: '少许' }
      ]
    },
    steps: [
      { order: 1, image: 'https://picsum.photos/400/300?random=51', description: '鸡蛋煎成荷包蛋，撒上盐和黑胡椒。' },
      { order: 2, image: 'https://picsum.photos/400/300?random=52', description: '番茄洗净切片，生菜洗净沥干。' },
      { order: 3, image: 'https://picsum.photos/400/300?random=53', description: '吐司片放入烤箱或平底锅烤至两面金黄。' },
      { order: 4, image: 'https://picsum.photos/400/300?random=54', description: '在吐司上涂抹沙拉酱。' },
      { order: 5, image: 'https://picsum.photos/400/300?random=55', description: '依次放上火腿、芝士、生菜、番茄、煎蛋。' },
      { order: 6, image: 'https://picsum.photos/400/300?random=56', description: '盖上另一片吐司，对角切开即可。' }
    ],
    tips: [
      '吐司烤一下更香脆',
      '生菜要沥干水分，否则三明治会湿',
      '可以根据喜好添加其他食材'
    ],
    pitfalls: [
      '食材水分太多会影响口感',
      '煎蛋不要煎太老'
    ],
    videoUrl: ''
  },
  {
    id: 6,
    title: '鸡胸肉沙拉',
    image: 'https://picsum.photos/400/300?random=60',
    difficulty: '简单',
    time: '25分钟',
    taste: '清淡',
    category: '减脂',
    author: '健身教练',
    authorAvatar: 'https://picsum.photos/100/100?random=105',
    likes: 22000,
    favorites: 18500,
    views: 300000,
    suitable: '健身人群、减脂期',
    ingredients: {
      main: [
        { name: '鸡胸肉', amount: '200g' },
        { name: '生菜', amount: '100g' },
        { name: '紫甘蓝', amount: '50g' },
        { name: '小番茄', amount: '10个' }
      ],
      auxiliary: [
        { name: '黄瓜', amount: '1根' },
        { name: '玉米粒', amount: '50g' },
        { name: '牛油果', amount: '半个' }
      ],
      seasoning: [
        { name: '橄榄油', amount: '2勺' },
        { name: '柠檬汁', amount: '1勺' },
        { name: '黑胡椒', amount: '适量' },
        { name: '盐', amount: '少许' }
      ]
    },
    steps: [
      { order: 1, image: 'https://picsum.photos/400/300?random=61', description: '鸡胸肉用盐、黑胡椒腌制15分钟。' },
      { order: 2, image: 'https://picsum.photos/400/300?random=62', description: '平底锅放少许油，鸡胸肉煎至两面金黄熟透。' },
      { order: 3, image: 'https://picsum.photos/400/300?random=63', description: '各种蔬菜洗净，生菜撕片，紫甘蓝切丝，黄瓜切片，番茄对半切。' },
      { order: 4, image: 'https://picsum.photos/400/300?random=64', description: '玉米粒焯水煮熟。' },
      { order: 5, image: 'https://picsum.photos/400/300?random=65', description: '鸡胸肉放凉后撕成小块。' },
      { order: 6, image: 'https://picsum.photos/400/300?random=66', description: '所有食材放入碗中，淋上油醋汁拌匀即可。' }
    ],
    tips: [
      '鸡胸肉不要煎太久，保持嫩滑',
      '蔬菜要新鲜，口感更好',
      '油醋汁比例可根据口味调整'
    ],
    pitfalls: [
      '鸡胸肉煎过火会柴',
      '蔬菜水分要沥干，否则沙拉水水的'
    ],
    videoUrl: ''
  },
  {
    id: 7,
    title: '虾仁蒸蛋',
    image: 'https://picsum.photos/400/300?random=70',
    difficulty: '简单',
    time: '20分钟',
    taste: '鲜香',
    category: '儿童餐',
    author: '育儿达人',
    authorAvatar: 'https://picsum.photos/100/100?random=106',
    likes: 16800,
    favorites: 13200,
    views: 180000,
    suitable: '儿童、老人',
    ingredients: {
      main: [
        { name: '鸡蛋', amount: '3个' },
        { name: '鲜虾', amount: '6只' }
      ],
      auxiliary: [
        { name: '葱花', amount: '少许' },
        { name: '温水', amount: '200ml' }
      ],
      seasoning: [
        { name: '盐', amount: '少许' },
        { name: '生抽', amount: '1勺' },
        { name: '香油', amount: '几滴' }
      ]
    },
    steps: [
      { order: 1, image: 'https://picsum.photos/400/300?random=71', description: '鲜虾去壳去虾线，用少许盐腌制。' },
      { order: 2, image: 'https://picsum.photos/400/300?random=72', description: '鸡蛋打入碗中，加少许盐搅打均匀。' },
      { order: 3, image: 'https://picsum.photos/400/300?random=73', description: '加入1.5倍的温水，过筛两次去除气泡。' },
      { order: 4, image: 'https://picsum.photos/400/300?random=74', description: '盖上保鲜膜，水开后蒸8分钟。' },
      { order: 5, image: 'https://picsum.photos/400/300?random=75', description: '放入虾仁，继续蒸3分钟。' },
      { order: 6, image: 'https://picsum.photos/400/300?random=76', description: '出锅淋上生抽和香油，撒上葱花。' }
    ],
    tips: [
      '蛋水比例很重要，1:1.5最佳',
      '一定要过筛，蛋羹才细腻',
      '温水蒸蛋，不会有气孔'
    ],
    pitfalls: [
      '不要用热水，会把蛋烫熟',
      '火不要太大，否则表面会有蜂窝'
    ],
    videoUrl: ''
  },
  {
    id: 8,
    title: '蒜蓉西兰花',
    image: 'https://picsum.photos/400/300?random=80',
    difficulty: '简单',
    time: '15分钟',
    taste: '清淡',
    category: '家常菜',
    author: '健康饮食',
    authorAvatar: 'https://picsum.photos/100/100?random=107',
    likes: 11200,
    favorites: 8900,
    views: 120000,
    suitable: '全家享用',
    ingredients: {
      main: [
        { name: '西兰花', amount: '1朵' },
        { name: '大蒜', amount: '5瓣' }
      ],
      auxiliary: [],
      seasoning: [
        { name: '盐', amount: '适量' },
        { name: '蚝油', amount: '1勺' },
        { name: '食用油', amount: '适量' }
      ]
    },
    steps: [
      { order: 1, image: 'https://picsum.photos/400/300?random=81', description: '西兰花切成小朵，用淡盐水浸泡10分钟。' },
      { order: 2, image: 'https://picsum.photos/400/300?random=82', description: '大蒜切成蒜末。' },
      { order: 3, image: 'https://picsum.photos/400/300?random=83', description: '锅中烧水，加少许盐和油，西兰花焯水2分钟捞出。' },
      { order: 4, image: 'https://picsum.photos/400/300?random=84', description: '锅中放油，小火炒香蒜末。' },
      { order: 5, image: 'https://picsum.photos/400/300?random=85', description: '放入西兰花翻炒均匀。' },
      { order: 6, image: 'https://picsum.photos/400/300?random=86', description: '加入蚝油和少许盐调味，翻炒均匀即可。' }
    ],
    tips: [
      '西兰花用盐水浸泡可以去除虫卵',
      '焯水时加油和盐，颜色更翠绿',
      '不要炒太久，保持脆嫩口感'
    ],
    pitfalls: [
      '焯水时间过长会变黄变软',
      '蒜末不要炒糊'
    ],
    videoUrl: ''
  }
]

const babyFood = [
  {
    id: 1,
    title: '米粉糊',
    age: '6-8个月',
    image: 'https://picsum.photos/400/300?random=200',
    difficulty: '简单',
    time: '10分钟'
  },
  {
    id: 2,
    title: '南瓜泥',
    age: '6-8个月',
    image: 'https://picsum.photos/400/300?random=201',
    difficulty: '简单',
    time: '20分钟'
  },
  {
    id: 3,
    title: '胡萝卜泥',
    age: '6-8个月',
    image: 'https://picsum.photos/400/300?random=202',
    difficulty: '简单',
    time: '20分钟'
  },
  {
    id: 4,
    title: '蛋黄羹',
    age: '8-10个月',
    image: 'https://picsum.photos/400/300?random=203',
    difficulty: '简单',
    time: '15分钟'
  },
  {
    id: 5,
    title: '碎碎面',
    age: '8-10个月',
    image: 'https://picsum.photos/400/300?random=204',
    difficulty: '简单',
    time: '20分钟'
  },
  {
    id: 6,
    title: '肉末粥',
    age: '10-12个月',
    image: 'https://picsum.photos/400/300?random=205',
    difficulty: '中等',
    time: '40分钟'
  },
  {
    id: 7,
    title: '软饭配蔬菜',
    age: '12-18个月',
    image: 'https://picsum.photos/400/300?random=206',
    difficulty: '简单',
    time: '30分钟'
  },
  {
    id: 8,
    title: '小馄饨',
    age: '18-24个月',
    image: 'https://picsum.photos/400/300?random=207',
    difficulty: '中等',
    time: '60分钟'
  }
]

const authors = [
  { id: 1, name: '美食达人', avatar: 'https://picsum.photos/100/100?random=100', followers: 125000, recipes: 156 },
  { id: 2, name: '川菜大师', avatar: 'https://picsum.photos/100/100?random=101', followers: 98000, recipes: 89 },
  { id: 3, name: '湘菜名厨', avatar: 'https://picsum.photos/100/100?random=102', followers: 85000, recipes: 76 },
  { id: 4, name: '甜品师', avatar: 'https://picsum.photos/100/100?random=103', followers: 156000, recipes: 203 },
  { id: 5, name: '早餐达人', avatar: 'https://picsum.photos/100/100?random=104', followers: 189000, recipes: 178 }
]

const dailyPlan = {
  breakfast: [
    { id: 5, title: '三明治早餐', image: 'https://picsum.photos/400/300?random=50', time: '15分钟' }
  ],
  lunch: [
    { id: 1, title: '红烧肉', image: 'https://picsum.photos/400/300?random=10', time: '60分钟' },
    { id: 8, title: '蒜蓉西兰花', image: 'https://picsum.photos/400/300?random=80', time: '15分钟' }
  ],
  dinner: [
    { id: 6, title: '鸡胸肉沙拉', image: 'https://picsum.photos/400/300?random=60', time: '25分钟' }
  ]
}

const comments = [
  { id: 1, user: '小明', avatar: 'https://picsum.photos/100/100?random=300', content: '按照食谱做了，非常好吃！', time: '2小时前', likes: 28 },
  { id: 2, user: '美食爱好者', avatar: 'https://picsum.photos/100/100?random=301', content: '步骤很详细，第一次做就成功了', time: '5小时前', likes: 45 },
  { id: 3, user: '厨房新手', avatar: 'https://picsum.photos/100/100?random=302', content: '收藏了，周末试试', time: '1天前', likes: 12 }
]

module.exports = {
  categories,
  banners,
  recipes,
  babyFood,
  authors,
  dailyPlan,
  comments
}
