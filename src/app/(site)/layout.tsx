import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '../globals.css';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: '我的个人博客',
    description: '使用 Next.js + Markdown 搭建的个人博客',
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh-CN">
        <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header/>
        <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-6">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
