"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import { Link } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Jescaps Nyarko Antwi
      </span>
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight mt-10">full-stack engineer.</h1>
        <p className="text-lg md:text-xl text-center">
          Transforming ideas into immersive digital experiences with a perfect fusion of frontend finesse and backend brilliance.
        </p>
      </div>

      <RetroGrid />
    </div>
  );
}

//Blending artistry and engineering to craft seamless digital experiences, mastering both the frontend magic and backend wizardry

