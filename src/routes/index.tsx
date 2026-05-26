import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Fingerprint,
  Brain,
  Briefcase,
  BarChart3,
  Bell,
  GraduationCap,
  ShieldCheck,
  Zap,
  Globe2,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import event1 from "@/assets/event-mercado.jpg";
import event2 from "@/assets/event-semana.jpg";
import event3 from "@/assets/event-debate.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "AMPLEXA EDU OS — Plataforma Inteligente Universitária | UÓR" },
      {
        name: "description",
        content:
          "Gestão académica, biometria, IA e Career Connect numa única plataforma premium para a UÓR.",
      },
    ],
  }),
});

const chartData = Array.from({ length: 12 }, (_, i) => ({
  m: i,
  v: 40 + Math.sin(i / 2) * 18 + i * 3,
  a: 30 + Math.cos(i / 3) * 14 + i * 2,
}));

const modules = [
  {
    icon: GraduationCap,
    title: "Gestão Académica",
    desc: "Notas, horários, frequência, exames e calendário num único hub.",
    grad: "from-primary to-primary-glow",
  },
  {
    icon: Fingerprint,
    title: "Sistema Biométrico",
    desc: "Presença e controlo de acesso com reconhecimento facial e digital.",
    grad: "from-accent to-accent-glow",
  },
  {
    icon: Brain,
    title: "IA Académica",
    desc: "Previsão de risco, ranking e recomendações automáticas por aluno.",
    grad: "from-primary to-accent",
  },
  {
    icon: Briefcase,
    title: "Career Connect",
    desc: "Estágios, recrutamento e oportunidades com empresas parceiras.",
    grad: "from-accent to-primary",
  },
  {
    icon: Bell,
    title: "Comunicação",
    desc: "Notificações em tempo real, mensagens internas e comunicados oficiais.",
    grad: "from-primary-glow to-primary",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Dashboards executivos com KPIs académicos e financeiros vivos.",
    grad: "from-accent-glow to-accent",
  },
];

const stats = [
  { v: "12K+", l: "Estudantes" },
  { v: "98%", l: "Assiduidade" },
  { v: "350+", l: "Docentes" },
  { v: "40+", l: "Empresas parceiras" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden hero-bg">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-5 gap-1.5 border-primary/30 bg-primary/5 text-primary"
              >
                <Sparkles className="h-3.5 w-3.5" /> Sistema Operativo Universitário · v1.0
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                A nova era da{" "}
                <span className="gradient-text-primary">universidade inteligente</span> em Angola.
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
                AMPLEXA EDU OS unifica gestão académica, biometria, IA e Career Connect numa
                plataforma premium feita para a Universidade Óscar Ribas e para o futuro do ensino
                superior africano.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="gradient-primary text-primary-foreground border-0 shadow-glow"
                >
                  <Link to="/dashboard">
                    Explorar a Dashboard <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/funcionalidades">Ver funcionalidades</Link>
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold gradient-text-accent">{s.v}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 gradient-primary opacity-20 blur-3xl rounded-full" />
              <Card className="relative p-5 shadow-elegant glass overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground">Overview Académico</div>
                    <div className="text-lg font-semibold">Desempenho · 2025</div>
                  </div>
                  <Badge className="gradient-accent text-accent-foreground border-0">Live</Badge>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { l: "Aprovação", v: "92%" },
                    { l: "Presença", v: "97%" },
                    { l: "Estágios", v: "1.2K" },
                  ].map((k) => (
                    <div key={k.l} className="rounded-lg bg-muted/60 p-3">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {k.l}
                      </div>
                      <div className="text-lg font-bold">{k.v}</div>
                    </div>
                  ))}
                </div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(220 90% 60%)" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="hsl(220 90% 60%)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(25 95% 55%)" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="hsl(25 95% 55%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="m" hide />
                      <Tooltip
                        contentStyle={{
                          background: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: 8,
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke="hsl(220 90% 60%)"
                        fill="url(#g1)"
                        strokeWidth={2}
                      />
                      <Area
                        type="monotone"
                        dataKey="a"
                        stroke="hsl(25 95% 55%)"
                        fill="url(#g2)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 hidden sm:block"
              >
                <Card className="p-3 glass shadow-accent flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg gradient-accent flex items-center justify-center">
                    <Fingerprint className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Check-in biométrico</div>
                    <div className="text-sm font-semibold">+248 hoje</div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="outline" className="mb-4">
              Módulos integrados
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Tudo o que uma universidade moderna precisa.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Seis módulos inteligentes desenhados para escalar a UÓR para o nível das melhores
              EdTechs do mundo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="p-6 h-full group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/60">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${m.grad} flex items-center justify-center mb-4 shadow-soft`}
                  >
                    <m.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Como funciona
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Da matrícula ao diploma — automatizado.
              </h2>
              <div className="space-y-5">
                {[
                  {
                    i: ShieldCheck,
                    t: "Identidade biométrica",
                    d: "Cada estudante é registado com biometria facial e digital.",
                  },
                  {
                    i: Zap,
                    t: "Operação em tempo real",
                    d: "Presenças, notas e eventos sincronizam em segundos.",
                  },
                  {
                    i: Brain,
                    t: "Inteligência preditiva",
                    d: "A IA detecta risco académico antes que aconteça.",
                  },
                  {
                    i: Globe2,
                    t: "Career Connect",
                    d: "Empresas acedem talentos qualificados via marketplace.",
                  },
                ].map((s) => (
                  <div key={s.t} className="flex gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <s.i className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{s.t}</h4>
                      <p className="text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-6 shadow-elegant">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold">Risco Académico · IA</div>
                <Badge className="gradient-primary text-primary-foreground border-0">
                  12 alertas
                </Badge>
              </div>
              <div className="h-40 mb-6">
                <ResponsiveContainer>
                  <LineChart data={chartData}>
                    <Line
                      type="monotone"
                      dataKey="v"
                      stroke="hsl(25 95% 55%)"
                      strokeWidth={3}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="a"
                      stroke="hsl(220 90% 60%)"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {[
                  { n: "Engenharia Informática · 3º ano", p: 86 },
                  { n: "Direito · 2º ano", p: 64 },
                  { n: "Gestão · 4º ano", p: 92 },
                ].map((s) => (
                  <div key={s.n}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{s.n}</span>
                      <span className="font-medium">{s.p}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full gradient-primary" style={{ width: `${s.p}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <Badge variant="outline" className="mb-3">
                Vida universitária
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">Acontece na UÓR.</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/galeria">
                Ver galeria completa <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[event1, event2, event3].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Evento UÓR ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs opacity-80">Faculdade · UÓR</div>
                  <div className="font-semibold">Evento académico</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            A confiança de quem ensina e aprende.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                n: "Prof. Francisco Frederico",
                r: "Docente UÓR",
                q: "A IA da Amplexa antecipou risco em alunos meses antes dos exames. Mudança real.",
              },
              {
                n: "Aguinaldo Gando",
                r: "Coordenador FECUAN",
                q: "Pela primeira vez, a operação académica corre num único sistema premium.",
              },
              {
                n: "Maria S.",
                r: "Estudante · 4º ano",
                q: "Vejo as minhas notas, frequência e estágios num só lugar. Parece um app de banco.",
              },
            ].map((t) => (
              <Card key={t.n} className="p-6 shadow-soft hover:shadow-elegant transition">
                <Quote className="h-6 w-6 text-accent mb-3" />
                <p className="text-sm leading-relaxed mb-5">"{t.q}"</p>
                <div className="text-sm">
                  <div className="font-semibold">{t.n}</div>
                  <div className="text-muted-foreground text-xs">{t.r}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "O que é o AMPLEXA EDU OS?",
                a: "Um sistema operativo universitário integrado, desenvolvido pela Amplexa para a UÓR.",
              },
              {
                q: "Inclui biometria?",
                a: "Sim. Reconhecimento facial e digital para presença e controlo de acesso.",
              },
              {
                q: "Funciona em telemóvel?",
                a: "Totalmente responsivo e pronto para PWA — funciona em qualquer dispositivo.",
              },
              {
                q: "Como funciona o Career Connect?",
                a: "Empresas parceiras publicam vagas e a IA conecta os melhores talentos.",
              },
            ].map((f, i) => (
              <AccordionItem key={i} value={`f${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden p-10 lg:p-16 border-0 gradient-primary text-primary-foreground shadow-glow">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Eleve a sua universidade ao nível internacional.
              </h2>
              <p className="text-primary-foreground/85 text-lg mb-8">
                Junte-se à transformação digital que está a redefinir o ensino superior em Angola.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary" className="text-foreground">
                  <Link to="/dashboard">Entrar na plataforma</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/contactos">Falar com a equipa</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {["Cloud-native", "Pronto para PWA", "Mobile-first", "Dark mode"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
