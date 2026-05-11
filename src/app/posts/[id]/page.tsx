import { getPostData, getSortedPostsData, PostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        id: post.id,
    }));
}

// 👉 修复核心：给 params 加上 await
export default async function PostPage({
                                           params,
                                       }: {
    params: Promise<{ id: string }>;
}) {
    // 必须先 await params
    const { id } = await params;

    let post: PostData;

    try {
        post = await getPostData(id);
    } catch (error) {
        console.error(error);
        return notFound();
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 py-4">
            <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <div className="border-b my-6"></div>
            <div
                className="prose prose-blue max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
        </div>
    );
}
