import {getAllPostIds, getPostData} from '@/lib/posts';
import {notFound} from 'next/navigation';
import CodeHighlight from '@/components/blog/CodeHighlight';

// 静态生成文章路径（必须有，用于 GitHub Pages 部署）
export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths;
}

export default async function PostDetail({
                                             params,
                                         }: {
    params: Promise<{ id: string }>;
}) {
    const {id} = await params;

    // 先获取数据，不渲染 JSX
    let post;
    try {
        post = await getPostData(id);
    } catch (e) {
        return notFound();
    }

    // ✅ 把 JSX 移出 try/catch，ESLint 不报错
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
