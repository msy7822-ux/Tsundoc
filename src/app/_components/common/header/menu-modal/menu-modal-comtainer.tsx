import { User } from "@clerk/nextjs/dist/types/server/clerkClient";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
// import { LogoutButtonComponent } from "@/app/_components/auth/logout";

export function MenuModalContainer({
  isOpen,
  user,
  close,
}: {
  isOpen: boolean;
  user: User;
  close: () => void;
}) {
  if (!isOpen) return null;
  return (
    <div className="relative">
      <div
        className="
        absolute right-0 top-[50px]
        z-20 block w-[330px] rounded-md border
        bg-white p-6 shadow-lg"
      >
        <button className="absolute right-3 top-3" onClick={() => close()}>
          <IoMdClose fontSize={20}></IoMdClose>
        </button>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Link href={`/users/${user.id}`}>
              <Image
                src={user.profileImageUrl}
                alt=""
                className="inline-block rounded-[50%]"
                width={40}
                height={40}
              />
            </Link>

            <p className="text-sm">{user.username}</p>
          </div>

          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                href={`/users/${user.id}`}
                className="flex items-center gap-2"
              >
                <IoSettingsOutline></IoSettingsOutline>
                <span>アカウント管理</span>
              </Link>
            </li>
            <li>{/* <LogoutButtonComponent></LogoutButtonComponent> */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
