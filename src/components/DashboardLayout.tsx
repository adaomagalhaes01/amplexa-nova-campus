import { Link, useRouterState, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Brain,
  Briefcase,
  CalendarDays,
  Bell,
  Fingerprint,
  BarChart3,
  GraduationCap,
  Settings,
  Menu,
  Search,
  ChevronLeft,
  LogOut,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logoUor from "@/assets/logo-uor.png";
import logoAmplexa from "@/assets/logo-amplexa.jpeg";

const nav = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { to: "/dashboard/estudante", icon: GraduationCap, label: "Área do Aluno" },
  { to: "/dashboard/estudantes", icon: Users, label: "Estudantes" },
  { to: "/dashboard/ia", icon: Brain, label: "IA Académica" },
  { to: "/dashboard/career", icon: Briefcase, label: "Career Connect" },
  { to: "/dashboard/eventos", icon: CalendarDays, label: "Eventos" },
  { to: "/dashboard/biometria", icon: Fingerprint, label: "Biometria" },
  { to: "/dashboard/analytics", icon: BarChart3, label: "Analytics" },
  { to: "/dashboard/notificacoes", icon: Bell, label: "Notificações" },
] as const;

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex bg-secondary/30">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-foreground/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:sticky top-0 left-0 h-screen z-50 bg-sidebar text-sidebar-foreground
        transition-all duration-300 flex flex-col
        ${collapsed ? "w-20" : "w-64"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img src={logoUor} alt="UÓR" className="h-8 w-8 rounded shrink-0" />
            {!collapsed && (
              <>
                <img src={logoAmplexa} alt="Amplexa" className="h-8 w-8 rounded shrink-0" />
                <span className="text-xs font-bold gradient-text-accent ml-1">EDU OS</span>
              </>
            )}
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:block p-1 rounded hover:bg-sidebar-accent"
          >
            <ChevronLeft
              className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all relative
                  ${
                    active
                      ? "bg-sidebar-accent text-sidebar-primary-foreground font-semibold"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                  }`}
              >
                {active && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 gradient-accent rounded-r" />
                )}
                <n.icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span className="truncate">{n.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-sidebar-border space-y-1">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent"
          >
            <Settings className="h-5 w-5" />
            {!collapsed && <span>Configurações</span>}
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent"
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span>Sair</span>}
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-30 glass border-b border-border h-16 flex items-center px-4 sm:px-6 gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded hover:bg-muted"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Procurar estudantes, eventos, cursos…" className="pl-9 h-9" />
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full gradient-accent" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
              A
            </div>
            <div className="hidden sm:block text-sm leading-tight">
              <div className="font-semibold">Admin UÓR</div>
              <div className="text-xs text-muted-foreground">Reitoria</div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export { Badge, GraduationCap };
