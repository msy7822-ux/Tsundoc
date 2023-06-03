// import { auth } from "@clerk/nextjs";
// import { getAuth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  console.log(request.headers);
  console.log(await request.json());

  // console.log("GET userId", userId);
  return new Response(`created user id}`);
}
