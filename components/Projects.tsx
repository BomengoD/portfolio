import ProjectCard, { type Project } from "./ProjectCard";

const calculateurMasque: Project = {
  title: "Calculateur de masque réseau",
  image: "/images/projets/calcmasque.png",
  summary: [
    "Ce projet fut réalisé dans le cadre d’une SAE lors de ma première année.",
    "C’est une application qui permet d’obtenir toutes les informations d’une adresse IP, c’est un calculateur de masque. Il a été réalisé en équipe de 5 sur Visual Studio en C# avec WinForms.",
  ],
  githubUrl: "https://github.com/Exe-adt/CalculateurReseau",
};

const pcBuildMaker: Project = {
  title: "PC Build Maker",
  image: "/images/projets/buildmaker.png",
  summary: ["Site web réalisé en duo qui permet de trouver des composants à travers différents sites de référence afin de construire son pc, avec notamment des builds proposés."],
  githubUrl: "https://github.com/BomengoD/Site-Web",
};

const puissance4: Project = {
  title: "Puissance 4",
  image: "/images/projets/p4.png",
  summary: ["Ce projet fut réalisé dans le cadre d’une SAE lors de ma première année."
    , "C’est une application qui simule des parties de puissance 4 contre une IA avec notamment la connexion à un profil joueur afin de sauvegarder des parties ou avoir des trophées. Elle a été réalisée en équipe de 5 sur Visual Studio en C# avec WPF, et la création d’une base de données.",],
  githubUrl: "https://github.com/Laty4127/SAE-2.01",
};

const gestionForestiere: Project = {
  title: "Gestion forestière",
  image: "/images/projets/gestforet.png",
  summary: ["Ce projet fut réalisé dans le cadre d’une SAE lors de ma première année." 
    , "C’est une application qui centralise la gestion d’une parcelle de forêt en permettant de rechercher,trier, ajouter des arbres dans cette parcelle. Réalisée en équipe de 3 en C sur VS Code.",],
  githubUrl: "https://github.com/BomengoD/SAE-1.02-Gestion-Forestiere",
};

export default function Projets() {
  return (
    <section
      id="projets"
      className="relative scroll-mt-20 border border-white/35 bg-bleu-fallout/70 shadow-[-11px_-10px_24px_0_rgba(66,148,219,0.6),inset_2px_2px_9px_0_rgba(255,255,255,0.13),inset_1px_1px_5px_0_#4294db]"
    >
      <h2 className="absolute left-1/2 top-5 -translate-x-1/2 text-4xl font-bold leading-[1.2] tracking-[-0.72px] text-jaune">
        Projets
      </h2>

      <div className="mx-auto max-w-[1500px] px-[120px] py-20">
        <p className="pb-20 text-2xl font-medium text-jaune [text-shadow:-1.858px_-1.732px_12px_rgba(0,0,0,0.15),-11.15px_-10.392px_48px_rgba(0,0,0,0.15)]">
          Les différents projets que j'ai pu réalisé au cours de ma
          formation mais aussi mes projets personnels. Certains sont finis,
          d'autres sont en cours.
        </p>

        <div className="grid grid-cols-2 items-start gap-8">
          <div className="flex flex-col gap-8">
            <ProjectCard {...calculateurMasque} className="w-full" />
            <ProjectCard {...pcBuildMaker} className="w-full" />
          </div>
          <div className="flex flex-col gap-8 pt-24">
            <ProjectCard {...puissance4} className="w-[504px] max-w-full" />
            <ProjectCard {...gestionForestiere} className="w-[504px] max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}