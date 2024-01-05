import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate,
} from "microcms-js-sdk";

//ブログの型定義
export type Blog = {
    id: string;
    title: string;
    content: string;
    eyecatch?: MicroCMSImage;
    category?: {
        id: string;
        name: string;
    };
} & MicroCMSDate;

export type Category = {
    id: string;
    name: string;
} & MicroCMSDate;

export type BlogList = {
    id: string;
    content: string;
    eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Blog>({
        endpoint: "blogs",
        queries: {
            filters: 'category[not_equals]page',
            limit: 10,
        },
    });

    return listData;
};

// ブログの詳細を取得
export const getDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Blog>({
        endpoint: "blogs",
        contentId,
        queries
    }) .catch((e) => { console.log(e); });

    return detailData;
};

// カテゴリー一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Category>({
        endpoint: "categories",
        queries: {
            filters: 'id[not_equals]page',
            limit: 10,
        },
    });

    return listData;
};

// カテゴリーの詳細を取得
export const getCategoryDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Category>({
        endpoint: "categories",
        contentId,
        queries,
    });

    return detailData;
};

// ブログ一覧を取得（RSS用）
export const getBlogList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getAllContents<Blog>({
        endpoint: "blogs",
        queries: {
            filters: 'category[not_equals]page',
        },
    });

    return listData;
};