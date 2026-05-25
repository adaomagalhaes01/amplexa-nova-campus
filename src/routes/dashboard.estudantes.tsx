import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, MoreHorizontal } from "lucide-react";

export const Route = createFileRoute("/dashboard/estudantes")({ component: Estudantes });

const students = [
  { n: "Maria Soares", c: "Eng. Informática", a: "4º ano", f: "98%", m: 17.2, s: "Aprovado" },
  { n: "João Pedro", c: "Direito", a: "3º ano", f: "92%", m: 14.8, s: "Aprovado" },
  { n: "Ana Lima", c: "Gestão", a: "2º ano", f: "75%", m: 11.5, s: "Em risco" },
  { n: "Carlos N.", c: "Economia", a: "4º ano", f: "95%", m: 16.0, s: "Aprovado" },
  { n: "Beatriz F.", c: "Marketing", a: "1º ano", f: "88%", m: 13.4, s: "Aprovado" },
  { n: "Pedro M.", c: "Contabilidade", a: "3º ano", f: "62%", m: 9.8, s: "Reprovado" },
  { n: "Sofia A.", c: "Direito", a: "2º ano", f: "97%", m: 18.1, s: "Aprovado" },
];

const statusColor: Record<string, string> = {
  "Aprovado": "bg-primary/10 text-primary",
  "Em risco": "bg-accent/15 text-accent",
  "Reprovado": "bg-destructive/15 text-destructive",
};

function Estudantes() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Estudantes</h1>
        <p className="text-sm text-muted-foreground">12,438 estudantes registados</p>
      </div>
      <Card className="p-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Procurar estudante…" className="pl-9" />
          </div>
          <Button variant="outline"><Filter className="h-4 w-4 mr-2" /> Filtros</Button>
          <Button variant="outline"><Download className="h-4 w-4 mr-2" /> Exportar</Button>
        </div>
        <div className="overflow-x-auto -mx-4">
          <table className="w-full text-sm min-w-[700px]">
            <thead className="text-left text-xs text-muted-foreground border-b">
              <tr>
                <th className="px-4 py-3">Estudante</th>
                <th className="px-4 py-3">Curso</th>
                <th className="px-4 py-3">Ano</th>
                <th className="px-4 py-3">Frequência</th>
                <th className="px-4 py-3">Média</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.n} className="border-b last:border-0 hover:bg-muted/30 transition">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full gradient-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">{s.n.split(" ").map(x=>x[0]).slice(0,2).join("")}</div>
                      <span className="font-medium">{s.n}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{s.c}</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.a}</td>
                  <td className="px-4 py-3 font-medium">{s.f}</td>
                  <td className="px-4 py-3 font-semibold">{s.m}</td>
                  <td className="px-4 py-3"><Badge className={`${statusColor[s.s]} border-0`}>{s.s}</Badge></td>
                  <td className="px-4 py-3"><Button size="icon" variant="ghost"><MoreHorizontal className="h-4 w-4" /></Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
