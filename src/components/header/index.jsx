import Link from 'next/link'
import styles from '@/components/header/header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/"><h1>mixne.net</h1></Link>
      <ul className={styles.container}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog/next-js-app-dir-tutorial0">next-js-app-dir-tutorial0</Link></li>
        <li><Link href="/blog/next-js-app-dir-tutorial1">next-js-app-dir-tutorial1</Link></li>
      </ul>
    </header>
  )
}
