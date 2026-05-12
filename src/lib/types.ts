// 文章基础类型
export interface PostData {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    contentHtml: string;
}

// 导航项类型
export interface NavItem {
    label: string;
    path: string;
}
