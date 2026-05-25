import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contactos")({
  component: Contactos,
  head: () => ({ meta: [
    { title: "Contactos — AMPLEXA EDU OS" },
    { name: "description", content: "Fale com a equipa Amplexa × UÓR." },
  ]}),
});

function Contactos() {
  return (
    <SiteLayout>
      <section className="py-16 hero-bg text-center">
        <div className="mx-auto max-w-3xl px-4">
          <Badge variant="outline" className="mb-4">Contactos</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold">Vamos falar.</h1>
          <p className="mt-4 text-muted-foreground">Equipa Amplexa + UÓR à distância de um clique.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            {[
              { i: Phone, t: "Telefone", v: "+244 940 900 323" },
              { i: Mail, t: "Email", v: "info@uor.edu.ao" },
              { i: MapPin, t: "Endereço", v: "Anfiteatro Alberto Maba Chocolate, Luanda" },
              { i: MessageCircle, t: "WhatsApp", v: "+244 940 900 323" },
            ].map((c) => (
              <Card key={c.t} className="p-5 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <c.i className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.t}</div>
                  <div className="font-semibold">{c.v}</div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="lg:col-span-2 p-6">
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Mensagem enviada com sucesso!"); }} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Nome" required />
                <Input placeholder="Email" type="email" required />
              </div>
              <Input placeholder="Assunto" required />
              <Textarea placeholder="Mensagem" rows={6} required />
              <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground border-0 shadow-glow">
                Enviar mensagem
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
