export function ModalInner({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
      relative bg-white w-[80%] mx-auto rounded-[6px]
      p-5 border border-gray-300 shadow-lg min-h-[450px]
    "
    >
      <>{children}</>
    </div>
  );
}
