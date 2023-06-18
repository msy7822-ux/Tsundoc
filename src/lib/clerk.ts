import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/dist/types/server";
import { cache } from "react";

export const getCurrentUser = cache(async (): Promise<User | null> => {
  const user = await currentUser();
  return user;
});
