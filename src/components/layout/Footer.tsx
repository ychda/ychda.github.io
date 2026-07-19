// src/components/layout/Footer.tsx
export default function Footer() {
    return (
        <footer className="border-t mt-16 py-8 text-center text-gray-500 text-sm">
            <div className="max-w-4xl mx-auto px-4">
                <p>© 2026 <a href="https://github.com/ychda">@ychda</a> | 基于 豆包 搭建</p>
                <p className="mt-2">Powered by <del>Django + </del>Next.js + Tailwind CSS + Typescript</p>
            </div>
        </footer>
    );
}
