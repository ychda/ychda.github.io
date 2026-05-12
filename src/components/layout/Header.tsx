'use client';
import Link from 'next/link';
import { useState } from 'react';

const navList = [
    { label: '首页', path: '/' },
    { label: '博客', path: '/posts' },
    { label: '友链', path: '/links' },
    { label: '关于', path: '/about' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
                    Hello, World!
                </Link>

                {/* 桌面端导航 */}
                <nav className="hidden md:flex items-center gap-6">
                    {navList.map(item => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 no-underline"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* 移动端菜单按钮 */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-900 dark:text-white text-xl"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* 移动端下拉菜单 */}
            {menuOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                    <div className="px-4 py-3 flex flex-col gap-3">
                        {navList.map(item => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setMenuOpen(false)}
                                className="py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 no-underline"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
