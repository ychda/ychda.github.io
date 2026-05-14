import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: '个人技术博客',
    description: '使用 Next.js + Tailwind CSS 构建的博客',
    // 👇 全局默认 OG 图
    openGraph: {
        type: 'website',
        title: '个人技术博客',
        description: '使用 Next.js + Tailwind CSS 构建的博客',
        url: 'https://ychda.github.io',
        siteName: '个人技术博客',
        images: [
            {
                url: 'https://ychda.github.io/bg.png',
                width: 1200,
                height: 630,
                alt: '博客封面',
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh-CN" suppressHydrationWarning>
        <body className="antialiased">{children}</body>
        </html>
    );
}
