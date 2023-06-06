export function Thumbnail({ imageUrl }: { imageUrl: string | null }) {
  return (
    <div className="inline-block">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={imageUrl ?? "/books-purple.svg"}
        alt=""
        width={280}
        height={160}
        className="rounded-lg h-[125px] w-[280px] border border-gray-100 shadow-md"
      />
    </div>
  );
}
