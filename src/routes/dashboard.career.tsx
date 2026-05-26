import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Building2 } from "lucide-react";

export const Route = createFileRoute("/dashboard/career")({ component: Career });

const jobs = [
  { e: "Sonangol", t: "Estágio · Engenharia", l: "Luanda", n: 12, c: "Tech" },
  { e: "BAI", t: "Trainee Financeiro", l: "Luanda", n: 24, c: "Finanças" },
  { e: "Unitel", t: "Marketing Júnior", l: "Luanda", n: 8, c: "Marketing" },
  { e: "TAAG", t: "Gestão de Operações", l: "Luanda", n: 4, c: "Operações" },
  { e: "Endiama", t: "Analista de Dados", l: "Luanda", n: 6, c: "Tech" },
  { e: "BFA", t: "Assessor Comercial", l: "Luanda", n: 18, c: "Finanças" },
];

function Career() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
            <Briefcase className="h-7 w-7 text-primary" /> Career Connect
          </h1>
          <p className="text-sm text-muted-foreground">
            Marketplace de estágios e oportunidades profissionais.
          </p>
        </div>
        <Button className="gradient-primary text-primary-foreground border-0">Publicar vaga</Button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((j) => (
          <Card key={j.t + j.e} className="p-5 hover:shadow-elegant transition group">
            <div className="flex items-start justify-between mb-3">
              <div className="h-10 w-10 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center">
                <Building2 className="h-5 w-5" />
              </div>
              <Badge variant="outline">{j.c}</Badge>
            </div>
            <h3 className="font-semibold mb-1">{j.t}</h3>
            <p className="text-sm text-muted-foreground">{j.e}</p>
            <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {j.l}
              </span>
              <span>{j.n} vagas</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-4 group-hover:gradient-primary group-hover:text-primary-foreground group-hover:border-0 transition"
            >
              Ver candidatos
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
