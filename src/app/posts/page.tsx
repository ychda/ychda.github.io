// src/app/posts/page.tsx
import {getSortedPostsData, PostMeta} from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
    title: '所有博客 | 我的个人博客',
};

export default function PostsPage() {
    // 获取所有博客
    const allPosts = getSortedPostsData();

    return (
        <div className="max-w-4xl mx-auto py-6 space-y-8">
            {/* 标题 */}
            <div className="text-center">
                <h1 className="text-3xl font-bold">所有博客</h1>
                <p className="text-gray-500 mt-2">记录学习与思考</p>
            </div>

            {/* 博客列表 */}
            <div className="space-y-4">
                {allPosts.length === 0 ? (
                    <p className="text-center text-gray-500 py-10">暂无博客文章</p>
                ) : (
                    allPosts.map((post: PostMeta) => (
                        <div
                            key={post.id}
                            className="p-5 border rounded-xl hover:shadow-md transition-all"
                        >
                            <Link href={`/posts/${post.id}`}>
                                <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 text-sm mt-2">{post.date}</p>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
