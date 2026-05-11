'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="border-b relative">
            <div className="max-w-4xl mx-auto p-4 md:p-6 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Hello, World!
                </Link>

                {/* 电脑端导航 */}
                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="hover:text-blue-600">首页</Link>
                    <Link href="/posts" className="hover:text-blue-600">博客</Link>
                    <Link href="/links" className="hover:text-blue-600">链接</Link>
                    <Link href="/about" className="hover:text-blue-600">关于</Link>
                </nav>

                {/* 手机端按钮 */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-xl"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* 手机端展开菜单 */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t p-4 space-y-3 bg-white">
                    <Link
                        href="/"
                        className="block hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        首页
                    </Link>
                    <Link
                        href="/posts"
                        className="block hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        博客
                    </Link>
                    <Link
                        href="/links"
                        className="block hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        链接
                    </Link>
                    <Link
                        href="/about"
                        className="block hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        关于
                    </Link>
                </div>
            )}
        </header>
    );
}
