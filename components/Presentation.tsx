export default function Presentation() {
  return (
    <section
      id="apropos"
      className="mx-auto w-full max-w-[1500px] scroll-mt-24 px-[120px] pb-24"
    >
      <div className="rounded-[10px] border border-white/30 bg-bleu-fallout/70 px-[120px] py-20 shadow-[-11px_-10px_24px_0_rgba(66,148,219,0.6),inset_2px_2px_9px_0_rgba(0,0,0,0.2),inset_1px_1px_5px_0_#4294db]">
        <div className="flex flex-col gap-4 pb-20 text-jaune">
          <h2 className="text-4xl font-bold leading-[1.2] tracking-[-0.72px]">
            Je suis Ruben Boussa.
          </h2>
          <div className="space-y-6 text-2xl font-medium [text-shadow:-1.858px_-1.732px_12px_rgba(0,0,0,0.15),-11.15px_-10.392px_48px_rgba(0,0,0,0.15)]">
            <p>
              Basé en France, je suis un étudiant en BUT Informatique,
              passionné par la programmation, mais pas que.
            </p>
            <p>Ceci est mon portfolio, j&rsquo;espère qu&rsquo;il vous plait !</p>
          </div>
        </div>
      </div>
    </section>
  );
}