export interface Section {
    title: string;
    description: string;
}

export interface PostModel {
    title: string;  
    content: Section[];
}