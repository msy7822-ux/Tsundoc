import { currentUser } from "@clerk/nextjs";
import { ClerkProfileDetail } from "@/app/_components/template/user/clerk-profile-detail";
import { Suspense } from "react";
import React from "react";
import "../../../styles/clerk-style.css";

export default async function UserDetailPage() {
  const user = await currentUser();
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
