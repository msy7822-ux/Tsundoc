import { currentUser } from "@clerk/nextjs";

export default async function Articles() {
  const user = await currentUser();

  return (
    <div>
      <div>{/* <CreateForm userId={user?.id ?? ""}></CreateForm> */}</div>
    </div>
  );
}
