import styles from "./page.module.css";
import db from "./data.json";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        {db.articles.map((x) => (
          <li key={x.title}>{x.title}</li>
        ))}
      </ul>
    </main>
  );
}
