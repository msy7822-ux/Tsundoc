import { ClerkProfileDetail } from "@/app/_components/users/template/clerk-profile-detail";
import { getCurrentUser } from "@/lib/clerk";
import { Suspense } from "react";
import "../../../styles/clerk-style.css";

export default async function UserDetailPage() {
  const user = await getCurrentUser();
  const accountInfo = user?.externalAccounts[0];

  // user?.phoneNumbers[0] ?? null

  return (
    <div>
      <Suspense fallback={<>loading...</>}>
        <ClerkProfileDetail
          profile={{
            emailAddress: accountInfo?.emailAddress ?? "",
            phoneNumber: user?.phoneNumbers[0]?.phoneNumber,
          }}
        ></ClerkProfileDetail>
      </Suspense>
    </div>
  );
}
