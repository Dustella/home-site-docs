export const SITE = {
  title: "DrSHW的书架",
  description:
    "这里是DrSHW的书架，存放着学习工作之余写的一些教程和笔记，当然还有一些小项目。",
  defaultLanguage: "zh_CN",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  分类: "main",
  Python语法基础: "pb",
  Python网络编程: "pw",
  Python科学计算: "ps",
  操作系统: "os",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/DrSHW/home-site-docs/tree/master`;

export const COMMUNITY_INVITE_URL = `https://github.com/maiqu-magicians`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "library",
  appId: "AMR2PVRHUM",
  apiKey: "64d1eb892bfc387bf0c01d7ff16fb240",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  main: {
    使用指南: [
      { text: "欢迎光临DrSHW的书架!", link: "main/introduction" },
      { text: "动态", link: "main/news" },
      { text: "隐私政策", link: "main/policy" },
    ],
    一些小项目: [
      { text: "CMM Compiler(建设中)", link: "poj/CMM" },
      { text: "PC小程序解密逆向工具", link: "poj/PC_miniprogram_decrypter" },
      { text: "魔塔(Tower of the Sorcerer) 小游戏", link: "poj/tos" },
    ],
  },
  pb: {
    Python语法基础: [
      { text: "Python简介", link: "pb/introduction" },
      { text: "变量、注释与用户交互", link: "pb/primary/01" },
      {
        text: "变量的基本类型概述、变量的id与变量的删除",
        link: "pb/primary/02",
      },
      { text: "基本数据类型——字符串类型", link: "pb/primary/03" },
      { text: "基本数据类型——数值类型、布尔类型与运算", link: "pb/primary/04" },
      { text: "基本数据类型——列表", link: "pb/primary/05" },
      { text: "基本数据类型——字典", link: "pb/primary/06" },
      { text: "基本数据类型——元组、集合与类型转换", link: "pb/primary/07" },
      { text: "控制流程", link: "pb/primary/08" },
      { text: "函数初步", link: "pb/primary/09" },
      { text: "函数高级", link: "pb/primary/10" },
      { text: "字符编码与内存读写", link: "pb/primary/11" },
      { text: "文件操作", link: "pb/primary/12" },
      { text: "异常", link: "pb/primary/13" },
    ],
    Python语法进阶: [
      { text: "面向对象基础", link: "pb/senior/1" },
      { text: "封装、继承和多态", link: "pb/senior/2" },
      { text: "面向对象高级", link: "pb/senior/3" },
      { text: "模块", link: "pb/senior/4" },
      { text: "迭代器与生成器", link: "pb/senior/5" },
      { text: "多任务——线程", link: "pb/senior/6" },
      { text: "多任务——进程", link: "pb/senior/7" },
      { text: "多任务——协程", link: "pb/senior/8" },
      { text: "Python 异步编程", link: "pb/senior/9" },
      { text: "池与concurrent模块", link: "pb/senior/10" },
    ],
    番外篇: [
      { text: "番外——Python中的类型标注", link: "pb/extra_1" },
      { text: "番外——内存管理与垃圾回收", link: "pb/extra_2" },
    ],
  },
  pw: {
    Python网络爬虫: [
      { text: "说在前面", link: "pw/introduction" },
      { text: "网络——UDP", link: "pw/spider/01" },
      { text: "网络——TCP", link: "pw/spider/02" },
      { text: "网络爬虫通讯原理", link: "pw/spider/03" },
      { text: "获取网站信息——httpx和request", link: "pw/spider/04" },
      { text: "多种方式数据解析", link: "pw/spider/05" },
      { text: "多种方式数据存储", link: "pw/spider/06" },
      { text: "基于进程线程协程的爬虫提速", link: "pw/spider/07" },
      { text: "seleium自动化工具的使用", link: "pw/spider/08" },
      { text: "Charles抓包工具的使用", link: "pw/spider/09" },
      { text: "Cookie反爬", link: "pw/spider/10" },
      { text: "文本混淆", link: "pw/spider/11" },
      { text: "验证码反爬初步", link: "pw/spider/12" },
    ],
    JS逆向专题: [
      { text: "说在前面", link: "pw/js_decryption/00" },
      { text: "JavaScript爬虫入门", link: "pw/js_decryption/01" },
      { text: "消息摘要签名算法", link: "pw/js_decryption/02" },
      { text: "对称加密算法", link: "pw/js_decryption/03" },
      { text: "非对称加密算法", link: "pw/js_decryption/04" },
      { text: "Webpack破解", link: "pw/js_decryption/05" },
      { text: "JavaScript混淆技术", link: "pw/js_decryption/06" },
      { text: "JS-RPC", link: "pw/js_decryption/07" },
    ],
    爬虫框架专题: [
      { text: "scrapy框架入门", link: "pw/structures/01" },
      { text: "scrapy框架进阶", link: "pw/structures/02" },
      { text: "scrapy-redis分布式", link: "pw/structures/03" },
      { text: "feapder框架入门", link: "pw/structures/04" },
    ],
    番外篇: [
      {
        text: "番外——TCP三次握手与四次挥手，你想知道的都在这",
        link: "pw/extra_1",
      },
      { text: "番外——Redis的使用", link: "pw/extra_2" },
    ],
  },
  ps: {
    Python数据分析: [
      { text: "科学计算库numpy", link: "ps/data_analysis/01" },
      { text: "数据分析工具pandas与其基本使用", link: "ps/data_analysis/02" },
      { text: "pandas数据预处理", link: "ps/data_analysis/03" },
      { text: "pandas数据聚合与分组运算", link: "ps/data_analysis/04" },
      { text: "pandas时间序列", link: "ps/data_analysis/05" },
      { text: "数据可视化matplotlib", link: "ps/data_analysis/06" },
    ],
    Python机器学习: [
      { text: "机器学习简介", link: "ps/introduction" },
      {
        text: "线性回归介绍与单变量线性回归模型",
        link: "ps/machine_learning/01",
      },
    ],
  },
  os: {
    "第一章 操作系统概述": [
      { text: "1.1 操作系统的概念，功能和目标", link: "os/introduction" },
      { text: "1.2 操作系统的特征", link: "os/1/2" },
      { text: "1.3 操作系统的发展和分类", link: "os/1/3" },
      { text: "1.4 操作系统运行机制和体系结构", link: "os/1/4" },
      { text: "1.5 中断和异常", link: "os/1/5" },
      { text: "1.6 系统调用", link: "os/1/6" },
    ],
    "第二章 进程管理": [
      { text: "2.1 进程的描述与控制", link: "os/2/1" },
      { text: "2.2 进程同步", link: "os/2/2" },
    ],
  },
};
