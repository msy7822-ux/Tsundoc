import { currentUser } from "@clerk/nextjs";
import { cache } from "react";

export const getCurrentUser = cache(async () => {
  const user = await currentUser();
  return user;
});
