import React from "react";
import { FlipWords } from "./ui/flip-words";

export function ComingSoon() {
  const words = ["better", "big", "revolutionary", "modern"];

  return (
    <div id="Synapse" className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl md-:text-2xl mx-auto font-normal text-slate-500 ">
        Something 
        <FlipWords words={words} /> <br />
        is coming to to change the way you learn forever
      </div>
    </div>
  );
}

export default ComingSoon;