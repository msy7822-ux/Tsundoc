import { HeaderContent } from "./header-content";

export function Header() {
  return (
    <div
      className="
      relative h-[80px] flex flex-col
      items-start justify-center border
      border-gray-100 shadow-sm
      lg:p-0 p-3
    "
    >
      <HeaderContent></HeaderContent>
    </div>
  );
}
