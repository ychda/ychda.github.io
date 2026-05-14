'use client';
import {useState} from 'react';
import {linkList} from "@/lib/links";

export default function LinksPage() {
    const [search, setSearch] = useState('');

    // 搜索过滤（修复好了）
    const filteredLinks = linkList.filter(link => {
        const keywords = search.toLowerCase();
        return (
            link.title.toLowerCase().includes(keywords) ||
            (link.desc || '').toLowerCase().includes(keywords)
        );
    });

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">链接</h1>

            {/* 搜索框 */}
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="搜索链接..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg
                    outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

            {/* 链接列表 */}
            <div className="grid gap-4 md:grid-cols-2">
                {filteredLinks.length === 0 ? (
                    <div className="py-10 text-center text-gray-500">
                        没有找到相关链接
                    </div>
                ) : (
                    filteredLinks.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 border rounded-xl hover:shadow-lg hover:border-blue-400 transition-all no-underline"
                        >
                            <h2 className="text-base font-medium text-gray-900">{item.title}</h2>
                            {item.desc && <p className="text-sm mt-2 text-gray-500">{item.desc}</p>}
                        </a>
                    ))
                )}
            </div>
        </div>
    );
}
