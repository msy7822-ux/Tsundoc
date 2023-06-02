import { convertProvider, convertProviderIcon } from "@/lib/provider";
import Image from "next/image";
import { LogoutComponent } from "../auth/logout";
import { currentUser } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/nextjs/dist/types/server";

export async function UserDetail() {
  const user = await currentUser();
  const accountInfo = user?.externalAccounts[0];
  console.log("user", user);
  const provider = convertProvider(accountInfo?.provider as OAuthStrategy) as
    | "google"
    | "github";

  return (
    <div>
      <div>
        <Image
          src={user?.profileImageUrl ?? ""}
          alt=""
          className="inline-block border-2 border-main rounded-[50%]"
          width={140}
          height={140}
        />
      </div>
      <div>{user?.username}</div>
      <div>ID: {user?.id}</div>
      <div>
        <div className="flex items-center gap-3">
          認証方法:
          <span className="flex items-center gap-2">
            {convertProviderIcon(provider)} {provider}
          </span>
        </div>
      </div>

      <LogoutComponent></LogoutComponent>
    </div>
  );
}
