import React from "react";
import { CreateBookButton } from "./_components/book/create-button";
import { getAllBooks } from "@/lib/supabase";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { data: books, error } = await getAllBooks();
  const { userId } = auth();

  // console.log(user);

  return (
    <main className="">
      <CreateBookButton isDisplay={!!userId} />
      {books?.map((book, i) => {
        return (
          <div key={i}>
            {book.id}
            {book.title}
            {book.name}
          </div>
        );
      })}
    </main>
  );
}
