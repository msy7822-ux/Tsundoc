import { HeaderContent } from "./header-content";

export function Header() {
  return (
    <div
      className="
        relative flex h-80 flex-col
        items-start justify-center border-gray-100
        p-12 shadow-sm lg:p-0
      "
    >
      <HeaderContent></HeaderContent>
    </div>
  );
}
