import { Post } from './posts.interface';

export interface User{
    id: number;
    uname: string;
    pass: string;
    profile: {
        fname: string;
        mname: string;
        lname: string;
        email: string;
        mobile: number;
        bdate: number;
        interests: string[];
    };
    posts: Post[];
}
