// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface PostMeta {
    id: string;
    title: string;
    date: string;
}

export interface PostData extends PostMeta {
    contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), 'src/app/(site)/posts');

// ✅ 修复后的函数：过滤文件夹，只读取 .md 文件
export function getSortedPostsData(): PostMeta[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames
        .filter(fileName => {
            const fullPath = path.join(postsDirectory, fileName);
            return fs.statSync(fullPath).isFile() && fileName.endsWith('.md');
        })
        .map((fileName) => {
            const id = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                id,
                title: data.title as string,
                date: data.date as string,
            };
        });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);

    // 安全读取
    if (!fs.existsSync(fullPath)) {
        throw new Error('Post not found');
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        id,
        title: data.title as string,
        date: data.date as string,
        contentHtml,
    };
}
