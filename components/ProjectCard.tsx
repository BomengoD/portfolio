"use client";

import Image from "next/image";
import { useState } from "react";

export type Project = {
  title: string;
  image: string;
  summary: string[];
  githubUrl: string;
};

type Props = Project & { className?: string };

export default function ProjectCard({
  title,
  image,
  summary,
  githubUrl,
  className = "",
}: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`h-[390px] [perspective:1200px] ${className}`}
      onKeyDown={(e) => e.key === "Escape" && setFlipped(false)}
    >
      <div
        className={`relative size-full transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Recto : capture du projet (le cadre jaune est dans l'image exportée) */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          aria-label={`Voir les détails du projet ${title}`}
          inert={flipped}
          className="absolute inset-0 cursor-pointer overflow-hidden rounded-2xl [backface-visibility:hidden]"
        >
          <Image
            src={image}
            alt={`Capture d'écran du projet ${title}`}
            fill
            sizes="614px"
            className="object-cover"
          />
        </button>

        {/* Verso : description + lien GitHub */}
        <div
          onClick={() => setFlipped(false)}
          inert={!flipped}
          className="absolute inset-0 flex cursor-pointer flex-col items-center justify-between rounded-2xl bg-jaune px-6 pb-4 pt-7 text-center text-noir [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <div className="max-w-[456px] space-y-6 text-[22px] font-medium leading-snug">
            {summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl bg-bleu-fallout px-6 py-3 text-lg font-medium text-jaune transition-opacity hover:opacity-80"
          >
            Voir le GitHub
          </a>
        </div>
      </div>
    </div>
  );
}