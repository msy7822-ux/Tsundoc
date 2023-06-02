import { UserDetail } from "@/app/_components/user/detail";

export default async function UserDetailPage() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <UserDetail></UserDetail>
    </div>
  );
}
