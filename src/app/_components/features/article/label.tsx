type Props = {
  labelText: string;
};

export function ArticleLabael({ labelText }: Props) {
  return (
    <div
      className="
        inline-block max-w-150 overflow-hidden
        text-ellipsis whitespace-nowrap rounded-md
        bg-main px-16 py-4 text-xs
        text-white shadow-md
      "
    >
      {labelText}
    </div>
  );
}
