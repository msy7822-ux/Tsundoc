import Image from "next/image";
import bookIcon from "../../../../public/books-purple.svg";

export function ServiceIcon() {
  return (
    <div className="inline-block">
      <div className="flex items-center justify-center gap-3 py-2 align-middle">
        <Image src={bookIcon} alt="TsunDoc" width={35} height={35} />
        <p className="text-2xl font-bold text-main sm:text-3xl">TsunDoc</p>
      </div>
    </div>
  );
}
