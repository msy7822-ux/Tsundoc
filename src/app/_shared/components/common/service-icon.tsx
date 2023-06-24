import Image from "next/image";

export function ServiceIcon() {
  return (
    <div className="inline-block">
      <div className="flex items-center justify-center gap-12 py-8 align-middle">
        <Image src={"/books-purple.svg"} alt="TsunDoc" width={35} height={35} />
        <p className="text-xl font-bold text-main sm:text-3xl">TsunDoc</p>
      </div>
    </div>
  );
}
