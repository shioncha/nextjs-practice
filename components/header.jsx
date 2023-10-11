import Link from "next/link";
import styles from '@/components/header.module.css'

export function Header() {
    return(
        <header className={styles.header}>
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
            </nav>
        </header>
    )
}