import { CreateForm } from "@/app/_components/template/book/create-form";
import { currentUser } from "@clerk/nextjs";

export default async function Book() {
  const user = await currentUser();

  return (
    <div>
      <div>
        <CreateForm userId={user?.id ?? ""}></CreateForm>
      </div>
    </div>
  );
}
