"use client";

export function AuthButton({
  onClick,
  icon,
  label,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
          flex items-center gap-4
          rounded-md bg-main px-12
          py-8 text-sm text-white shadow-lg
        "
    >
      <span>{label}</span>
      {icon}
    </button>
  );
}
