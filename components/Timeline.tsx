import Image from "next/image";

export type TimelineItem = {
  lines: string[];
  link?: { label: string; href: string };
};

/** Petite flèche jaune arrondie qui pointe de la carte vers l'icône. */
function Arrow({ side }: { side: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      width="60"
      height="52"
      viewBox="0 0 60 52"
      className={`absolute top-[21px] z-10 ${
        side === "right" ? "-left-10" : "-right-10 -scale-x-100"
      }`}
    >
      <polygon
        points="8,26 52,6 52,46"
        fill="#f7e857"
        stroke="#f7e857"
        strokeWidth="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Frise verticale : l'élément le plus récent en premier (en haut, à droite),
 * puis alternance gauche / droite.
 */
export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mx-auto w-full max-w-[1294px]">
      <div
        aria-hidden
        className="absolute inset-y-0 left-1/2 w-[5px] -translate-x-1/2 bg-gradient-to-b from-jaune to-jaune/40"
      />

      <ol className="relative flex flex-col gap-12 pb-12 pt-[166px]">
        {items.map(({ lines, link }, index) => {
          const side = index % 2 === 0 ? "right" : "left";

          return (
            <li key={lines[0]} className="relative h-[454px]">
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                <Image
                  src="/images/Minivault_boy.png"
                  alt=""
                  width={157}
                  height={147}
                />
              </div>

              <div
                className={`absolute top-16 h-[390px] w-[504px] ${
                  side === "right"
                    ? "left-[calc(50%+142px)]"
                    : "right-[calc(50%+144px)]"
                }`}
              >
                <Arrow side={side} />
                <div className="relative flex size-full flex-col items-center justify-center border-[3px] border-jaune bg-bleu-fallout px-5 text-center text-2xl font-medium text-white">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}

                  {link && (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-jaune px-6 py-3 text-lg font-medium tracking-[-0.09px] text-bleu-fallout transition-opacity hover:opacity-80"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}