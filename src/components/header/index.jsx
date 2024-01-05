import Link from 'next/link'
import styles from '@/components/header/header.module.css'
import { getCategoryList } from '@/lib/microcms'

export async function Header() {
  const { contents } = await getCategoryList();
  
  return (
    <header className={styles.header}>
      <Link href="/"><h1>mixne.net</h1></Link>
      <ul>
        <li><Link href="/">Home</Link></li>
        {contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/category/${content.id}`}>{content.name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  )
}
