"use client";

// import { Song } from "@/types";
// import MediaItem from "@/components/MediaItem";
// import LikeButton from "@/components/LikeButton";
// import useOnPlay from "@/hooks/useOnPlay";

// interface SearchContentProps {
//   songs: Song[];
// }

export default function SearchContent() {
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      <div className="flex items-center gap-x-4 w-full">
        <div className="flex-1">
          {/* <MediaItem onClick={(id: string) => onPlay(id)} data={song} /> */}
        </div>
        {/* <LikeButton songId={song.id} /> */}
      </div>
    </div>
  );
}
