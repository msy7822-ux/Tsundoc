"use client";

export function ModalCloseButton() {
  return (
    <button
      className="border rounded-md py-2 px-8"
      onClick={() => {
        window.location.reload();
        console.log("router.forward()");
      }}
    >
      詳しくみる
    </button>
  );
}
