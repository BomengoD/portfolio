const links = [
  { label: "A propos", href: "#apropos" },
  { label: "Mes projets", href: "#projets" },
  { label: "Formation", href: "#formation" },
  { label: "Expériences", href: "#experiences" },
  { label: "Compétences", href: "#competences" },
  { label: "Me contacter", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav
        aria-label="Navigation principale"
        className="flex w-full max-w-[1218px] items-center justify-center gap-10 overflow-x-auto rounded-[40px] border border-white/35 bg-jaune px-6 py-4 shadow-[-11px_-10px_48px_0_rgba(247,232,87,0.41),-2px_-2px_12px_0_rgba(0,0,0,0.15),inset_2px_2px_9px_0_#f7e857,inset_1px_1px_5px_0_rgba(255,255,255,0.13)]"
      >
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="whitespace-nowrap text-base font-medium tracking-[-0.08px] text-noir transition-opacity hover:opacity-60"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}