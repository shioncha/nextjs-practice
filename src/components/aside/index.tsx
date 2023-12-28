import Link from "next/link";
import styles from "./aside.module.css";
import { SiRss, SiFeedly, SiTwitter } from "@icons-pack/react-simple-icons";

export function Aside() {
    return (
        <aside className={styles.aside}>
            <div className={styles.toc}>
                <p className={styles.title}>目次</p>
                <ol>
                    <li>aa</li>
                    <li>aa</li>
                    <li>aa</li>
                </ol>
            </div>
            <div>
                <p className={styles.title}>Follow</p>
                <ul className={styles.icons}>
                    <li>
                        <Link href="/rss">
                            <div className={styles.icon}>
                                <SiRss color="default" size={24}/>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <a href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fmixne.hatenablog.com%2Ffeed" target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}>
                                <SiFeedly color="default" size={24}/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={"https://twitter.com/mixnenet"} target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}>
                                <SiTwitter color="default" size={24} />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}