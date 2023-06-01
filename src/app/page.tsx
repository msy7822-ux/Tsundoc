import React from "react";
import { CreateBookButton } from "./_components/book/create-button";
import { getAllBooks } from "@/lib/supabase";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const { data: books, error } = await getAllBooks();
  const user = await currentUser().catch((e) => null);

  // console.log(user);

  return (
    <main className="">
      <CreateBookButton></CreateBookButton>
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
