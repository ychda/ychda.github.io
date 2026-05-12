import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    try {
        if (!fs.existsSync(postsDirectory)) {
            return [];
        }

        const fileNames = fs.readdirSync(postsDirectory);
        const allPostsData = fileNames.map((fileName) => {
            const id = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const {data} = matter(fileContents);

            // 🔥 修复：这里必须返回 excerpt + tags，之前漏掉了！
            return {
                id,
                title: data.title || '无标题',
                date: data.date || '无日期',
                excerpt: data.excerpt || '',
                tags: data.tags || [],
            };
        });

        return allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1));
    } catch (e) {
        return [];
    }
}

export async function getPostData(id: string) {
    try {
        const fullPath = path.join(postsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const {data, content} = matter(fileContents);

        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return {
            id,
            title: data.title || '无标题',
            date: data.date || '无日期',
            excerpt: data.excerpt || '',
            tags: data.tags || [],
            contentHtml,
        };
    } catch (e) {
        throw new Error('not found');
    }
}

export function getAllPostIds() {
    try {
        if (!fs.existsSync(postsDirectory)) {
            return [];
        }
        const fileNames = fs.readdirSync(postsDirectory);
        return fileNames.map((fileName) => ({
            id: fileName.replace(/\.md$/, ''),
        }));
    } catch (e) {
        return [];
    }
}
