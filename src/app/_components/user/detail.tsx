import { convertProvider, convertProviderIcon } from "@/lib/provider";
import Image from "next/image";
import { LogoutButtonComponent } from "../auth/logout";
import { currentUser } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/nextjs/dist/types/server";

export async function UserDetail() {
  const user = await currentUser();
  const accountInfo = user?.externalAccounts[0];
  const provider = convertProvider(accountInfo?.provider as OAuthStrategy) as
    | "google"
    | "github";

  return (
    <div className="p-5 sm:p-8 flex flex-col gap-8 items-start">
      <div className="flex items-center gap-8">
        <Image
          src={user?.profileImageUrl ?? ""}
          alt=""
          className="inline-block border-2 border-main rounded-[50%]"
          width={100}
          height={100}
        />
        <div>
          <p className="break-all">{user?.username}</p>
          <p className="break-all">ID: {user?.id}</p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3">
          認証方法:
          <span className="flex items-center gap-2">
            {convertProviderIcon(provider)} {provider}
          </span>
        </div>
        <div>email: {accountInfo?.emailAddress}</div>
      </div>

      <div className="mx-auto">
        <LogoutButtonComponent></LogoutButtonComponent>
      </div>
    </div>
  );
}
