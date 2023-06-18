import { Suspense } from "react";

export default async function UserDetailPage() {
  return (
    <div>
      <Suspense fallback={<>loading...</>}></Suspense>
    </div>
  );
}
