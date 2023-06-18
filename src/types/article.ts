import type { Database } from "./schema";

export type ArticleType = Database["public"]["Tables"]["articles"]["Row"];

// export type ArticleType = {
//   id: string;
//   title: string;
//   thumbnail: string;
//   url: string;
//   domain: string;
//   isCompleted: boolean;
//   accessCount: number;
//   storageUrl: string | null;
// };
