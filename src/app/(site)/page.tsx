// src/app/(site)/posts/page.tsx
import {getSortedPostsData} from '@/lib/posts';
import PostCard from '@/components/blog/PostCard';

export default async function PostsPage() {
    const posts = await getSortedPostsData();

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">全部文章</h1>
            <div className="grid gap-6">
                {posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
        </div>
    );
}
