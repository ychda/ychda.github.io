export interface LinkItem {
    title: string;
    url: string;
    desc?: string;
}

export const linkList: LinkItem[] = [
    {title: 'GitHub 个人主页', url: 'https://ychda.github.io', desc: '个人 GitHub 主页'},
    {title: 'GitHub', url: 'https://github.com/ychda', desc: '代码托管平台'},
    {title: 'Next.js 官网', url: 'https://nextjs.org', desc: 'React 服务端渲染框架'},
    {title: '掘金', url: 'https://juejin.cn', desc: '技术博客社区'},
    {title: 'TypeScript 官网', url: 'https://www.typescriptlang.org', desc: 'JS 类型系统'},
    {title: 'Tailwind CSS', url: 'https://tailwindcss.com', desc: '实用优先 CSS 框架'},
    {title: 'Vite', url: 'https://vite.dev/', desc: '下一代前端构建工具'},
    {title: 'Git 官方书籍', url: 'https://git-scm.com/book/zh/v2', desc: 'Git 中文官方教程'},
    {title: 'GitHub 账号', url: 'https://github.com/ychda', desc: 'GitHub 仓库主页'},
    {title: 'Kotlin', url: 'https://kotlinlang.org/', desc: 'Kotlin 编程语言官网'},
    {title: 'Django 文档', url: 'https://docs.djangoproject.com/zh-hans/5.0/', desc: 'Django 5.0 官方中文文档'},
    {title: 'Scrapy', url: 'https://scrapy.org/', desc: 'Python 爬虫框架'},
    {title: 'Node.js', url: 'https://nodejs.org/zh-cn', desc: 'Node.js 中文官网'},
    {title: 'VitePress', url: 'https://vitepress.vuejs.org/', desc: 'Vue 静态文档站点框架'},
    {title: 'MDN Web Docs', url: 'https://developer.mozilla.org/zh-CN/docs/Web', desc: '前端权威文档 MDN'},
    {title: 'Google Fonts', url: 'https://fonts.google.com/', desc: '谷歌免费字体库'},
    {title: '菜鸟教程', url: 'https://www.runoob.com/', desc: '编程入门教程网站'},
    {title: '百度前端技术学园', url: 'https://ife.baidu.com/', desc: '百度前端学习资源'},
    {title: 'Project Euler', url: 'https://projecteuler.net/archives', desc: '数学编程题库'},
    {title: 'LeetCode 国际版', url: 'https://leetcode.com/problemset/all/', desc: '算法刷题平台'},
    {
        title: 'The Big Read',
        url: 'https://en.wikipedia.org/wiki/The_Big_Read?wprov=sfla1',
        desc: 'BBC 百大阅读书单'
    },
    {title: 'Markdown 教程', url: 'https://markdown.com.cn/', desc: 'Markdown 语法中文教程'},
    {
        title: 'GitHub Markdown 文档',
        url: 'https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax',
        desc: 'GitHub Markdown 语法规范'
    },
    {title: 'vi 命令教程', url: 'https://www.cs.colostate.edu/helpdocs/vi.html', desc: 'vi 编辑器命令大全'},
    {title: 'Java 核心技术', url: 'https://horstmann.com/corejava/', desc: 'Java 经典书籍官网'},
    {title: 'Guido van Rossum', url: 'https://gvanrossum.github.io/', desc: 'Python 之父个人主页'},
    {title: '中国哲学书电子化计划', url: 'https://ctext.org/zh', desc: '古籍在线阅览平台'},
    {title: 'WolframAlpha', url: 'https://www.wolframalpha.com/', desc: '智能数学计算引擎'},
    {title: 'Hacking CPP', url: 'https://hackingcpp.com/', desc: 'C++ 进阶学习网站'},
    {title: 'Stylus', url: 'https://stylus-lang.com/', desc: 'CSS 预处理器'},
    {title: 'Compiler Explorer', url: 'https://godbolt.org/', desc: '在线汇编编译器'},
    {
        title: 'Photoshop 学习',
        url: 'https://helpx.adobe.com/cn/support/photoshop-china.html',
        desc: 'Adobe Photoshop 官方支持文档'
    },
    {title: 'Animate.css', url: 'https://animate.style/', desc: '常用 CSS 动画库'},
    {title: 'Apache ECharts', url: 'https://echarts.apache.org/zh/index.html', desc: '开源可视化图表库'},
    {title: 'Arduino 编程', url: 'https://docs.arduino.cc/programming/', desc: 'Arduino 开发文档'},
    {title: 'AutoCAD 命令', url: 'http://localhost:8000/autocad/', desc: 'AutoCAD 命令参考'},
    {title: 'BBC The Big Read', url: 'https://www.bbc.co.uk/arts/bigread/', desc: 'BBC 经典阅读推荐'},
    {title: 'Babel', url: 'https://babeljs.io/', desc: 'JavaScript 转译编译器'},
    {title: 'BootCDN', url: 'https://www.bootcdn.cn/', desc: '开源静态资源 CDN'},
    {title: 'Bootstrap Icons', url: 'https://icons.getbootstrap.com/', desc: 'Bootstrap 官方图标库'},
    {
        title: 'Bootstrap 布局',
        url: 'https://getbootstrap.com/docs/5.3/utilities/display/',
        desc: 'Bootstrap 工具类文档'
    },
    {
        title: 'Django 表单教程',
        url: 'https://www.twilio.com/blog/build-contact-form-python-django-twilio-sendgrid',
        desc: 'Django 联系表单开发'
    },
    {
        title: 'CSS 权威指南',
        url: 'https://meyerweb.github.io/csstdg4figs/index.html',
        desc: 'CSS 权威指南配图与资料'
    },
    {
        title: 'CSS 参考手册',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference',
        desc: 'MDN CSS 属性大全'
    },
    {title: 'CSS-Tricks', url: 'https://css-tricks.com/', desc: 'CSS 技巧与教程网站'},
    {
        title: 'CSS 钟表示例',
        url: 'https://css-tricks.com/creating-a-clock-with-the-new-css-sin-and-cos-trigonometry-functions/',
        desc: 'CSS 三角函数实现时钟'
    },
    {title: 'CodePen', url: 'https://codepen.io', desc: '前端在线代码演示'},
    {title: 'DevDocs', url: 'https://devdocs.io/', desc: '聚合 API 文档查阅'},
    {title: 'Django REST Framework', url: 'https://www.django-rest-framework.org/', desc: 'Django API 开发框架'},
    {title: 'Django 官方中文文档', url: 'https://docs.djangoproject.com/zh-hans/', desc: 'Django 全套中文文档'},
    {title: 'DjangoCentral', url: 'https://djangocentral.com/', desc: 'Django 教程资源站'},
    {
        title: 'DjangoGirls',
        url: 'https://github.com/DjangoGirls/djangogirls/tree/main',
        desc: 'Django 入门公益教程'
    },
    {title: 'ESLint', url: 'https://eslint.org/', desc: 'JavaScript 代码检查工具'},
    {title: 'EditPlus', url: 'https://www.editplus.com/index.html', desc: '轻量级代码编辑器'},
    {title: 'Eric A. Meyer', url: 'https://meyerweb.com/', desc: 'CSS 权威指南作者主页'},
    {title: '书籍分级阅读', url: 'https://bookroo.com/explore/books/lexile-levels', desc: 'Lexile 分级阅读书目'},
    {title: 'Freenode', url: 'https://freenode.me/f/freenode', desc: '开源社区 IRC 网络'},
    {title: 'GitHub Markdown 规范', url: 'https://github.github.com/gfm/', desc: 'GFM 标准规范'},
    {title: 'MDN 学习仓库', url: 'https://github.com/mdn/learning-area/tree/main', desc: 'MDN 前端示例代码'},
    {title: 'Grid 布局示例', url: 'https://gridbyexample.com/', desc: 'CSS Grid 实战教程'},
    {title: 'JSON 编解码文档', url: 'https://docs.python.org/3/library/json.html', desc: 'Python JSON 标准库'},
    {title: 'JSONPlaceholder', url: 'https://jsonplaceholder.typicode.com/guide/', desc: '免费模拟 JSON 接口'},
    {title: 'JSON.org', url: 'https://www.json.org/json-zh.html', desc: 'JSON 官方中文介绍'},
    {title: 'Lea Verou', url: 'https://lea.verou.me/', desc: 'CSS 技术大牛博客'},
    {title: '力扣 LeetCode', url: 'https://leetcode.cn/', desc: '国内算法刷题平台'},
    {title: 'Lorem Picsum', url: 'https://picsum.photos/', desc: '免费图片占位服务'},
    {title: 'MDN CSS 教程', url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS', desc: 'MDN CSS 完整教程'},
    {
        title: 'Django 本地库教程',
        url: 'https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Django',
        desc: 'MDN Django 入门'
    },
    {title: 'MSDN 我告诉你', url: 'https://msdn.itellyou.cn/', desc: '开发软件镜像下载'},
    {
        title: 'MASM 汇编',
        url: 'https://learn.microsoft.com/zh-cn/cpp/assembler/masm/directives-reference?view=msvc-170',
        desc: '微软宏汇编器文档'
    },
    {
        title: 'NASM 汇编入门',
        url: 'https://blog.csdn.net/qq_52300431/article/details/127397862',
        desc: 'NASM 汇编零基础教程'
    },
    {title: 'Next.js 文档', url: 'https://nextjs.org/docs', desc: 'Next.js 官方开发文档'},
    {
        title: 'Photoshop 快速入门',
        url: 'https://helpx.adobe.com/cn/photoshop/get-started.html',
        desc: 'PS 新手入门指南'
    },
    {title: 'Placehold 占位图', url: 'https://placehold.co/', desc: '简洁图片占位服务'},
    {title: 'ProjectEuler 题库', url: 'https://projecteuler.net/', desc: '数学编程挑战题库'},
    {title: 'Pygments', url: 'https://pygments.org/', desc: '代码语法高亮工具'},
    {title: 'Python Challenge', url: 'http://www.pythonchallenge.com/', desc: 'Python 解谜闯关'},
    {title: 'Python 官网', url: 'https://docs.python.org/zh-cn/3/', desc: 'Python 3 中文文档'},
    {title: 'RuTracker', url: 'https://rutracker.org/forum/index.php', desc: '资源索引论坛'},
    {title: 'Tailwind CSS', url: 'https://tailwindcss.com/', desc: '实用优先 CSS 框架'},
    {title: 'Vue.js', url: 'https://cn.vuejs.org/', desc: 'Vue 中文官网'},
    {title: 'W3Schools', url: 'https://www.w3schools.com/css/default.asp', desc: 'Web 入门教程站'},
    {title: 'Word Frequency', url: 'https://www.wordfrequency.info/', desc: '英语词频查询'},
    {
        title: 'Codecademy',
        url: 'https://www.codecademy.com/catalog/subject/web-development',
        desc: '在线交互式编程学习'
    },
    {
        title: 'Django 评论模型教程',
        url: 'https://tutorial-extensions.djangogirls.org/en/homework_create_more_models/',
        desc: 'Django 自定义模型开发'
    },
    {
        title: 'Django Markdown 教程',
        url: 'https://learndjango.com/tutorials/django-markdown-tutorial',
        desc: 'Django 集成 Markdown'
    },
    {
        title: 'django-mdeditor',
        url: 'https://pypi.org/project/django-mdeditor/',
        desc: 'Django Markdown 编辑器插件'
    },
    {
        title: 'djangocms-blog',
        url: 'https://djangocms-blog.readthedocs.io/en/latest/features/channels.html',
        desc: 'DjangoCMS 博客插件'
    },
    {
        title: '开源软件 FAQ',
        url: 'https://dodcio.defense.gov/Open-Source-Software-FAQ/',
        desc: '开源软件许可常见问题'
    },
    {title: 'EasyX', url: 'https://docs.easyx.cn/zh-cn/intro', desc: 'C++ 图形编程库'},
    {title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', desc: '免费全栈编程学习'},
    {
        title: 'freeCodeCamp 样式指南',
        url: 'https://design-style-guide.freecodecamp.org/',
        desc: '前端代码风格规范'
    },
    {
        title: 'Flexbox 完整指南',
        url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        desc: 'CSS Flexbox 布局教程'
    },
    {title: 'Flexbox 游戏', url: 'https://flexboxfroggy.com/', desc: '趣味游戏学习 Flexbox'},
    {title: 'Imgur 图床', url: 'https://imgur.com/', desc: '免费图片托管服务'},
    {
        title: 'Real Python Django 博客',
        url: 'https://realpython.com/python-django-blog/',
        desc: 'Django 博客开发实战教程'
    },
    {title: 'Scratch 编程', url: 'https://scratch.mit.edu/', desc: '少儿图形化编程平台'},
    {title: 'Stackblitz', url: 'https://stackblitz.com/', desc: '在线前端开发环境'},
    {title: 'HTML 转 JSX 工具', url: 'https://transform.tools/html-to-jsx', desc: '在线转换 HTML 为 JSX'},
    {title: 'Web.dev CSS 教程', url: 'https://web.dev/learn/css/', desc: '谷歌官方 CSS 学习指南'},
    {title: 'Web.dev HTML 教程', url: 'https://web.dev/learn/html/', desc: '谷歌官方 HTML 学习指南'},
    {title: '网页字体资源', url: 'https://web.mit.edu/jmorzins/www/fonts.html', desc: '经典 Web 字体参考'},
    {
        title: 'Whitenoise',
        url: 'https://whitenoise.readthedocs.io/en/stable/django.html#django-middleware',
        desc: 'Django 静态文件优化中间件'
    },
    {
        title: 'PS 资源教程',
        url: 'https://www.superso.top/Adobe/Adobe_Photoshop_2022.html',
        desc: 'Photoshop 资源合集与教程'
    },
    {title: '现代JavaScript教程', url: 'https://zh.javascript.info/', desc: '现代 JavaScript 中文教程'},
    {title: 'Medium', url: 'https://medium.com/', desc: '海外优质技术博客平台'},
    {title: 'React 中文官网', url: 'https://zh-hans.react.dev/', desc: 'React 官方中文文档'},
    {
        title: 'Stack Overflow',
        url: 'https://stackoverflow.com/questions/tagged/scrapy',
        desc: '全球技术问答社区'
    },
    {title: 'Toscrape', url: 'https://toscrape.com/', desc: '爬虫实战练习测试网站'},
    {title: 'Udemy', url: 'https://www.udemy.com/', desc: '海外精品在线课程平台'},
    {title: 'v2rayNG', url: 'https://github.com/2dust/v2rayNG/releases', desc: '安卓网络工具客户端'},
    {title: '应急管理部', url: 'https://cx.mem.gov.cn/', desc: '中华人民共和国应急管理部官网'},
    {
        title: '小学信息技术资源',
        url: 'https://www.pep.com.cn/xxjs/rjbxxjs/rjxxjswd/201909/t20190929_1945792.html',
        desc: '人教社信息技术配套资源下载'
    },
    {title: '人教社课本电子版', url: 'https://jc.pep.com.cn/', desc: '中小学教材电子版查阅'},
    {title: '侃单片机论坛', url: 'https://bbs.21ic.com/icfilter-typeid-11-211.html', desc: '单片机技术交流社区'},
    {title: '国芯论坛', url: 'https://www.stcaimcu.com/', desc: '国产芯片技术交流平台'},
    {
        title: '安信可开发工具',
        url: 'https://docs.ai-thinker.com/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B72',
        desc: '安信可模组开发官方资料'
    },
    {title: 'CAD 练习图', url: 'https://zhuanlan.zhihu.com/p/62979867', desc: '50 张常用 CAD 平面练习图纸'},
    {title: '微信读书', url: 'https://weread.qq.com/', desc: '腾讯微信读书平台'},
    {title: '数据结构与算法', url: 'https://c.biancheng.net/data_structure/', desc: '数据结构与算法入门教程'},
    {title: '新概念英语', url: 'https://www.runtoenglish.com/', desc: '新概念英语学习资源站点'},
    {title: '普中科技', url: 'http://www.prechin.cn/', desc: '单片机开发板厂商官网'},
    {
        title: '汇编语言教程',
        url: 'https://www.cainiaoya.com/assemblylanguage/assembly-language-introduction.html',
        desc: '汇编语言零基础入门教程'
    },
    {title: '深圳国芯人工智能', url: 'https://www.stcai.com/', desc: '国芯AI与芯片公司官网'},
    {title: 'IP 地址计算器', url: 'https://iiis.tsinghua.edu.cn/ip/', desc: '网络子网IP地址计算工具'},
    {
        title: 'Django 自定义模板标签',
        url: 'https://docs.djangoproject.com/zh-hans/5.2/howto/custom-template-tags/',
        desc: 'Django 模板标签与过滤器开发'
    },
    {title: '课程表作息表', url: 'https://ychda.github.io/yhz/2023b.html', desc: '在线课程表与作息时间表'},
    {
        title: '前端学习路线',
        url: 'https://developer.aliyun.com/learning/roadmap/frontend',
        desc: '阿里云前端工程师成长路线'
    },
];
