import Link from 'next/link';

export default function Header() {
    return (
        <header className="border-b">
            <div className="max-w-4xl mx-auto p-4 md:p-6 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Hello, World!
                </Link>
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-blue-600">首页</Link>
                    <Link href="/posts" className="hover:text-blue-600">所有博客</Link>
                    <Link href="/links" className="hover:text-blue-600">常用链接</Link>
                    <Link href="/about" className="hover:text-blue-600">关于我</Link>
                </nav>
            </div>
        </header>
    );
}
