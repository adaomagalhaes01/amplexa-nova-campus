import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingDown, TrendingUp, Sparkles, AlertTriangle, Trophy } from "lucide-react";

export const Route = createFileRoute("/dashboard/ia")({ component: IA });

function IA() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          <Brain className="h-7 w-7 text-primary" /> IA Académica
        </h1>
        <p className="text-sm text-muted-foreground">Recomendações, previsões e ranking inteligente.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="p-6 lg:col-span-2 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full gradient-primary opacity-20 blur-3xl" />
          <Badge className="gradient-accent text-accent-foreground border-0 mb-3"><Sparkles className="h-3 w-3 mr-1" /> IA Insight</Badge>
          <h2 className="text-xl font-semibold mb-2">3 cursos com risco crescente este semestre.</h2>
          <p className="text-sm text-muted-foreground mb-6">O modelo detectou queda de frequência consistente em Direito (2º ano), Contabilidade (3º) e Marketing (1º). Recomenda-se intervenção pedagógica em até 2 semanas.</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { c: "Direito · 2º", v: "-12%", i: TrendingDown },
              { c: "Contab. · 3º", v: "-9%", i: TrendingDown },
              { c: "Marketing · 1º", v: "-6%", i: TrendingDown },
            ].map((r) => (
              <div key={r.c} className="rounded-lg bg-muted/50 p-3">
                <div className="text-xs text-muted-foreground">{r.c}</div>
                <div className="text-lg font-bold text-destructive flex items-center gap-1">{r.v} <r.i className="h-4 w-4" /></div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-accent" />
            <h3 className="font-semibold">Top Talentos</h3>
          </div>
          <div className="space-y-3">
            {[
              { n: "Sofia A.", c: "Direito", m: 18.1 },
              { n: "Maria Soares", c: "Eng. Info", m: 17.2 },
              { n: "Carlos N.", c: "Economia", m: 16.0 },
              { n: "Helder T.", c: "Gestão", m: 15.8 },
            ].map((s, i) => (
              <div key={s.n} className="flex items-center gap-3">
                <div className={`h-7 w-7 rounded-md text-xs font-bold flex items-center justify-center ${i===0?"gradient-accent text-accent-foreground":"bg-muted"}`}>#{i+1}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.c}</div>
                </div>
                <div className="text-sm font-bold">{s.m}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          { i: AlertTriangle, t: "Alerta de risco", d: "14 estudantes apresentam queda crítica de frequência.", c: "destructive" },
          { i: TrendingUp, t: "Previsão positiva", d: "Engenharia Informática deve subir 4% nas notas finais.", c: "primary" },
        ].map((x) => (
          <Card key={x.t} className="p-5 flex gap-4 items-start">
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${x.c==="destructive"?"bg-destructive/15 text-destructive":"bg-primary/15 text-primary"}`}>
              <x.i className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold">{x.t}</h4>
              <p className="text-sm text-muted-foreground">{x.d}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
