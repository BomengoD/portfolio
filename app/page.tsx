import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Formation from "@/components/Formation";
import Competences from "@/components/Competences";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-24">
        <Hero />

        <Presentation />

        <Projects />

        <Formation />

        <Experiences />

        <Competences />
 
      </main>
      <Footer />
    </>
  );
}