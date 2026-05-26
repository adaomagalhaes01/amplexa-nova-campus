import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Fingerprint, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/dashboard/biometria")({ component: Bio });

const logs = Array.from({ length: 10 }, (_, i) => ({
  n: ["Maria S.", "João P.", "Ana L.", "Carlos N.", "Sofia A."][i % 5],
  t: `${7 + (i % 5)}:${(i * 7) % 60 < 10 ? "0" : ""}${(i * 7) % 60}`,
  l: ["Anfiteatro A", "Bloco B · Sala 12", "Bloco C", "Biblioteca", "Lab. Info"][i % 5],
  ok: i !== 3,
}));

function Bio() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          <Fingerprint className="h-7 w-7 text-primary" /> Sistema Biométrico
        </h1>
        <p className="text-sm text-muted-foreground">
          Presenças, acessos e monitoramento em tempo real.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { l: "Check-ins hoje", v: "1,284" },
          { l: "Acessos negados", v: "7" },
          { l: "Dispositivos online", v: "42" },
          { l: "Uptime", v: "99.9%" },
        ].map((k) => (
          <Card key={k.l} className="p-5">
            <div className="text-xs text-muted-foreground">{k.l}</div>
            <div className="text-2xl font-bold mt-1">{k.v}</div>
          </Card>
        ))}
      </div>
      <Card className="p-5">
        <h3 className="font-semibold mb-4">Logs em tempo real</h3>
        <div className="space-y-2">
          {logs.map((l, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b last:border-0 text-sm">
              <div
                className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${l.ok ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"}`}
              >
                {l.ok ? <CheckCircle2 className="h-4 w-4" /> : <Fingerprint className="h-4 w-4" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{l.n}</div>
                <div className="text-xs text-muted-foreground">{l.l}</div>
              </div>
              <Badge variant="outline">{l.t}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
