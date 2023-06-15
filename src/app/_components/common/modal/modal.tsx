/**
 * Modalの使い方
 * <Modal>
 *  <ModalInner>
 *    // 任意のコンテンツ
 *  </ModalInner>
 * </ModalInner>
 */

export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div
        className="
          fixed left-0 top-0
          z-50 flex h-screen w-screen items-center
          justify-center bg-black/80
        "
      >
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
