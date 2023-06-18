import { Suspense } from "react";

export const metadata = {
  title: "TusnDoc",
  description: "「後で読もう」と思った記事を積読できるサービス",
};

export const revalidate = 60;

export default async function Home() {
  return (
    <main className="relative">
      <>sss</>
      <Suspense fallback={<>Loading...</>}>
        {/* <TopArticles></TopArticles> */}
      </Suspense>
    </main>
  );
}
