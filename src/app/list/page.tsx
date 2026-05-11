// src/app/list/page.tsx
export default function ListPage() {
    const data = [
        { id: 1, title: "标题一", content: "内容一" },
        { id: 2, title: "标题二", content: "内容二" },
        { id: 3, title: "标题三", content: "内容三" },
    ];

    return (
        <div className="max-w-4xl mx-auto py-8 space-y-6">
            <h1 className="text-3xl font-bold">列表页面</h1>
            <div className="grid gap-4 md:grid-cols-2">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="border p-5 rounded-xl hover:shadow-md transition-shadow"
                    >
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-600">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
