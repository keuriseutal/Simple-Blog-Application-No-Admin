import { User } from './users.interface';

export interface Post{
    postId: number;
    title: string;
    subtitle?: string;
    author: User;
    category: string;
    date: number;
    body: string;
}
