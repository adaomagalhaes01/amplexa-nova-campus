import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/parcerias")({
  component: Parcerias,
  head: () => ({
    meta: [
      { title: "Parcerias — AMPLEXA EDU OS" },
      { name: "description", content: "Universidades e empresas parceiras." },
    ],
  }),
});

const partners = [
  "Sonangol",
  "BAI",
  "Unitel",
  "BFA",
  "Endiama",
  "TAAG",
  "BCI",
  "Movicel",
  "Standard Bank",
  "ENSA",
  "Refriango",
  "Rede Energia",
];
const unis = [
  "Universidade Óscar Ribas",
  "FECUAN",
  "ISPTEC",
  "Universidade Agostinho Neto",
  "Universidade Católica",
  "Universidade Lusíada",
];

function Parcerias() {
  return (
    <SiteLayout>
      <section className="py-20 hero-bg text-center">
        <div className="mx-auto max-w-4xl px-4">
          <Badge variant="outline" className="mb-4">
            Ecossistema
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Universidades e empresas que confiam na Amplexa.
          </h1>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Empresas parceiras</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-14">
            {partners.map((p) => (
              <Card
                key={p}
                className="p-6 text-center font-semibold text-muted-foreground hover:text-foreground hover:shadow-elegant transition"
              >
                {p}
              </Card>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-6">Universidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {unis.map((u) => (
              <Card key={u} className="p-6 font-semibold">
                {u}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
