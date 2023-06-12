export function ModalInner({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
      relative bg-white w-[90%] sm:w-[60%] mx-auto rounded-[6px]
      sm:p-5 p-2 border border-gray-300 shadow-lg min-h-[450px]
    "
    >
      <>{children}</>
    </div>
  );
}
