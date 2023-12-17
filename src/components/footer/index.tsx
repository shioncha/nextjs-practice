import styles from '@/components/footer/footer.module.css'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.navigation}>
                <ul>
                    <li><Link href="/about">このサイトについて</Link></li>
                    <li><Link href="/contact">お問い合わせ</Link></li>
                    <li><Link href="/privacy">プライバシーポリシー</Link></li>
                </ul>
            </div>
            <p>&copy; 2023 mixne</p>
        </footer>
    )
}