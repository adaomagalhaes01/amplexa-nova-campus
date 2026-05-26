import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Fingerprint,
  Brain,
  Briefcase,
  Bell,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/funcionalidades")({
  component: Func,
  head: () => ({
    meta: [
      { title: "Funcionalidades — AMPLEXA EDU OS" },
      {
        name: "description",
        content:
          "Módulos: Gestão Académica, Biometria, IA Académica, Career Connect, Comunicação e Analytics.",
      },
    ],
  }),
});

const groups = [
  {
    icon: GraduationCap,
    title: "Gestão Académica",
    items: [
      "Notas e pautas",
      "Horários e turmas",
      "Frequência",
      "Calendário académico",
      "Exames e épocas",
    ],
  },
  {
    icon: Fingerprint,
    title: "Sistema Biométrico",
    items: [
      "Presença biométrica",
      "Reconhecimento facial",
      "Controlo de acesso",
      "Logs de auditoria",
    ],
  },
  {
    icon: Brain,
    title: "IA Académica",
    items: [
      "Análise de desempenho",
      "Previsão de risco",
      "Ranking estudantil",
      "Recomendações personalizadas",
    ],
  },
  {
    icon: Briefcase,
    title: "Career Connect",
    items: ["Marketplace de estágios", "Recrutamento", "Empresas parceiras", "Ranking de talentos"],
  },
  {
    icon: Bell,
    title: "Comunicação",
    items: [
      "Notificações em tempo real",
      "Mensageria interna",
      "Comunicados oficiais",
      "Push & email",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    items: [
      "Dashboards executivos",
      "Relatórios automáticos",
      "Gráficos inteligentes",
      "Dados em tempo real",
    ],
  },
];

function Func() {
  return (
    <SiteLayout>
      <section className="py-20 hero-bg">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Badge variant="outline" className="mb-4">
            Funcionalidades
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Seis módulos. Uma plataforma inteligente.
          </h1>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <Card key={g.title} className="p-6 hover:shadow-elegant transition">
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <g.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
