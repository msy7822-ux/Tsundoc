export function ModalInner({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
      relative mx-auto w-[90%] rounded-[6px] border
      border-gray-300 bg-white p-12 shadow-lg sm:w-[60%] sm:p-20
    "
    >
      <>{children}</>
    </div>
  );
}
