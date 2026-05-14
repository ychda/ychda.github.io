import {links} from "@/lib/links";

export default function LinksPage() {

    return (
        // <div className="space-y-6">
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold">常用链接</h1>
            <div className="grid gap-4 md:grid-cols-2">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 border rounded-lg hover:border-blue-400 transition-colors"
                    >
                        <h3 className="font-medium text-blue-600">{link.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
