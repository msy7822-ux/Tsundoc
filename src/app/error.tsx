"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>不具合が発生しました。</h2>
        <button
          onClick={() => window.location.reload()}
          className="border rounded-md py-2 px-4 text-sm"
        >
          リロードする
        </button>
      </body>
    </html>
  );
}
