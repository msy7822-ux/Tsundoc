export function ModalInner({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
      relative mx-auto min-h-[450px] w-[90%] rounded-[6px] border
      border-gray-300 bg-white p-2 shadow-lg sm:w-[60%] sm:p-5
    "
    >
      <>{children}</>
    </div>
  );
}
