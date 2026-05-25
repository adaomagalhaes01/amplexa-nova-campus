import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Rocket } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({ meta: [
    { title: "Sobre a Amplexa — AMPLEXA EDU OS" },
    { name: "description", content: "Missão, visão e valores da Amplexa Soluções Digitais Inteligentes." },
  ]}),
});

function Sobre() {
  return (
    <SiteLayout>
      <section className="py-20 hero-bg">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Sobre nós</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">Construímos o sistema operativo das universidades africanas.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A Amplexa nasceu para acelerar a transformação digital do ensino superior em Angola, começando pela Universidade Óscar Ribas.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: Target, t: "Missão", d: "Capacitar universidades com tecnologia premium, segura e inteligente." },
            { i: Eye, t: "Visão", d: "Ser a referência africana em sistemas universitários inteligentes." },
            { i: Heart, t: "Valores", d: "Confiança, excelência, inovação e impacto comunitário." },
            { i: Rocket, t: "Objectivos", d: "Digitalizar 100% da operação académica até 2027." },
          ].map((x) => (
            <Card key={x.t} className="p-6">
              <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <x.i className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{x.t}</h3>
              <p className="text-sm text-muted-foreground">{x.d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">A nossa história</h2>
          <div className="prose prose-neutral max-w-none text-muted-foreground space-y-4">
            <p>Fundada por engenheiros e educadores apaixonados pelo futuro do ensino superior, a Amplexa entrega "mais do que controlo, mais do que confiança, em tempo real" — assinatura que aparece em cada produto que lançamos.</p>
            <p>Em parceria com a Universidade Óscar Ribas, desenhámos o AMPLEXA EDU OS para resolver, num único sistema, a operação académica, biometria, IA, comunicação e empregabilidade.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
