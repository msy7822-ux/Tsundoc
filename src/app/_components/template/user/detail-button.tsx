"use client";

export function DetailButton() {
  const handleOnClickDetailButton = () => {
    window.location.reload();
  };
  return (
    <button
      type="button"
      className="border rounded-md py-2 px-4"
      onClick={handleOnClickDetailButton}
    >
      詳しくみる
    </button>
  );
}
