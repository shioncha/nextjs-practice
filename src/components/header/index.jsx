import Link from 'next/link'
import styles from '@/components/header/header.module.css'
import { getCategoryList } from '@/libs/microcms'

export async function Header() {
  const { contents } = await getCategoryList();
  
  return (
    <header className={styles.header}>
      <Link href="/"><h1>mixne.net</h1></Link>
      <ul className={styles.container}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog/test">Test</Link></li>
        {contents.map((content) => (
          <li key={content.id}>
            <Link href={`/category/${content.id}`}>{content.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
