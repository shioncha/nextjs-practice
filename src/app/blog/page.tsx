import Link from "next/link";
import { getList } from "@/libs/microcms";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import styles from "./page.module.css";

dayjs.extend(utc);
dayjs.extend(timezone);

export default async function StaticPage() {
    const { contents } = await getList();

 // ページの生成された時間を取得
    const time = new Date().toLocaleString();

    if (!contents || contents.length === 0) {
        return <h1>No contents</h1>;
    }

    return (
        <div>
            
            <div>
                <ul className={styles.container}>
                {contents.map((post) => {
                    return (
                        <li key={post.id} className={styles.item}>
                            <Link href={`/blog/${post.id}`}>
                                <img src={post.eyecatch.url} className={styles.thumbnail} />
                                <p>
                                    <span className={styles.date}>{dayjs.utc(post.publishedAt).tz('Asia/Tokyo').format('YYYY.MM.DD')}</span>
                                    <span className={styles.category}>{post.category.name}</span>
                                </p>
                                <h1 className={styles.title}>{post.title}</h1>
                            </Link>
                        </li>
                    );
                })}
                </ul>
            </div>
        </div>
    );
}