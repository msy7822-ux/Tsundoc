export function Thumbnail({ imageUrl }: { imageUrl: string | null }) {
  return (
    <div className="inline-block">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={imageUrl ?? "/not-found-ogp.png"}
        alt=""
        width={280}
        height={160}
        className="
          h-[140px] w-[300px] rounded-lg
          border border-gray-100 object-cover
          shadow-md
        "
      />
    </div>
  );
}
