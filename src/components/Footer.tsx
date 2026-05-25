import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoUor from "@/assets/logo-uor.png";
import logoAmplexa from "@/assets/logo-amplexa.jpeg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoUor} alt="UÓR" className="h-10 w-10 rounded-md" />
              <img src={logoAmplexa} alt="Amplexa" className="h-10 w-10 rounded-md" />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              AMPLEXA EDU OS — Plataforma inteligente universitária para a transformação digital da UÓR.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/funcionalidades" className="hover:text-foreground">Funcionalidades</Link></li>
              <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
              <li><Link to="/galeria" className="hover:text-foreground">Galeria</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Instituição</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/sobre" className="hover:text-foreground">Sobre Amplexa</Link></li>
              <li><Link to="/parcerias" className="hover:text-foreground">Parcerias</Link></li>
              <li><Link to="/contactos" className="hover:text-foreground">Contactos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +244 940 900 323</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@uor.edu.ao</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Luanda, Angola</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Amplexa Soluções Digitais Inteligentes × Universidade Óscar Ribas.</p>
          <p>Mais do que Controlo · Confiança · Em Tempo Real</p>
        </div>
      </div>
    </footer>
  );
}
