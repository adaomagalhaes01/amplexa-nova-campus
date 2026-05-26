import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Calendar, GraduationCap, Clock } from 'lucide-react'

export const Route = createFileRoute('/dashboard/estudante')({
  component: AlunoDashboard,
})

const cadeiras = [
  { nome: 'Introdução à Contabilidade', professor: 'Dr. Silva', nota: 16, estado: 'Aprovado', creditos: 6 },
  { nome: 'Microeconomia', professor: 'Dra. Costa', nota: 14, estado: 'Aprovado', creditos: 6 },
  { nome: 'Matemática I', professor: 'Dr. Almeida', nota: null, estado: 'Em curso', creditos: 6 },
  { nome: 'Introdução à Gestão', professor: 'Dr. Santos', nota: 18, estado: 'Aprovado', creditos: 5 },
  { nome: 'Direito Empresarial', professor: 'Dra. Lima', nota: null, estado: 'Em curso', creditos: 6 },
]

function AlunoDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Portal do Estudante</h1>
          <p className="text-sm text-muted-foreground">Bem-vindo(a), Maria Soares (20240001)</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="text-sm py-1">Contabilidade e Finanças</Badge>
          <Badge variant="outline" className="text-sm py-1">1º Ano</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 flex flex-col gap-2 border-l-4 border-l-primary">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-sm font-medium">Média Global</span>
            <GraduationCap className="h-4 w-4" />
          </div>
          <span className="text-2xl font-bold">16.0</span>
          <span className="text-xs text-green-500">+0.5 este semestre</span>
        </Card>
        
        <Card className="p-4 flex flex-col gap-2 border-l-4 border-l-blue-500">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-sm font-medium">Cadeiras em Curso</span>
            <BookOpen className="h-4 w-4" />
          </div>
          <span className="text-2xl font-bold">5</span>
          <span className="text-xs text-muted-foreground">Semestre 1</span>
        </Card>

        <Card className="p-4 flex flex-col gap-2 border-l-4 border-l-yellow-500">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-sm font-medium">Faltas</span>
            <Calendar className="h-4 w-4" />
          </div>
          <span className="text-2xl font-bold">3</span>
          <span className="text-xs text-muted-foreground">Limite de 15</span>
        </Card>

        <Card className="p-4 flex flex-col gap-2 border-l-4 border-l-accent">
          <div className="flex justify-between items-center text-muted-foreground">
            <span className="text-sm font-medium">Próximo Exame</span>
            <Clock className="h-4 w-4" />
          </div>
          <span className="text-xl font-bold">Matemática I</span>
          <span className="text-xs text-accent font-medium">Em 3 dias (15 Out)</span>
        </Card>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">As Minhas Cadeiras e Notas</h2>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead className="bg-muted/50 text-left text-xs text-muted-foreground border-b">
              <tr>
                <th className="px-4 py-3 font-medium">Cadeira</th>
                <th className="px-4 py-3 font-medium">Professor</th>
                <th className="px-4 py-3 font-medium">Créditos</th>
                <th className="px-4 py-3 font-medium">Estado</th>
                <th className="px-4 py-3 font-medium text-right">Nota Final</th>
              </tr>
            </thead>
            <tbody>
              {cadeiras.map((c, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-medium">{c.nome}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.professor}</td>
                  <td className="px-4 py-3">{c.creditos} ECTS</td>
                  <td className="px-4 py-3">
                    <Badge variant={c.estado === 'Aprovado' ? 'default' : 'secondary'} 
                           className={c.estado === 'Aprovado' ? 'bg-green-500/10 text-green-600 hover:bg-green-500/20' : ''}>
                      {c.estado}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right font-bold">
                    {c.nota ? (
                      <span className={c.nota >= 10 ? 'text-green-600' : 'text-red-600'}>
                        {c.nota}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
