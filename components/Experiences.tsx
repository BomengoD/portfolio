import SectionPanel from "./SectionPanel";
import Timeline, { type TimelineItem } from "./Timeline";

// Du plus récent au plus ancien
const items: TimelineItem[] = [
  {
    lines: ["Agent d’accueil et d’animations Parc Astérix - Octobre 2026 (en cours)"],
  },
  {
    lines: ["Agent de quai Mondial Relay, Tremblay en France - été 2025"],
  },
];

export default function Experiences() {
  return (
    <SectionPanel id="experiences" title="Expériences">
      <Timeline items={items} />
    </SectionPanel>
  );
}