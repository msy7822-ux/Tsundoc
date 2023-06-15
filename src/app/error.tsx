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
          className="rounded-md border px-4 py-2 text-sm"
        >
          リロードする
        </button>
      </body>
    </html>
  );
}
