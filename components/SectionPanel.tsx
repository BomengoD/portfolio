type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

/** Panneau bleu pleine largeur avec titre centré, commun aux sections. */
export default function SectionPanel({ id, title, children }: Props) {
  return (
    <section
      id={id}
      className="relative scroll-mt-20 border border-white/35 bg-bleu-fallout/70 shadow-[-11px_-10px_24px_0_rgba(66,148,219,0.6),inset_2px_2px_9px_0_rgba(255,255,255,0.13),inset_1px_1px_5px_0_#4294db, ]"
    >
      <h2 className="absolute left-1/2 top-5 -translate-x-1/2 text-4xl font-bold leading-[1.2] tracking-[-0.72px] text-jaune">
        {title}
      </h2>
      <div className="mx-auto max-w-[1500px] px-[120px] py-20">{children}</div>
    </section>
  );
}