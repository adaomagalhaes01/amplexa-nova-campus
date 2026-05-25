import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import event1 from "@/assets/event-mercado.jpg";
import event2 from "@/assets/event-semana.jpg";
import event3 from "@/assets/event-mestrado.jpg";
import event4 from "@/assets/event-debate.jpg";

export const Route = createFileRoute("/dashboard/eventos")({ component: Eventos });

const events = [
  { img: event1, t: "Mercado de Capitais e Banca", d: "19 Dez", h: "10:30", l: "Anfiteatro Alberto Maba Chocolate", i: 142 },
  { img: event4, t: "Debate · Orçamento Geral 2026", d: "15 Dez", h: "10:30", l: "Anfiteatro UÓR", i: 230 },
  { img: event2, t: "Semana D'CHAA da FCEE", d: "28-30 Mai", h: "10:00", l: "Campus UÓR", i: 412 },
  { img: event3, t: "Primeiras Defesas de Mestrado", d: "18 Set", h: "09:00", l: "Sala de Defesas", i: 68 },
];

function Eventos() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2"><CalendarDays className="h-7 w-7 text-primary" /> Eventos</h1>
          <p className="text-sm text-muted-foreground">Workshops, palestras e actividades académicas.</p>
        </div>
        <Button className="gradient-accent text-accent-foreground border-0">Novo evento</Button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((e) => (
          <Card key={e.t} className="overflow-hidden hover:shadow-elegant transition group">
            <div className="aspect-video overflow-hidden">
              <img src={e.img} alt={e.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-5">
              <Badge className="gradient-accent text-accent-foreground border-0 mb-2">{e.d}</Badge>
              <h3 className="font-semibold mb-2">{e.t}</h3>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {e.h}</div>
                <div className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {e.l}</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-muted-foreground">{e.i} inscritos</span>
                <Button size="sm" variant="outline">Gerir</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
