import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-[120px] px-[120px] pb-24 pt-[120px]">
      <h1 className="w-full text-center text-[64px] font-bold leading-[1.1] tracking-[-1.6px] text-jaune [text-shadow:-1.858px_-1.732px_12px_rgba(247,232,87,0.15),-11.15px_-10.392px_48px_rgba(247,232,87,0.15)]">
        Hello world !
      </h1>

      <div className="relative aspect-[922/599] w-full overflow-hidden rounded-[32px] shadow-[0_0_4.4px_0_rgba(0,0,0,0.06),0_5px_19px_0_rgba(0,0,0,0.08)]">
        <Image
          src="/images/Vault_boy-hero.png"
          alt="Vault Boy, pouce levé"
          fill
          priority
          sizes="(min-width: 1500px) 1260px, 84vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}