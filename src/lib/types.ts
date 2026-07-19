export interface PostData {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    contentHtml: string;
}

export interface NavItem {
    label: string;
    path: string;
}
