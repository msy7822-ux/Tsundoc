import { authOptions } from "@/lib/auth/next-auth";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import { TopArticles } from "./_shared/template/top-articles";

export const revalidate = 60;

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main className="relative h-screen-without-header">
      <Suspense fallback={<>Loading...</>}>
        {/* @ts-expect-error Server Component */}
        <TopArticles></TopArticles>
      </Suspense>
    </main>
  );
}
