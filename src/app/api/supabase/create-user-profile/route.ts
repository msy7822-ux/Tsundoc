import { auth } from "@clerk/nextjs";

export async function GET(_request: Request) {
  const { userId } = auth();

  console.log("GET userId", userId);
  return new Response(`created user id ${userId}`);
}
