import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Calendar, Briefcase, ArrowUpRight, Activity } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export const Route = createFileRoute("/dashboard/")({
  component: Overview,
});

const kpis = [
  { l: "Estudantes", v: "12,438", d: "+312 este mês", i: Users, c: "from-primary to-primary-glow" },
  {
    l: "Assiduidade",
    v: "97.2%",
    d: "+1.4% vs período",
    i: Activity,
    c: "from-accent to-accent-glow",
  },
  { l: "Eventos", v: "48", d: "12 esta semana", i: Calendar, c: "from-primary to-accent" },
  {
    l: "Estágios activos",
    v: "1,284",
    d: "+86 vagas novas",
    i: Briefcase,
    c: "from-accent to-primary",
  },
];

const trend = Array.from({ length: 12 }, (_, i) => ({
  m: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i],
  a: 80 + Math.sin(i) * 8 + i,
  b: 70 + Math.cos(i) * 6 + i,
}));
const bars = ["Eng. Info", "Direito", "Gestão", "Economia", "Contab.", "Marketing"].map((n, i) => ({
  n,
  v: 60 + ((i * 7) % 35),
}));
const pie = [
  { n: "Aprovados", v: 78 },
  { n: "Em risco", v: 14 },
  { n: "Reprovados", v: 8 },
];
const pieColors = ["hsl(220 90% 60%)", "hsl(25 95% 55%)", "hsl(0 75% 60%)"];

const activity = [
  { t: "Nova candidatura · Estágio Sonangol", w: "há 2 min", b: "primary" },
  { t: "Pauta lançada · Macroeconomia II", w: "há 18 min", b: "accent" },
  { t: "Alerta IA · 3 estudantes em risco", w: "há 1h", b: "destructive" },
  { t: "Check-in biométrico · Anfiteatro A", w: "há 2h", b: "primary" },
  { t: "Evento publicado · Semana D'CHAA", w: "ontem", b: "accent" },
];

function Overview() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Bem-vindo de volta 👋</h1>
          <p className="text-sm text-muted-foreground">
            Aqui está o estado da UÓR — em tempo real.
          </p>
        </div>
        <Badge className="gradient-primary text-primary-foreground border-0">
          Sistema · Saudável
        </Badge>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k, i) => (
          <motion.div
            key={k.l}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="p-5 hover:shadow-elegant transition group">
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`h-10 w-10 rounded-xl bg-gradient-to-br ${k.c} flex items-center justify-center`}
                >
                  <k.i className="h-5 w-5 text-white" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
              </div>
              <div className="text-2xl font-bold">{k.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{k.l}</div>
              <div className="text-[11px] text-accent mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> {k.d}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Chart big */}
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Frequência & Desempenho</h3>
              <p className="text-xs text-muted-foreground">Últimos 12 meses</p>
            </div>
            <Badge variant="outline">Live</Badge>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={trend}>
                <defs>
                  <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(220 90% 60%)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="hsl(220 90% 60%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gb" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(25 95% 55%)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="hsl(25 95% 55%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="m" stroke="var(--muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="a"
                  stroke="hsl(220 90% 60%)"
                  fill="url(#ga)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="b"
                  stroke="hsl(25 95% 55%)"
                  fill="url(#gb)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Pie */}
        <Card className="p-5">
          <h3 className="font-semibold mb-1">Estado dos alunos</h3>
          <p className="text-xs text-muted-foreground mb-3">Distribuição académica</p>
          <div className="h-48">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={pie} dataKey="v" innerRadius={45} outerRadius={75} paddingAngle={3}>
                  {pie.map((_, i) => (
                    <Cell key={i} fill={pieColors[i]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {pie.map((p, i) => (
              <div key={p.n} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: pieColors[i] }} />
                  {p.n}
                </span>
                <span className="font-semibold">{p.v}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="p-5 lg:col-span-2">
          <h3 className="font-semibold mb-4">Inscrições por curso</h3>
          <div className="h-56">
            <ResponsiveContainer>
              <BarChart data={bars}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="n" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                  }}
                />
                <Bar dataKey="v" fill="hsl(220 90% 60%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="font-semibold mb-4">Actividade recente</h3>
          <div className="space-y-3">
            {activity.map((a, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div
                  className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${a.b === "primary" ? "bg-primary" : a.b === "accent" ? "bg-accent" : "bg-destructive"}`}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate">{a.t}</p>
                  <p className="text-xs text-muted-foreground">{a.w}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
