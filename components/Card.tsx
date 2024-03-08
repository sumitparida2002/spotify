import { Play } from "lucide-react";
import React from "react";
import PlayButton from "./PlayButton";

export default function Card() {
  return (
    <div
      className="bg-neutral-400/5 hover:bg-neutral-400/10 w-fit p-2        relative group transition 
    "
    >
      <div className="bg-emerald-500 h-[200px] w-[200px]"></div>
      <h3>Metamorphsis</h3>
      <h3>By InterWorld</h3>
      <div
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  );
}
