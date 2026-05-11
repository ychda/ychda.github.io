export default function AboutPage() {
    return (
        <div className="space-y-6 max-w-2xl">
            <h1 className="text-3xl font-bold">关于我</h1>
            <div className="prose prose-blue max-w-none">
                <p>你好！我是一名前端开发者，热爱 Next.js、React、TypeScript 等现代化技术栈。</p>
                <p>这个博客使用 Next.js + Markdown + Tailwind CSS 搭建，用于记录我的学习笔记和技术分享。</p>
                <h3 className="text-xl font-semibold mt-4">本页面使用了</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>前端：React / Next.js / TypeScript / Tailwind CSS</li>
                    <li>工具：Git / WebStorm / Vite</li>
                    <li>其他：Node.js / Markdown</li>
                </ul>
                <h3 className="text-xl font-semibold mt-4">联系方式</h3>
                <p>邮箱：ychda@qq.com</p>
                <p>GitHub：<a href="https://github.com/ychda" target="_blank">@ychda</a></p>
            </div>
        </div>
    );
}
