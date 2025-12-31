import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Database, Cloud } from "lucide-react";

const services = [
  {
    title: "AI Konzultace",
    description:
      "Multi-agentní systémy, voiceboty a automatizace procesů pomocí umělé inteligence. Pomáháme vám implementovat nejmodernější AI řešení pro optimalizaci vašich obchodních procesů.",
    icon: Brain,
  },
  {
    title: "Data & Analytics",
    description:
      "OCR technologie, zpracování dokumentů a kategorizace pomocí LLM. Transformujeme vaše data v hodnotné informace pomocí pokročilých analytických nástrojů.",
    icon: Database,
  },
  {
    title: "Cloud řešení",
    description:
      "Integrace systémů, API development a cloudová infrastruktura. Navrhujeme a implementujeme škálovatelná cloudová řešení pro vaše podnikání.",
    icon: Cloud,
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše služby</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Poskytujeme komplexní řešení v oblasti AI, dat a cloudu, která
            pomáhají firmám růst a inovovat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

