import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Code, MessageSquare, FileText, Mail } from "lucide-react";

const projects = [
  {
    title: "AI Konzultace - Multi-agentní systém",
    description:
      "Komplexní konzultace v oblasti AI likvidace, řešení víceagentního systému, voicebot a automatizace procesů pomocí AI.",
    technologies: ["Multi-agentní systémy", "Voicebot", "AI automatizace"],
    icon: Code,
    category: "AI Konzultace",
  },
  {
    title: "OCR řešení pro faktury",
    description:
      "Vyčítání faktur pomocí AI, OCR technologie a kategorizace faktur skrz LLM pro automatizaci účetních procesů.",
    technologies: ["OCR", "LLM", "Kategorizace"],
    icon: FileText,
    category: "Data & Analytics",
  },
  {
    title: "Voicebot s LLM integrací",
    description:
      "Vytvoření voicebota pomocí velkého jazykového modelu s integrací na systémy třetích stran - SAP & interní API.",
    technologies: ["LLM", "Voicebot", "API integrace", "SAP"],
    icon: MessageSquare,
    category: "AI & Integrace",
  },
  {
    title: "LLM konzultace a Knowledge Base",
    description:
      "Konzultace návrhu řešení pomocí LLM, vytvoření Briefu pro operátory call centra, předání informací z knowledge base, zaindexování dokumentů.",
    technologies: ["LLM", "Knowledge Base", "Indexování"],
    icon: MessageSquare,
    category: "AI Konzultace",
  },
  {
    title: "Kategorizace příchozích e-mailů",
    description:
      "Kategorizace emailů za pomocí LLM, vytvoření confusion matrix s nejhůře vyhodnocenými kategoriemi, vytvoření reportu.",
    technologies: ["LLM", "Kategorizace", "Analytics"],
    icon: Mail,
    category: "Data & Analytics",
  },
];

export default function Projects() {
  return (
    <section id="projekty" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše projekty</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Realizované projekty v oblasti AI, dat a cloudu, které pomáhají
            firmám dosahovat jejich cílů.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="h-10 w-10 text-primary" />
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

