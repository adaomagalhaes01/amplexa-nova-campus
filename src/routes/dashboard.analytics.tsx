import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Route = createFileRoute("/dashboard/analytics")({ component: Analytics });

const d1 = Array.from({ length: 12 }, (_, i) => ({ m: i, v: 50 + Math.sin(i / 2) * 15 + i * 3 }));
const d2 = ["Eng", "Direito", "Gestão", "Eco", "Cont", "Mkt"].map((n, i) => ({
  n,
  a: 60 + i * 4,
  b: 50 + i * 6,
}));

function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          <BarChart3 className="h-7 w-7 text-primary" /> Analytics
        </h1>
        <p className="text-sm text-muted-foreground">Relatórios e dados em tempo real.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="p-5">
          <h3 className="font-semibold mb-4">Receitas mensais (M Kz)</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={d1}>
                <defs>
                  <linearGradient id="ar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(220 90% 60%)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="hsl(220 90% 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="m" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
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
                  fill="url(#ar)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-5">
          <h3 className="font-semibold mb-4">Aprovação vs reprovação</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={d2}>
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
                <Bar dataKey="a" fill="hsl(220 90% 60%)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="b" fill="hsl(25 95% 55%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-5 lg:col-span-2">
          <h3 className="font-semibold mb-4">Frequência global</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={d1}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="m" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke="hsl(25 95% 55%)"
                  strokeWidth={3}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
