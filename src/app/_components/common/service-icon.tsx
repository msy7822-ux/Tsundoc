import Image from "next/image";
import bookIcon from "../../../../public/books-purple.svg";

export function ServiceIcon() {
  return (
    <div className="inline-block">
      <div className="flex items-center gap-3 justify-center align-middle py-2">
        <Image src={bookIcon} alt="TsunDoc" width={35} height={35} />
        <p className="font-bold text-2xl sm:text-3xl text-main">TsunDoc</p>
      </div>
    </div>
  );
}
