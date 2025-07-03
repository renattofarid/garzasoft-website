import Image from "next/image";

interface Props {
  title: string;
}

export default function HeroSection({ title }: Props) {
  return (
    <section className="relative h-[30rem] flex items-center">
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-brand-darkGreen/90 to-brand-darkGreen/40"></div>
      <div className="relative max-w-screen-xl flex justify-start mx-auto px-6 w-full">
        <h1 className="text-white z-10 text-5xl font-bold">{title}</h1>
      </div>
      <div className="absolute right-0 top-0 h-full w-full opacity-30">
        <Image
          src="/aboutus/hero.jpg"
          alt="Medical professionals"
          fill
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
