export function Thumbnail({ imageUrl }: { imageUrl: string | null }) {
  return (
    <div className="inline-block">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={imageUrl ?? "/books-purple.svg"}
        alt=""
        width={150}
        height={50}
        className="rounded-md"
      />
    </div>
  );
}
