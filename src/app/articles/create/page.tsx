import { getCurrentUser } from "@/lib/clerk";

export default async function Articles() {
  const user = await getCurrentUser();

  return (
    <div>
      <div>{/* <CreateForm userId={user?.id ?? ""}></CreateForm> */}</div>
    </div>
  );
}
