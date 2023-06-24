"use client";

export function DetailButton() {
  const handleOnClickDetailButton = () => {
    window.location.reload();
  };
  return (
    <button
      type="button"
      className="rounded-md border px-4 py-2"
      onClick={handleOnClickDetailButton}
    >
      詳しくみる
    </button>
  );
}
