import {getAllPostIds, getPostData} from '@/lib/posts';
import {notFound} from 'next/navigation';
import CodeHighlight from '@/components/blog/CodeHighlight';

// 静态生成
export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths;
}

// 👇 新增：动态 OG 图
export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ id: string }>;
}) {
    const {id} = await params;
    try {
        const post = await getPostData(id);
        // const ogImageUrl = `https://ogcdn.net/e32f9c6/${encodeURIComponent(post.title)}/https://ychda.github.io`;
        const ogImageUrl = `https://ogcdn.net/e32f9c6/${encodeURIComponent(post.title)}/https://ychda.github.io`;
        return {
            title: post.title,
            description: post.excerpt || '文章详情',
            openGraph: {
                title: post.title,
                description: post.excerpt || '文章详情',
                url: `https://ychda.github.io/posts/${post.id}`,
                images: [{url: ogImageUrl, width: 1200, height: 630}],
            },
        };
    } catch (e) {
        return {};
    }
}

export default async function PostDetail({
                                             params,
                                         }: {
    params: Promise<{ id: string }>;
}) {
    const {id} = await params;
    let post;

    try {
        post = await getPostData(id);
    } catch (e) {
        return notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-8">{post.date}</p>
            <div
                className="prose-markdown"
                dangerouslySetInnerHTML={{__html: post.contentHtml}}
            />
            <CodeHighlight/>
        </div>
    );
}
