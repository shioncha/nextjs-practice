import Link from 'next/link'
import styles from '@/components/header/header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <li>
        <ul><Link href="/">Home</Link></ul>
        <ul><Link href="/about">About</Link></ul>
        <ul><Link href="/blog/next-js-app-dir-tutorial">next-js-app-dir-tutorial</Link></ul>
      </li>
    </header>
  )
}
