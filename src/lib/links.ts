export interface LinkItem {
    title: string;
    url: string;
    description?: string;
}

export const links: LinkItem[] = [
    {title: 'GitHub 个人主页', url: 'https://ychda.github.io', description: '个人 GitHub 主页'},
    {title: 'GitHub', url: 'https://github.com/ychda', description: '代码托管平台'},
    {title: 'Next.js 官网', url: 'https://nextjs.org', description: 'React 服务端渲染框架'},
    {title: '掘金', url: 'https://juejin.cn', description: '技术博客社区'},
    {title: 'TypeScript 官网', url: 'https://www.typescriptlang.org', description: 'JS 类型系统'},
    {title: 'Tailwind CSS', url: 'https://tailwindcss.com', description: '实用优先 CSS 框架'},
    {title: 'Vite', url: 'https://vite.dev/', description: '下一代前端构建工具'},
    {title: 'Git 官方书籍', url: 'https://git-scm.com/book/zh/v2', description: 'Git 中文官方教程'},
    {title: 'GitHub 账号', url: 'https://github.com/ychda', description: 'GitHub 仓库主页'},
    {title: 'Kotlin', url: 'https://kotlinlang.org/', description: 'Kotlin 编程语言官网'},
    {title: 'Django 文档', url: 'https://docs.djangoproject.com/zh-hans/5.0/', description: 'Django 5.0 官方中文文档'},
    {title: 'Scrapy', url: 'https://scrapy.org/', description: 'Python 爬虫框架'},
    {title: 'Node.js', url: 'https://nodejs.org/zh-cn', description: 'Node.js 中文官网'},
    {title: 'VitePress', url: 'https://vitepress.vuejs.org/', description: 'Vue 静态文档站点框架'},
    {title: 'MDN Web Docs', url: 'https://developer.mozilla.org/zh-CN/docs/Web', description: '前端权威文档 MDN'},
    {title: 'Google Fonts', url: 'https://fonts.google.com/', description: '谷歌免费字体库'},
    {title: '菜鸟教程', url: 'https://www.runoob.com/', description: '编程入门教程网站'},
    {title: '百度前端技术学园', url: 'https://ife.baidu.com/', description: '百度前端学习资源'},
    {title: 'Project Euler', url: 'https://projecteuler.net/archives', description: '数学编程题库'},
    {title: 'LeetCode 国际版', url: 'https://leetcode.com/problemset/all/', description: '算法刷题平台'},
    {
        title: 'The Big Read',
        url: 'https://en.wikipedia.org/wiki/The_Big_Read?wprov=sfla1',
        description: 'BBC 百大阅读书单'
    },
    {title: 'Markdown 教程', url: 'https://markdown.com.cn/', description: 'Markdown 语法中文教程'},
    {
        title: 'GitHub Markdown 文档',
        url: 'https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax',
        description: 'GitHub Markdown 语法规范'
    },
    {title: 'vi 命令教程', url: 'https://www.cs.colostate.edu/helpdocs/vi.html', description: 'vi 编辑器命令大全'},
    {title: 'Java 核心技术', url: 'https://horstmann.com/corejava/', description: 'Java 经典书籍官网'},
    {title: 'Guido van Rossum', url: 'https://gvanrossum.github.io/', description: 'Python 之父个人主页'},
    {title: '中国哲学书电子化计划', url: 'https://ctext.org/zh', description: '古籍在线阅览平台'},
    {title: 'WolframAlpha', url: 'https://www.wolframalpha.com/', description: '智能数学计算引擎'},
    {title: 'Hacking CPP', url: 'https://hackingcpp.com/', description: 'C++ 进阶学习网站'},
    {title: 'Stylus', url: 'https://stylus-lang.com/', description: 'CSS 预处理器'},
    {title: 'Compiler Explorer', url: 'https://godbolt.org/', description: '在线汇编编译器'},
    {
        title: 'Photoshop 学习',
        url: 'https://helpx.adobe.com/cn/support/photoshop-china.html',
        description: 'Adobe Photoshop 官方支持文档'
    },
    {title: 'Animate.css', url: 'https://animate.style/', description: '常用 CSS 动画库'},
    {title: 'Apache ECharts', url: 'https://echarts.apache.org/zh/index.html', description: '开源可视化图表库'},
    {title: 'Arduino 编程', url: 'https://docs.arduino.cc/programming/', description: 'Arduino 开发文档'},
    {title: 'AutoCAD 命令', url: 'http://localhost:8000/autocad/', description: 'AutoCAD 命令参考'},
    {title: 'BBC The Big Read', url: 'https://www.bbc.co.uk/arts/bigread/', description: 'BBC 经典阅读推荐'},
    {title: 'Babel', url: 'https://babeljs.io/', description: 'JavaScript 转译编译器'},
    {title: 'BootCDN', url: 'https://www.bootcdn.cn/', description: '开源静态资源 CDN'},
    {title: 'Bootstrap Icons', url: 'https://icons.getbootstrap.com/', description: 'Bootstrap 官方图标库'},
    {
        title: 'Bootstrap 布局',
        url: 'https://getbootstrap.com/docs/5.3/utilities/display/',
        description: 'Bootstrap 工具类文档'
    },
    {
        title: 'Django 表单教程',
        url: 'https://www.twilio.com/blog/build-contact-form-python-django-twilio-sendgrid',
        description: 'Django 联系表单开发'
    },
    {
        title: 'CSS 权威指南',
        url: 'https://meyerweb.github.io/csstdg4figs/index.html',
        description: 'CSS 权威指南配图与资料'
    },
    {
        title: 'CSS 参考手册',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference',
        description: 'MDN CSS 属性大全'
    },
    {title: 'CSS-Tricks', url: 'https://css-tricks.com/', description: 'CSS 技巧与教程网站'},
    {
        title: 'CSS 钟表示例',
        url: 'https://css-tricks.com/creating-a-clock-with-the-new-css-sin-and-cos-trigonometry-functions/',
        description: 'CSS 三角函数实现时钟'
    },
    {title: 'CodePen', url: 'https://codepen.io', description: '前端在线代码演示'},
    {title: 'DevDocs', url: 'https://devdocs.io/', description: '聚合 API 文档查阅'},
    {title: 'Django REST Framework', url: 'https://www.django-rest-framework.org/', description: 'Django API 开发框架'},
    {title: 'Django 官方中文文档', url: 'https://docs.djangoproject.com/zh-hans/', description: 'Django 全套中文文档'},
    {title: 'DjangoCentral', url: 'https://djangocentral.com/', description: 'Django 教程资源站'},
    {
        title: 'DjangoGirls',
        url: 'https://github.com/DjangoGirls/djangogirls/tree/main',
        description: 'Django 入门公益教程'
    },
    {title: 'ESLint', url: 'https://eslint.org/', description: 'JavaScript 代码检查工具'},
    {title: 'EditPlus', url: 'https://www.editplus.com/index.html', description: '轻量级代码编辑器'},
    {title: 'Eric A. Meyer', url: 'https://meyerweb.com/', description: 'CSS 权威指南作者主页'},
    {title: '书籍分级阅读', url: 'https://bookroo.com/explore/books/lexile-levels', description: 'Lexile 分级阅读书目'},
    {title: 'Freenode', url: 'https://freenode.me/f/freenode', description: '开源社区 IRC 网络'},
    {title: 'GitHub Markdown 规范', url: 'https://github.github.com/gfm/', description: 'GFM 标准规范'},
    {title: 'MDN 学习仓库', url: 'https://github.com/mdn/learning-area/tree/main', description: 'MDN 前端示例代码'},
    {title: 'Grid 布局示例', url: 'https://gridbyexample.com/', description: 'CSS Grid 实战教程'},
    {title: 'JSON 编解码文档', url: 'https://docs.python.org/3/library/json.html', description: 'Python JSON 标准库'},
    {title: 'JSONPlaceholder', url: 'https://jsonplaceholder.typicode.com/guide/', description: '免费模拟 JSON 接口'},
    {title: 'JSON.org', url: 'https://www.json.org/json-zh.html', description: 'JSON 官方中文介绍'},
    {title: 'Lea Verou', url: 'https://lea.verou.me/', description: 'CSS 技术大牛博客'},
    {title: '力扣 LeetCode', url: 'https://leetcode.cn/', description: '国内算法刷题平台'},
    {title: 'Lorem Picsum', url: 'https://picsum.photos/', description: '免费图片占位服务'},
    {title: 'MDN CSS 教程', url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS', description: 'MDN CSS 完整教程'},
    {
        title: 'Django 本地库教程',
        url: 'https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Django',
        description: 'MDN Django 入门'
    },
    {title: 'MSDN 我告诉你', url: 'https://msdn.itellyou.cn/', description: '开发软件镜像下载'},
    {
        title: 'MASM 汇编',
        url: 'https://learn.microsoft.com/zh-cn/cpp/assembler/masm/directives-reference?view=msvc-170',
        description: '微软宏汇编器文档'
    },
    {
        title: 'NASM 汇编入门',
        url: 'https://blog.csdn.net/qq_52300431/article/details/127397862',
        description: 'NASM 汇编零基础教程'
    },
    {title: 'Next.js 文档', url: 'https://nextjs.org/docs', description: 'Next.js 官方开发文档'},
    {
        title: 'Photoshop 快速入门',
        url: 'https://helpx.adobe.com/cn/photoshop/get-started.html',
        description: 'PS 新手入门指南'
    },
    {title: 'Placehold 占位图', url: 'https://placehold.co/', description: '简洁图片占位服务'},
    {title: 'ProjectEuler 题库', url: 'https://projecteuler.net/', description: '数学编程挑战题库'},
    {title: 'Pygments', url: 'https://pygments.org/', description: '代码语法高亮工具'},
    {title: 'Python Challenge', url: 'http://www.pythonchallenge.com/', description: 'Python 解谜闯关'},
    {title: 'Python 官网', url: 'https://docs.python.org/zh-cn/3/', description: 'Python 3 中文文档'},
    {title: 'RuTracker', url: 'https://rutracker.org/forum/index.php', description: '资源索引论坛'},
    {title: 'Tailwind CSS', url: 'https://tailwindcss.com/', description: '实用优先 CSS 框架'},
    {title: 'Vue.js', url: 'https://cn.vuejs.org/', description: 'Vue 中文官网'},
    {title: 'W3Schools', url: 'https://www.w3schools.com/css/default.asp', description: 'Web 入门教程站'},
    {title: 'Word Frequency', url: 'https://www.wordfrequency.info/', description: '英语词频查询'},
    {
        title: 'Codecademy',
        url: 'https://www.codecademy.com/catalog/subject/web-development',
        description: '在线交互式编程学习'
    },
    {
        title: 'Django 评论模型教程',
        url: 'https://tutorial-extensions.djangogirls.org/en/homework_create_more_models/',
        description: 'Django 自定义模型开发'
    },
    {
        title: 'Django Markdown 教程',
        url: 'https://learndjango.com/tutorials/django-markdown-tutorial',
        description: 'Django 集成 Markdown'
    },
    {
        title: 'django-mdeditor',
        url: 'https://pypi.org/project/django-mdeditor/',
        description: 'Django Markdown 编辑器插件'
    },
    {
        title: 'djangocms-blog',
        url: 'https://djangocms-blog.readthedocs.io/en/latest/features/channels.html',
        description: 'DjangoCMS 博客插件'
    },
    {
        title: '开源软件 FAQ',
        url: 'https://dodcio.defense.gov/Open-Source-Software-FAQ/',
        description: '开源软件许可常见问题'
    },
    {title: 'EasyX', url: 'https://docs.easyx.cn/zh-cn/intro', description: 'C++ 图形编程库'},
    {title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', description: '免费全栈编程学习'},
    {
        title: 'freeCodeCamp 样式指南',
        url: 'https://design-style-guide.freecodecamp.org/',
        description: '前端代码风格规范'
    },
    {
        title: 'Flexbox 完整指南',
        url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        description: 'CSS Flexbox 布局教程'
    },
    {title: 'Flexbox 游戏', url: 'https://flexboxfroggy.com/', description: '趣味游戏学习 Flexbox'},
    {title: 'Imgur 图床', url: 'https://imgur.com/', description: '免费图片托管服务'},
    {
        title: 'Real Python Django 博客',
        url: 'https://realpython.com/python-django-blog/',
        description: 'Django 博客开发实战教程'
    },
    {title: 'Scratch 编程', url: 'https://scratch.mit.edu/', description: '少儿图形化编程平台'},
    {title: 'Stackblitz', url: 'https://stackblitz.com/', description: '在线前端开发环境'},
    {title: 'HTML 转 JSX 工具', url: 'https://transform.tools/html-to-jsx', description: '在线转换 HTML 为 JSX'},
    {title: 'Web.dev CSS 教程', url: 'https://web.dev/learn/css/', description: '谷歌官方 CSS 学习指南'},
    {title: 'Web.dev HTML 教程', url: 'https://web.dev/learn/html/', description: '谷歌官方 HTML 学习指南'},
    {title: '网页字体资源', url: 'https://web.mit.edu/jmorzins/www/fonts.html', description: '经典 Web 字体参考'},
    {
        title: 'Whitenoise',
        url: 'https://whitenoise.readthedocs.io/en/stable/django.html#django-middleware',
        description: 'Django 静态文件优化中间件'
    },
    {
        title: 'PS 资源教程',
        url: 'https://www.superso.top/Adobe/Adobe_Photoshop_2022.html',
        description: 'Photoshop 资源合集与教程'
    },
    {title: '现代JavaScript教程', url: 'https://zh.javascript.info/', description: '现代 JavaScript 中文教程'},
    {title: 'Medium', url: 'https://medium.com/', description: '海外优质技术博客平台'},
    {title: 'React 中文官网', url: 'https://zh-hans.react.dev/', description: 'React 官方中文文档'},
    {
        title: 'Stack Overflow',
        url: 'https://stackoverflow.com/questions/tagged/scrapy',
        description: '全球技术问答社区'
    },
    {title: 'Toscrape', url: 'https://toscrape.com/', description: '爬虫实战练习测试网站'},
    {title: 'Udemy', url: 'https://www.udemy.com/', description: '海外精品在线课程平台'},
    {title: 'v2rayNG', url: 'https://github.com/2dust/v2rayNG/releases', description: '安卓网络工具客户端'},
    {title: '应急管理部', url: 'https://cx.mem.gov.cn/', description: '中华人民共和国应急管理部官网'},
    {
        title: '小学信息技术资源',
        url: 'https://www.pep.com.cn/xxjs/rjbxxjs/rjxxjswd/201909/t20190929_1945792.html',
        description: '人教社信息技术配套资源下载'
    },
    {title: '人教社课本电子版', url: 'https://jc.pep.com.cn/', description: '中小学教材电子版查阅'},
    {title: '侃单片机论坛', url: 'https://bbs.21ic.com/icfilter-typeid-11-211.html', description: '单片机技术交流社区'},
    {title: '国芯论坛', url: 'https://www.stcaimcu.com/', description: '国产芯片技术交流平台'},
    {
        title: '安信可开发工具',
        url: 'https://docs.ai-thinker.com/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B72',
        description: '安信可模组开发官方资料'
    },
    {title: 'CAD 练习图', url: 'https://zhuanlan.zhihu.com/p/62979867', description: '50 张常用 CAD 平面练习图纸'},
    {title: '微信读书', url: 'https://weread.qq.com/', description: '腾讯微信读书平台'},
    {title: '数据结构与算法', url: 'https://c.biancheng.net/data_structure/', description: '数据结构与算法入门教程'},
    {title: '新概念英语', url: 'https://www.runtoenglish.com/', description: '新概念英语学习资源站点'},
    {title: '普中科技', url: 'http://www.prechin.cn/', description: '单片机开发板厂商官网'},
    {
        title: '汇编语言教程',
        url: 'https://www.cainiaoya.com/assemblylanguage/assembly-language-introduction.html',
        description: '汇编语言零基础入门教程'
    },
    {title: '深圳国芯人工智能', url: 'https://www.stcai.com/', description: '国芯AI与芯片公司官网'},
    {title: 'IP 地址计算器', url: 'https://iiis.tsinghua.edu.cn/ip/', description: '网络子网IP地址计算工具'},
    {
        title: 'Django 自定义模板标签',
        url: 'https://docs.djangoproject.com/zh-hans/5.2/howto/custom-template-tags/',
        description: 'Django 模板标签与过滤器开发'
    },
    {title: '课程表作息表', url: 'https://ychda.github.io/yhz/2023b.html', description: '在线课程表与作息时间表'},
    {
        title: '前端学习路线',
        url: 'https://developer.aliyun.com/learning/roadmap/frontend',
        description: '阿里云前端工程师成长路线'
    },
];
