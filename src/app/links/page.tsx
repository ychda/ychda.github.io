export default function LinksPage() {
    // 自定义你的常用链接
    const links = [
        {name: 'Next.js 官网', url: 'https://nextjs.org', desc: 'React 服务端渲染框架'},
        {name: 'GitHub', url: 'https://github.com', desc: '代码托管平台'},
        {name: '掘金', url: 'https://juejin.cn', desc: '技术博客社区'},
        {name: 'TypeScript 官网', url: 'https://www.typescriptlang.org', desc: 'JS 类型系统'},
        {name: 'Tailwind CSS', url: 'https://tailwindcss.com', desc: '实用优先 CSS 框架'},
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">常用链接</h1>
            <div className="grid gap-4 md:grid-cols-2">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 border rounded-lg hover:border-blue-400 transition-colors"
                    >
                        <h3 className="font-medium text-blue-600">{link.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{link.desc}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
