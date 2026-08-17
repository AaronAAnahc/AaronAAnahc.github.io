import { getCollection } from "astro:content";

export interface BlogPost {
  id: string;
  en?: any;
  zh?: any;
}

/** 读取 blog 集合，按 id 合并中英两版，并按日期倒序排列。 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await getCollection("blog");
  const ids = [...new Set(entries.map((e) => e.data.id))];
  return ids
    .map((id) => ({
      id,
      en: entries.find((e) => e.data.id === id && e.data.lang === "en"),
      zh: entries.find((e) => e.data.id === id && e.data.lang === "zh"),
    }))
    .sort((a, b) => (b.en?.data.date ?? "").localeCompare(a.en?.data.date ?? ""));
}
