import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUor from "@/assets/logo-uor.png";
import logoAmplexa from "@/assets/logo-amplexa.jpeg";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/funcionalidades", label: "Funcionalidades" },
  { to: "/galeria", label: "Galeria" },
  { to: "/parcerias", label: "Parcerias" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <img src={logoUor} alt="UÓR" className="h-9 w-9 rounded-md object-contain" />
            <div className="h-7 w-px bg-border" />
            <img src={logoAmplexa} alt="Amplexa" className="h-9 w-9 rounded-md object-contain" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">UÓR × Amplexa</div>
            <div className="text-sm font-bold gradient-text-primary">EDU OS</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = path === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active && <span className="absolute inset-x-3 -bottom-px h-0.5 gradient-primary rounded-full" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild size="sm" className="gradient-primary text-primary-foreground shadow-glow border-0">
            <Link to="/login">Acessar Plataforma</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <Button asChild size="sm" className="flex-1 gradient-primary text-primary-foreground border-0">
                <Link to="/login" onClick={() => setOpen(false)}>Acessar Plataforma</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
