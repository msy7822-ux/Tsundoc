import { IoMdClose } from "react-icons/io";

type Props = {
  message: string;
  isDisplay: boolean;
  close: () => void;
};

export function ErrorBlock({ message, isDisplay, close }: Props) {
  if (!isDisplay) return null;

  return (
    <div
      className="
        fixed left-0 top-30 z-50
        block w-full
      "
    >
      <div
        className="
        mx-auto flex w-[90%] items-center
        justify-between rounded-md bg-red-600
        px-10 py-15 text-white shadow-xl"
      >
        <span>{message}</span>
        <button type="button" onClick={() => close()}>
          <IoMdClose size={16}></IoMdClose>
        </button>
      </div>
    </div>
  );
}
