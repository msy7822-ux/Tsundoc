// import { auth } from "@clerk/nextjs";
// import { getAuth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  // console.log(request.headers);
  const { data } = await request.json();
  console.log(data);
  // console.log(data["userId"]);

  return new Response(`created user id}`);
}
