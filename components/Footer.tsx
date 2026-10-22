import Image from "next/image";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruben-boussa",
    icon: "/images/footer/linkedin.svg",
  },
  {
    label: "Envoyer un mail",
    href: "mailto:ruben.boussa@gmail.com",
    icon: "/images/footer/envelope.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/BomengoD",
    icon: "/images/footer/github.svg",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex scroll-mt-20 flex-col items-center gap-[43px] pt-16"
    >
      <h2 className="text-center text-4xl font-bold leading-[1.2] tracking-[-0.72px] text-jaune">
        15 minutes avec moi
      </h2>

      <div className="relative h-[390px] w-[504px] max-w-full">
        {/* Le cadre jaune de 3 px est déjà dans l'image exportée */}
        <Image
          src="/images/footer/rdv.png"
          alt="Vault Boy, pouce levé, entouré de personnages de l'univers Fallout"
          fill
          sizes="504px"
          className="rounded-2xl object-cover"
        />
      </div>

      <a
        href="https://calendar.app.google/aaA2EJcWpp4agPsb8"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[228px] rounded-xl border border-white/35 px-6 py-3 text-center text-lg font-medium leading-[1.45] tracking-[-0.09px] text-jaune transition-colors hover:bg-white/10"
      >
        Prendre rendez-vous
      </a>

      <div
        aria-hidden
        className="h-px w-[305px] bg-gradient-to-r from-transparent via-white to-transparent"
      />

      <div className="flex w-full flex-col items-center gap-2 border border-white/35 px-4 py-3">
        <ul className="flex items-center gap-[23px]">
          {socials.map(({ label, href, icon }) => (
            <li key={href}>
              <a
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-70"
              >
                <Image src={icon} alt="" width={49} height={51} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xl font-medium leading-[1.45] tracking-[-0.1px] text-jaune">
          @2026 Ruben Boussa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}