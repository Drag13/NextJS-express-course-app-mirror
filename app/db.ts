import  db from "./data.json";

export async function getAllArticles(): Promise<typeof db.articles> {
  return new Promise((res) => setTimeout(() => res(db.articles), 500));
}
