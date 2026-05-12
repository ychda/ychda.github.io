import {getSortedPostsData} from '@/lib/posts';
import Link from 'next/link';

// 强制定义类型
interface PostMeta {
    id: string;
    title: string;
    date: string;
    contentHtml?: string;
}

export default async function PostsPage() {
    // 🔥 核心修复：无论如何都保证是数组！！！
    const data = await getSortedPostsData();
    const allPosts: PostMeta[] = Array.isArray(data) ? data : [];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">博客列表</h1>

            {allPosts.length === 0 ? (
                <div className="py-12 text-center text-gray-500">
                    暂无文章
                </div>
            ) : (
                <div className="grid gap-4">
                    {allPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/posts/${post.id}`}
                            className="block p-6 border rounded-xl hover:shadow-md hover:border-blue-400 transition-all"
                        >
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-gray-500 mt-1 text-sm">{post.date}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
