import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import event1 from "@/assets/event-mercado.jpg";
import event2 from "@/assets/event-semana.jpg";
import event3 from "@/assets/event-mestrado.jpg";
import event4 from "@/assets/event-debate.jpg";

export const Route = createFileRoute("/galeria")({
  component: Galeria,
  head: () => ({ meta: [
    { title: "Galeria Universitária — AMPLEXA EDU OS" },
    { name: "description", content: "Eventos, palestras, feiras e actividades da UÓR." },
  ]}),
});

const items = [
  { src: event1, cat: "Palestras", t: "Mercado de Capitais e Banca" },
  { src: event2, cat: "Eventos", t: "Semana D'CHAA da FCEE" },
  { src: event3, cat: "Académico", t: "Primeiras Defesas de Mestrado" },
  { src: event4, cat: "Debates", t: "Orçamento Geral 2026" },
  { src: event1, cat: "Workshops", t: "Workshop Financeiro" },
  { src: event2, cat: "Feiras", t: "Feira de Turismo e Gastronomia" },
  { src: event4, cat: "Debates", t: "Painel Académico" },
  { src: event3, cat: "Académico", t: "Cerimónia Académica" },
];

const cats = ["Todos", "Palestras", "Eventos", "Académico", "Debates", "Workshops", "Feiras"];

function Galeria() {
  const [cat, setCat] = useState("Todos");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = items.filter((i) => cat === "Todos" || i.cat === cat);

  return (
    <SiteLayout>
      <section className="py-16 hero-bg">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Badge variant="outline" className="mb-4">Galeria</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Momentos da vida universitária.</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Eventos, palestras, feiras e celebrações da Universidade Óscar Ribas.</p>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {cats.map((c) => (
              <Button key={c} size="sm" variant={c === cat ? "default" : "outline"}
                className={c === cat ? "gradient-primary text-primary-foreground border-0" : ""}
                onClick={() => setCat(c)}>{c}</Button>
            ))}
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((it, i) => (
              <div
                key={i}
                onClick={() => setOpen(it.src)}
                className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative shadow-soft hover:shadow-elegant transition"
              >
                <img src={it.src} alt={it.t} loading="lazy" className="w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition">
                  <div className="text-xs">{it.cat}</div>
                  <div className="font-semibold">{it.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
          {open && <img src={open} alt="" className="w-full h-auto rounded-2xl" />}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
