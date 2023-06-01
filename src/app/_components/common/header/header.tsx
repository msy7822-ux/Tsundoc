import { HeaderContent } from "./header-content";

export function Header() {
  return (
    <div className="relative z-50 h-[80px] w-full flex flex-col items-start justify-center border border-gray-100 shadow-sm">
      <HeaderContent></HeaderContent>
    </div>
  );
}
