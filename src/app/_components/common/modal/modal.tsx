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
          h-screen w-screen _bg-black/80
          fixed flex items-center justify-center top-0
          left-0 z-40
        "
      >
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
