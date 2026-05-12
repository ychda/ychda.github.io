import Link from 'next/link';

interface PostCardProps {
    post: {
        id: string;
        title: string;
        date: string;
        excerpt?: string;
        tags?: string[];
    };
}

export default function PostCard({post}: PostCardProps) {
    return (
        <Link href={`/posts/${post.id}`} className="no-underline block">
            <div
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {post.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                    {post.excerpt || '快来阅读这篇文章吧~'}
                </p>

                {/* ✅ 安全判断：只有 tags 存在且是数组才渲染 map */}
                {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                    <div className="mt-4 flex gap-2 flex-wrap">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}
