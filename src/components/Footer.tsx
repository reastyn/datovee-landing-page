export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Datovee s.r.o.</h3>
            <p className="text-sm text-muted-foreground">
              Poskytujeme komplexní řešení v oblasti AI, dat a cloudu pro
              moderní podnikání.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("sluzby");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Služby
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("projekty");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projekty
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("kontakt");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@datovee.cz</li>
              <li>
                <a href="tel:+420720353874" className="hover:text-primary transition-colors">
                  +420 720 353 874
                </a>
              </li>
              <li>Praha, Česká republika</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Datovee s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}

