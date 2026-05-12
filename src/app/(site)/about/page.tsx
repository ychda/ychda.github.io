export default function AboutPage() {
    return (
        // <div className="space-y-6 max-w-2xl">
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4">关于我</h1>
            <div className="prose prose-blue max-w-none">
                <p>这是最新的页面代码。</p>
                <p>这个博客使用 Next.js + Markdown + Tailwind CSS 搭建。</p>
                <h3 className="text-xl font-semibold mt-4 mb-3">本页面使用了</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>前端：React / Next.js / TypeScript / Tailwind CSS</li>
                    <li>工具：Git / WebStorm / Vite</li>
                    <li>其他：Node.js / Markdown</li>
                </ul>
                <h3 className="text-xl font-semibold mt-4 mb-3">联系方式</h3>
                <p>邮箱：ychda@qq.com</p>
                <p>GitHub：<a href="https://github.com/ychda" target="_blank">@ychda</a></p>
            </div>
        </div>
    );
}
