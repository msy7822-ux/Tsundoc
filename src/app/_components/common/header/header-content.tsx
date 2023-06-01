import { ServiceIcon } from "../service-icon";
import { HeaderNav } from "./header-nav";
import Link from "next/link";

export function HeaderContent() {
  return (
    <div className="w-full px-3 sm:px-5 flex justify-between">
      <Link href="/">
        <ServiceIcon></ServiceIcon>
      </Link>
      {/* @ts-expect-error Server Component */}
      <HeaderNav></HeaderNav>
    </div>
  );
}
