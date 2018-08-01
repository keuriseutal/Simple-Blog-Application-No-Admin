
export interface Post{
    id: number;
    title: string;
    subtitle?: string;
    author: string;
    category: string;
    date: string;
    body: string;
    isDraft: boolean;
}
