// src/app/(site)/posts/page.tsx
import {getSortedPostsData} from '@/lib/posts';
import PostCard from '@/components/blog/PostCard';

export default async function PostsPage() {
    const posts = await getSortedPostsData();

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <section className="py-8">
                <h1 className="text-3xl font-bold mb-2">欢迎来到我的博客</h1>
                <p className="text-gray-600">记录学习、生活与技术思考</p>
            </section>
            <section className="py-6">
                <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">全部文章</h1>
                <div className="grid gap-6">
                    {posts.map(post => (
                        <PostCard key={post.id} post={post}/>
                    ))}
                </div>
            </section>
            <section className="py-6">
                <h2 className="text-2xl font-semibold mb-4">其他内容</h2>
                <p className="text-gray-600">这里可以添加分类、标签、项目展示等内容</p>
            </section>

        </div>
    );
}
