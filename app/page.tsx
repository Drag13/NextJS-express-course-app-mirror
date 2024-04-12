import { getAllArticles } from './db';
import styles from './page.module.css';
import { Like } from './shared/like';

export default async function Home() {
  const articles = await getAllArticles();
  return (
    <main className={styles.main}>
      <ul>
        {articles.map((x) => (
          <li key={x.title}>
            {x.title} <Like />
          </li>
        ))}
      </ul>
    </main>
  );
}
