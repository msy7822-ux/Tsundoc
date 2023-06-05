type Props = {
  message: string;
  isDisplay: boolean;
};

export function ErrorBlock({ message, isDisplay }: Props) {
  if (!isDisplay) return null;

  return (
    <div className="w-full border rounded-md shadow-md">
      <div>{message}</div>
    </div>
  );
}
