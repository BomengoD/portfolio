import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Formation from "@/components/Formation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <Projects />
        <Formation />
        <Experiences />
         {/* d'autres sections à venir */}
      </main>
    </>
  );
}