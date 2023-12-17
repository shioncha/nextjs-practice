export const dynamicParams = false;
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { getDetail, getList } from "@/libs/microcms";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function generateStaticParams() {
    const { contents } = await getList();

    const paths = contents.map((post) => {
        return {
            postId: post.id,
        };
    });

    return [...paths];
}

export default async function StaticDetailPage({
    params: { postId },
}: {
    params: { postId: string };
}) {
    const post = await getDetail(postId);

 // ページの生成された時間を取得
    const time = new Date().toLocaleString();

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>公開：{dayjs.utc(post.publishedAt).tz('Asia/Tokyo').format('YYYY年MM月DD日')}</p>
            <p>カテゴリー：{post.category.name}</p>
            <h2>{time}</h2>
            <div>{parse(post.content)}</div>
        </div>
    );
}