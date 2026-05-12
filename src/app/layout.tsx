// src/app/layout.tsx
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: '个人技术博客',
    description: '基于 Next.js + Tailwind CSS 构建',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh-CN" suppressHydrationWarning>
        <body className="antialiased">
        {children}
        </body>
        </html>
    );
}
