"use client";

import { motion } from "motion/react";
import {
  IconBrain,
  IconDatabase,
  IconCloud,
  IconRobot,
  IconFileText,
  IconApi,
  IconClock,
  IconChartBar,
  IconTrendingUp,
  IconShield,
  IconBriefcase,
  IconAlertTriangle,
  IconUsers,
  IconBuildingSkyscraper,
  IconRocket,
  IconArticle,
} from "@tabler/icons-react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FlipWords } from "@/components/ui/flip-words";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Contact from "@/components/Contact";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600">
            <IconBrain className="h-6 w-6 text-white" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold tracking-tight">Datovee</span>
            <span className="text-sm text-neutral-500">s.r.o.</span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("sluzby")}
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 cursor-pointer"
          >
            Služby
          </button>
          <button
            onClick={() => scrollToSection("jak-to-funguje")}
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 cursor-pointer"
          >
            Jak to funguje
          </button>
          <button
            onClick={() => scrollToSection("projekty")}
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 cursor-pointer"
          >
            Projekty
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 cursor-pointer"
          >
            Blog
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            onClick={() => scrollToSection("kontakt")}
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 border-0 text-white"
          >
            Kontaktujte nás
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  const words = ["AI", "daty", "cloudem", "automatizací"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroHighlight containerClassName="min-h-screen pt-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="mb-6 inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-600">
            🚀 Konzultace & Implementace AI řešení
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          Transformujeme podnikání pomocí{" "}
          <Highlight className="from-sky-400 to-blue-400 dark:from-sky-500 dark:to-blue-500">
            umělé inteligence
          </Highlight>
          .
          <br />
          <span className="text-neutral-500">S expertízou, ne s nadějí.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-8 max-w-3xl"
        >
          <p className="text-lg text-neutral-600 md:text-xl">
            Poskytujeme komplexní konzultace a implementace v oblasti AI, 
            zpracování dat a cloudových technologií. Pomáháme firmám 
            využívat nejmodernější technologie pro růst a inovace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex items-center justify-center text-xl md:text-2xl"
        >
          <span className="text-neutral-500">Inovujeme s</span>
          <FlipWords words={words} className="text-sky-600 font-semibold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("kontakt")}
            className="h-12 px-8 text-base bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 border-0 text-white"
          >
            Začít spolupráci →
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("jak-to-funguje")}
            className="h-12 px-8 text-base"
          >
            Jak to funguje?
          </Button>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: <IconClock className="h-6 w-6" />,
      title: "Manuální zpracování dokumentů",
      description:
        "Hodiny strávené přepisováním faktur, smluv a dalších dokumentů? Automatizace pomocí AI ušetří čas i peníze.",
    },
    {
      icon: <IconAlertTriangle className="h-6 w-6" />,
      title: "Neefektivní procesy",
      description:
        "Opakující se úkoly, které zaměstnanci dělají ručně? AI agenti mohou většinu z nich převzít.",
    },
    {
      icon: <IconUsers className="h-6 w-6" />,
      title: "Přetížené call centrum",
      description:
        "Zákazníci čekají na odpovědi? Voiceboty a chatboty s LLM dokáží odbavit většinu dotazů okamžitě.",
    },
    {
      icon: <IconDatabase className="h-6 w-6" />,
      title: "Data bez využití",
      description:
        "Máte data, ale nevíte, jak z nich získat hodnotu? Pomůžeme s analytikou a vizualizací.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Digitální transformace{" "}
            <span className="text-neutral-500">nemusí být složitá</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 hover:border-sky-500/30 hover:bg-sky-500/5 transition-colors"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition-colors group-hover:bg-sky-500/20">
                {problem.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{problem.title}</h3>
              <p className="text-neutral-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Konzultace",
      subtitle: "Porozumíme vašim potřebám",
      description:
        "Probereme vaše aktuální procesy, bolestivá místa a cíle. Identifikujeme oblasti, kde AI a automatizace přinesou největší hodnotu.",
    },
    {
      number: "02",
      title: "Návrh řešení",
      subtitle: "Připravíme strategii",
      description:
        "Na základě analýzy navrhneme konkrétní řešení – multi-agentní systémy, voiceboty, OCR systémy nebo cloudovou infrastrukturu.",
    },
    {
      number: "03",
      title: "Implementace",
      subtitle: "Postavíme a integrujeme",
      description:
        "Vyvineme řešení na míru a bezproblémově ho napojíme na vaše stávající systémy – SAP, interní API, CRM a další.",
    },
    {
      number: "04",
      title: "Podpora",
      subtitle: "Jsme tu pro vás",
      description:
        "Po spuštění poskytujeme průběžnou podporu, monitoring a optimalizaci. Vaše řešení se s vámi bude vyvíjet.",
    },
  ];

  return (
    <section id="jak-to-funguje" className="bg-neutral-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Jak s námi{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              spolupracovat
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-neutral-200 bg-white p-8"
            >
              <div className="absolute -top-4 left-8 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-1 text-sm font-bold text-white">
                {step.number}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-1 text-sky-600">{step.subtitle}</p>
                <p className="mt-4 text-neutral-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Multi-agentní AI systémy",
      description:
        "Navrhujeme a implementujeme komplexní systémy s více AI agenty, kteří spolupracují na řešení složitých úkolů.",
      icon: <IconRobot className="h-5 w-5 text-sky-400" />,
      className: "md:col-span-2",
      header: (
        <div className="flex h-full min-h-[8rem] w-full items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-sky-500/30">
              <IconRobot className="h-8 w-8 text-sky-600" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/30">
              <IconBrain className="h-8 w-8 text-blue-600" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500/30">
              <IconApi className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Voiceboty & Chatboty",
      description:
        "Inteligentní konverzační asistenti napojení na vaše systémy. Automatizujte zákaznickou podporu.",
      icon: <IconUsers className="h-5 w-5 text-sky-400" />,
      header: (
        <div className="flex h-full min-h-[8rem] w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
          <div className="text-2xl font-bold text-teal-600">24/7</div>
          <div className="mt-2 text-sm text-neutral-600">Nepřetržitá dostupnost</div>
        </div>
      ),
    },
    {
      title: "OCR & Zpracování dokumentů",
      description:
        "Automatické vyčítání dat z faktur, smluv a dalších dokumentů s využitím AI a LLM modelů.",
      icon: <IconFileText className="h-5 w-5 text-sky-400" />,
      header: (
        <div className="flex h-full min-h-[8rem] w-full items-center justify-around rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 px-4">
          <div className="text-center">
            <div className="text-sm text-neutral-600">Přesnost</div>
            <div className="text-2xl font-bold text-orange-600">99%+</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-neutral-600">Rychlost</div>
            <div className="text-2xl font-bold text-yellow-600">&lt;1s</div>
          </div>
        </div>
      ),
    },
    {
      title: "LLM integrace",
      description:
        "Napojení velkých jazykových modelů na vaše knowledge base a interní systémy pro chytré odpovědi.",
      icon: <IconBrain className="h-5 w-5 text-sky-400" />,
      header: (
        <div className="flex h-full min-h-[8rem] w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20">
          <div className="text-sm text-neutral-600">Podporujeme</div>
          <div className="mt-2 flex gap-2">
            <span className="rounded-lg bg-pink-500/20 px-3 py-1 text-sm text-pink-600">GPT-4</span>
            <span className="rounded-lg bg-rose-500/20 px-3 py-1 text-sm text-rose-600">Claude</span>
            <span className="rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-600">Gemini</span>
          </div>
        </div>
      ),
    },
    {
      title: "API Development",
      description:
        "Vývoj robustních API pro propojení vašich systémů. REST, GraphQL, webhooky.",
      icon: <IconApi className="h-5 w-5 text-sky-400" />,
      header: (
        <div className="flex h-full min-h-[8rem] w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20">
          <code className="rounded-lg bg-emerald-500/20 px-4 py-2 text-sm text-emerald-600">
            {"GET /api/v1/data"}
          </code>
          <div className="mt-2 text-xs text-neutral-600">Rychlé & Spolehlivé</div>
        </div>
      ),
    },
    {
      title: "Cloudová infrastruktura",
      description:
        "Návrh a implementace škálovatelné cloudové architektury. AWS, Azure, GCP nebo Cloudflare.",
      icon: <IconCloud className="h-5 w-5 text-sky-400" />,
      className: "md:col-span-2",
      header: (
        <div className="flex h-full min-h-[8rem] w-full items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <IconCloud className="mx-auto h-10 w-10 text-blue-600" />
              <div className="mt-2 text-xs text-neutral-600">AWS</div>
            </div>
            <div className="text-center">
              <IconCloud className="mx-auto h-10 w-10 text-cyan-600" />
              <div className="mt-2 text-xs text-neutral-600">Azure</div>
            </div>
            <div className="text-center">
              <IconCloud className="mx-auto h-10 w-10 text-blue-600" />
              <div className="mt-2 text-xs text-neutral-600">GCP</div>
            </div>
            <div className="text-center">
              <IconCloud className="mx-auto h-10 w-10 text-orange-600" />
              <div className="mt-2 text-xs text-neutral-600">Cloudflare</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="sluzby" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Kompletní portfolio{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              AI a cloud služeb
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <BentoGrid className="md:auto-rows-[22rem]">
            {features.map((feature, i) => (
              <BentoGridItem
                key={i}
                title={feature.title}
                description={feature.description}
                header={feature.header}
                icon={feature.icon}
                className={cn(
                  "border-neutral-200 hover:border-sky-500/30",
                  feature.className
                )}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: <IconClock className="h-8 w-8" />,
      title: "Ušetřete čas",
      description: "Automatizace nahradí hodiny manuální práce",
    },
    {
      icon: <IconChartBar className="h-8 w-8" />,
      title: "Data-driven rozhodování",
      description: "Rozhodujte se na základě dat, ne intuice",
    },
    {
      icon: <IconTrendingUp className="h-8 w-8" />,
      title: "Škálujte efektivně",
      description: "Cloudová řešení rostou s vaším byznysem",
    },
    {
      icon: <IconShield className="h-8 w-8" />,
      title: "Bezpečnost na prvním místě",
      description: "Implementujeme best practices v zabezpečení",
    },
    {
      icon: <IconBriefcase className="h-8 w-8" />,
      title: "Zkušený tým",
      description: "Provedeme vás od konzultace po produkci",
    },
  ];

  return (
    <section className="bg-neutral-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Proč zvolit{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Datovee
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 text-center hover:border-sky-500/30 transition-colors"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition-transform duration-200 group-hover:bg-sky-500/20 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="mb-2 font-semibold">{benefit.title}</h3>
              <p className="text-sm text-neutral-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section id="projekty" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Pro koho je{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Datovee
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <WobbleCard containerClassName="bg-gradient-to-br from-sky-800 to-blue-900 min-h-[300px]">
            <div className="max-w-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <IconRocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Startupy & Scale-upy
              </h3>
              <p className="mt-4 text-neutral-200">
                Potřebujete rychle vybudovat MVP nebo škálovat existující produkt? 
                Pomůžeme s architekturou a implementací AI funkcí.
              </p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="bg-gradient-to-br from-pink-800 to-rose-900 min-h-[300px]">
            <div className="max-w-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <IconBuildingSkyscraper className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Enterprise společnosti
              </h3>
              <p className="mt-4 text-neutral-200">
                Máte komplexní systémy a potřebujete je propojit s AI? 
                Specializujeme se na integrace se SAP, Salesforce a dalšími.
              </p>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="bg-gradient-to-br from-teal-800 to-emerald-900 min-h-[300px]">
            <div className="max-w-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <IconUsers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Firmy s call centrem
              </h3>
              <p className="mt-4 text-neutral-200">
                Zákazníci čekají ve frontě? Implementujeme voiceboty 
                a chatboty, které odbavují většinu dotazů automaticky.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="bg-neutral-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Blog &{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Novinky
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Sledujte nejnovější trendy v AI, datech a cloudových technologiích.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-12 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-500/10">
              <IconArticle className="h-10 w-10 text-sky-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-neutral-900">
              Připravujeme pro vás obsah
            </h3>
            <p className="mt-3 max-w-md text-neutral-600">
              Zatím nemáme žádné publikované články, ale pracujeme na tom! 
              Brzy zde najdete case studies, tutoriály a novinky ze světa AI.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => {
                const kontakt = document.getElementById("kontakt");
                kontakt?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Dejte nám vědět, co vás zajímá
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-neutral-200 bg-neutral-100 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600">
              <IconBrain className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold">Datovee s.r.o.</span>
          </div>

          <p className="text-sm text-neutral-500">
            Transformujeme podnikání pomocí AI, dat a cloudu.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("sluzby")}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection("projekty")}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Projekty
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Kontakt
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-neutral-500">
          © {currentYear} Datovee s.r.o. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}
