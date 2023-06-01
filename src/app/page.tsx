import React from "react";
import { CreateBookButton } from "./_components/book/create-button";
import { getAllBooks, getUsers } from "@/lib/supabase";

export default async function Home() {
  const { data: books, error } = await getAllBooks();
  const { data: users } = await getUsers();

  console.log("users -> ", users);

  return (
    <main className="">
      <CreateBookButton isDisplay={true} />
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
