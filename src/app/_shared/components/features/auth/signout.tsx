"use client";

export function SignoutComponent() {
  return (
    <div>
      <form action="/auth/signout" method="post">
        <button
          className="block w-full rounded-md border px-12 py-5"
          type="submit"
        >
          ログアウト
        </button>
      </form>
    </div>
  );
}
