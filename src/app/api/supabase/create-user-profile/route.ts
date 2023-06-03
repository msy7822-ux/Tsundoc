export async function POST(request: Request) {
  const { data } = await request.json();
  const userId = data.id;

  return new Response(`created user id}`);
}
