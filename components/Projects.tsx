import ProjectCard, { type Project } from "./ProjectCard";
import SectionPanel from "./SectionPanel";  

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

export default function Projects() {
  return (
    <SectionPanel id="projects" title="Projets">
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
    </SectionPanel>
  );
}