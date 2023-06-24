import { HeaderContent } from "./header-content";

export function Header() {
  return (
    <div
      className="
        relative flex flex-col items-start
        justify-center border-gray-100 bg-white
        p-12 shadow-sm lg:px-0 lg:py-15
      "
    >
      <HeaderContent></HeaderContent>
    </div>
  );
}
