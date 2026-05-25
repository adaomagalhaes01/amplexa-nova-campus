import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertCircle, MessageSquare, GraduationCap, Calendar } from "lucide-react";

export const Route = createFileRoute("/dashboard/notificacoes")({ component: Notif });

const items = [
  { i: AlertCircle, t: "Alerta · IA Académica", d: "14 estudantes com risco crítico de reprovação.", w: "há 5 min", c: "destructive" },
  { i: GraduationCap, t: "Pauta lançada", d: "Macroeconomia II · 4º ano · 87 notas registadas.", w: "há 20 min", c: "primary" },
  { i: MessageSquare, t: "Nova mensagem", d: "Coordenação enviou comunicado oficial sobre época especial.", w: "há 1h", c: "accent" },
  { i: Calendar, t: "Evento publicado", d: "Debate sobre OGE 2026 · 15 de Dezembro.", w: "ontem", c: "primary" },
  { i: Bell, t: "Lembrete", d: "Reunião do Conselho Pedagógico amanhã às 10:00.", w: "ontem", c: "accent" },
];

const color: Record<string,string> = {
  destructive: "bg-destructive/15 text-destructive",
  primary: "bg-primary/15 text-primary",
  accent: "bg-accent/15 text-accent",
};

function Notif() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2"><Bell className="h-7 w-7 text-primary" /> Notificações</h1>
        <p className="text-sm text-muted-foreground">Alertas, mensagens e lembretes em tempo real.</p>
      </div>
      <Card className="divide-y">
        {items.map((n, i) => (
          <div key={i} className="p-5 flex gap-4 items-start hover:bg-muted/30 transition">
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${color[n.c]}`}>
              <n.i className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <h4 className="font-semibold">{n.t}</h4>
                <Badge variant="outline" className="text-xs">{n.w}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{n.d}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
