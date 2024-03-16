interface ArticleProp {
    id: number;
    title: string;
    excerpt: string;
    featuredImageUrl: string;
    createdAt: string;
    author: {
        name: string;
        imageUrl: string;
    };
};

export interface ArticleProps {
    article: ArticleProp
};

interface VlogCardProp {
    id: number;
    title: string;
    posterImageUrl: string;
    author: {
        name: string;
        imageUrl: string;
    };
    views: string;
    publishedAt: string;
};


export interface VlogCardProps {
    vlog: VlogCardProp;
}