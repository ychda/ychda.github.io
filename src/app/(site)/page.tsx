import Link from 'next/link';
import {getSortedPostsData} from "@/lib/posts";

export default function Home() {
    // 获取所有博客，只取前5条
    const allPostsData = getSortedPostsData().slice(0, 5);

    return (
        <div className="space-y-8">
            {/*<section className="text-center py-8">*/}
            <section className="py-8">
                <h1 className="text-3xl font-bold mb-2">欢迎来到我的博客</h1>
                <p className="text-gray-600">记录学习、生活与技术思考</p>
            </section>

            {/* 最近博客列表 */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">最近发布</h2>
                <div className="space-y-4">
                    {allPostsData.map((post) => (
                        <div
                            key={post.id}
                            className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                        >
                            <Link href={`/posts/${post.id}`}>
                                <h3 className="text-xl font-medium text-blue-600">{post.title}</h3>
                                <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* 预留其他内容区域 */}
            <section className="py-6">
                <h2 className="text-2xl font-semibold mb-4">其他内容</h2>
                <p className="text-gray-600">这里可以添加分类、标签、项目展示等内容</p>
            </section>
        </div>
    );
}
