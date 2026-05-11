import {getPostData, getSortedPostsData, PostData} from '@/lib/posts';
import {notFound} from 'next/navigation';
import CodeHighlight from '@/components/CodeHighlight';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({id: post.id}));
}

export default async function PostPage({
                                           params,
                                       }: {
    params: Promise<{ id: string }>;
}) {
    const {id} = await params;
    let post: PostData;

    try {
        post = await getPostData(id);
    } catch (error) {
        console.error(error);
        return notFound();
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
            <p className="text-gray-500 mb-8">{post.date}</p>
            <div className="border-b border-gray-200 mb-8"/>

            <div
                className="prose-markdown"
                dangerouslySetInnerHTML={{__html: post.contentHtml}}
            />

            {/* 高亮组件 */}
            <CodeHighlight/>
        </div>
    );
}
