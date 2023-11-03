import Link from 'next/link'
import styles from '@/components/header/header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <>
        <Link href="/"><h1>mixne.net</h1></Link>
        <li className={styles.container}>
          <ul><Link href="/">Home</Link></ul>
          <ul><Link href="/about">About</Link></ul>
          <ul><Link href="/blog/next-js-app-dir-tutorial0">next-js-app-dir-tutorial0</Link></ul>
          <ul><Link href="/blog/next-js-app-dir-tutorial1">next-js-app-dir-tutorial1</Link></ul>
        </li>
      </>
    </header>
  )
}
