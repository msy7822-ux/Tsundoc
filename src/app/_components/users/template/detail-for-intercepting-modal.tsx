import Image from "next/image";
import { DetailButton } from "../detail-button";

export async function UserDetail() {
  return (
    <div className="flex flex-col items-start gap-8 p-5 sm:p-8">
      <div className="flex items-center gap-8">
        <Image
          src={""}
          alt=""
          className="inline-block rounded-[50%] border-2 border-main"
          width={100}
          height={100}
        />
        <div>
          {/* <p className="break-all">{user?.username}</p>
          <p className="break-all">ID: {user?.id}</p> */}
        </div>
      </div>

      <div className="w-full">
        <div
          className="
          mb-3 w-full border-b
          border-gray-300 text-gray-500"
        >
          認証方法
        </div>
        <span className="flex items-center gap-2">
          {/* {convertProviderIcon(provider)} {provider} */}
        </span>
      </div>

      <div className="w-full">
        <div
          className="
          mb-3 w-full border-b
          border-gray-300 text-gray-500"
        >
          メールアドレス
        </div>
        {/* {accountInfo?.emailAddress} */}
      </div>

      <div className="mx-auto flex items-center gap-5">
        <DetailButton></DetailButton>
        {/* <LogoutButtonComponent></LogoutButtonComponent> */}
      </div>
    </div>
  );
}
