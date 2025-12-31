import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-16 items-center justify-center px-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">Datovee</span>
          <span className="text-sm text-muted-foreground">s.r.o.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 absolute right-4">
          <button
            onClick={() => scrollToSection("sluzby")}
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Služby
          </button>
          <button
            onClick={() => scrollToSection("projekty")}
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Projekty
          </button>
          <button
            onClick={() => scrollToSection("kontakt")}
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Kontakt
          </button>
          <Button
            onClick={() => scrollToSection("kontakt")}
            size="sm"
          >
            Kontaktujte nás
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 px-4 py-4">
            <button
              onClick={() => scrollToSection("sluzby")}
              className="text-left text-sm font-medium transition-colors hover:text-primary cursor-pointer"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection("projekty")}
              className="text-left text-sm font-medium transition-colors hover:text-primary cursor-pointer"
            >
              Projekty
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-left text-sm font-medium transition-colors hover:text-primary cursor-pointer"
            >
              Kontakt
            </button>
            <Button
              onClick={() => scrollToSection("kontakt")}
              className="w-full"
              size="sm"
            >
              Kontaktujte nás
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

