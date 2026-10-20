import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <Projects />
         {/* d'autres sections à venir */}
      </main>
    </>
  );
}