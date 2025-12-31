import { Button } from "@/components/ui/button";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroHighlight containerClassName="min-h-screen pt-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Transformujeme vaše podnikání pomocí{" "}
          <Highlight className="text-black dark:text-white">
            AI, dat a cloudu
          </Highlight>
          .
        </h1>

        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-lg text-muted-foreground md:text-xl">
            Poskytujeme komplexní konzultace a řešení v oblasti umělé inteligence, 
            zpracování dat a cloudových technologií. Pomáháme firmám využívat 
            nejmodernější technologie pro růst a inovace.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={() => scrollToSection("kontakt")}
            className="h-12 px-8 text-base"
          >
            Kontaktujte nás
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("sluzby")}
            className="h-12 px-8 text-base"
          >
            Zjistit více
          </Button>
        </div>
      </div>
    </HeroHighlight>
  );
}

