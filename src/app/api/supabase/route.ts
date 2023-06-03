export async function GET(request: Request) {
  console.log("GET", request);
  return new Response("Hello, Next.js!");
}
