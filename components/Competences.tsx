import Image from "next/image";
import SectionPanel from "./SectionPanel";

type Card = {
  title: string;
  image: string;
  href: string;
  heightClass: string;
};

const cv: Card = {
  title: "Mon CV",
  image: "/images/competences/cv.png",
  href: "https://drive.google.com/file/d/1xV0WpDcr5MJQ4x5RH0yjGyAaHgn0xf58/view?usp=drive_link",
  heightClass: "h-[449px]",
};

const bootDev: Card = {
  title: "Mon profil Boot.dev",
  image: "/images/competences/bootdev.png",
  href: "https://www.boot.dev/u/peskyfuel00",
  heightClass: "h-[390px]",
};

const github: Card = {
  title: "Mon profil GitHub",
  image: "/images/competences/github.png",
  href: "https://github.com/BomengoD",
  heightClass: "h-[390px]",
};

function CardLink({ title, image, href, heightClass }: Card) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block w-full overflow-hidden rounded-2xl transition-transform hover:scale-[1.01] ${heightClass}`}
    >
      {/* Le cadre jaune de 3 px est déjà dans l'image exportée */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="614px"
        className="object-cover"
      />
    </a>
  );
}

export default function Competences() {
  return (
    <SectionPanel id="competences" title="Compétences">
      <p className="pb-20 text-2xl font-medium leading-[1.45] tracking-[-0.12px] text-jaune [text-shadow:-1.858px_-1.732px_12px_rgba(0,0,0,0.15),-11.15px_-10.392px_48px_rgba(0,0,0,0.15)]">
        Mon CV et mes différentes activités.
      </p>

      <div className="grid grid-cols-2 items-start gap-8">
        <div className="flex flex-col gap-8">
          <CardLink {...cv} />
          <CardLink {...bootDev} />
        </div>
        <div className="pt-24">
          <CardLink {...github} />
        </div>
      </div>
    </SectionPanel>
  );
}