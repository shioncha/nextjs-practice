export const dynamicParams = false;
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { getDetail, getList } from "@/libs/microcms";
import styles from "./page.module.css";
import Link from "next/link";
import { ShareTree } from "@/components/share";

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

export async function generateMetadata ({
    params: { postId },
}: {
    params: { postId: string };
}) {
    const post = await getDetail(postId);

    if (!post || !post.title) {
        return "Untitled";
    }

    return {
        title: post.title,
    };
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
        <div className={styles.container}>
            <div className={styles.share0}>
                <div className={styles.share}>
                    <div className={styles.shareInner}>
                        <ShareTree url={'https://mixne.net/blog/' + postId} title={post.title}/>
                    </div>
                </div>
            </div>
            <div className={styles.article}>
                <img src={post.eyecatch.url} alt={post.eyecatch.alt} className={styles.thumbnail} />
                <h1>{post.title}</h1>
                <p>公開：{dayjs.utc(post.publishedAt).tz('Asia/Tokyo').format('YYYY年MM月DD日')}</p>
                <p>カテゴリー：<Link href={'/category/' + post.category.id}>{post.category.name}</Link></p>
                <div>{parse(post.content)}</div>
            </div>
            <aside className={styles.aside}>
                <h2>{time}</h2>
                <div>
                    <p className={styles.title}>目次</p>
                    <ol>
                        <li>aa</li>
                        <li>aa</li>
                        <li>aa</li>
                    </ol>
                </div>
                <div>
                    <p className={styles.title}>Follow</p>
                    <ul>
                        <li>RSS</li>
                        <li>Feedly</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}