export default function Footer() {
    return (
        <footer className="border-t py-4 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} 我的个人博客 | 基于 Next.js 构建</p>
        </footer>
    );
}
