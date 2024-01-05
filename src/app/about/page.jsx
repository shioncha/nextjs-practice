import { notFound } from "next/navigation";
import parse from "html-react-parser";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { getDetail, getList } from "@/lib/microcms";
import styles from "./page.module.css";
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

export async function generateMetadata () {
    const postId = 'about';
    const post = await getDetail(postId);

    if (!post || !post.title) {
        return "Untitled";
    }

    return {
        title: post.title,
    };
}

export default async function StaticDetailPage() {
    const postId = 'about';
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
                        <ShareTree url={'https://mixne.net/' + postId} title={post.title}/>
                    </div>
                </div>
            </div>
            <div className={styles.article}>
                <img src={post.eyecatch.url} className={styles.thumbnail} />
                <h1>{post.title}</h1>
                <div>{parse(post.content)}</div>
                <p>最終更新：{dayjs.utc(post.updatedAt).tz('Asia/Tokyo').format('YYYY年MM月DD日')}</p>
            </div>
        </div>
    );
}