import SectionPanel from "./SectionPanel";
import Timeline, { type TimelineItem } from "./Timeline";

// Du plus récent au plus ancien
const items: TimelineItem[] = [
  {
    lines: [
      "BUT Informatique en deuxième année (parcours Réalisation d’application : Conception, Développement, Validation).",
      "IUT d’Amiens, depuis 2025",
      "obtention du diplôme prévue en 2028.",
    ],
    link: {
      label: "Voir le programme",
      href: "https://www.u-picardie.fr/formation/catalogue/but-informatique-amiens#t-2-group_tabs_intro",
    },
  },
  {
    lines: [
      "Baccalauréat général spécialités Mathématiques, Numérique et Sciences de l’Informatique - mention AB",
      "Lycée Évariste Galois 2023-2025",
    ],
  },
];

export default function Formation() {
  return (
    <SectionPanel id="formation" title="Formation">
      <Timeline items={items} />
    </SectionPanel>
  );
}