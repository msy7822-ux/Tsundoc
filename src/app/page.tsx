import React from "react";
import { CreateBookButton } from "./_components/template/book/create-button";
import { currentUser } from "@clerk/nextjs";

export const metadata = {
  title: "TusnDoc",
  description: "「後で読もう」と思った記事を積読できるサービス",
};

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="">
      <CreateBookButton isDisplay={!!user} />
      {/* {books?.map((book, i) => {
        return (
          <div key={i}>
            {book.id}
            {book.title}
            {book.name}
          </div>
        );
      })} */}
    </main>
  );
}
