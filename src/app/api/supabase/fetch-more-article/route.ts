import { getArticles } from "@/lib/supabase";

export async function GET(request: Request) {
  const { data } = await request.json();
  const userId = data.id;
  await getArticles(userId);

  return new Response(`created user id}`);
}
