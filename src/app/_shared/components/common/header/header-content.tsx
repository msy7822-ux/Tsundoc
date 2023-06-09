import { ServiceIcon } from "../service-icon";
import { HeaderNav } from "./header-nav";
import Link from "next/link";

export function HeaderContent() {
  return (
    <div
      className="
        mx-auto flex
        w-full max-w-5xl justify-between
      "
    >
      <Link href="/">
        <ServiceIcon></ServiceIcon>
      </Link>
      {/* @ts-expect-error Server Component */}
      <HeaderNav></HeaderNav>
    </div>
  );
}
