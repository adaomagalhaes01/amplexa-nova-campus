import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logoUor from "@/assets/logo-uor.png";
import logoAmplexa from "@/assets/logo-amplexa.jpeg";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [view, setView] = useState<"student" | "separate">("student");

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-background">
      {/* Left side - Image (50%) */}
      <div className="hidden md:block w-1/2 relative bg-muted">
        {/* Usando a imagem solicitada */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img
          src="/INSCRIÇÕES ABERTAS A SUA HISTÓRIA DE SUCESSO COMEÇA AQUI!A Universidade Óscar Ribas comunica, qu.jpg"
          alt="Login"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 text-white">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Bem-vindo à UÓR</h2>
          <p className="text-lg text-white/90 drop-shadow max-w-md">
            O seu portal académico integrado. Aceda a todos os recursos da universidade num só
            lugar.
          </p>
        </div>
      </div>

      {/* Right side - Form (50%) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="mb-8 flex items-center justify-center sm:justify-start gap-4">
              <img src={logoUor} alt="UÓR Logo" className="h-14 w-auto object-contain rounded-md" />
              <div className="h-10 w-px bg-border" />
              <img
                src={logoAmplexa}
                alt="Amplexa Logo"
                className="h-14 w-auto object-contain rounded-md"
              />
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {view === "student" ? "Portal do Estudante" : "Acesso Separado"}
            </h1>
            <p className="text-muted-foreground mt-2">
              {view === "student"
                ? "Insira as suas credenciais para aceder ao sistema."
                : "Acesso reservado a funcionários e professores."}
            </p>
          </div>

          <div className="bg-card/50 p-1.5 rounded-lg flex border border-border/50 mb-6">
            <button
              onClick={() => setView("student")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                view === "student"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Visão de Aluno
            </button>
            <button
              onClick={() => setView("separate")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                view === "separate"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Acesso Separado
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="identificador">
                  {view === "student" ? "Número de Estudante" : "Email Institucional"}
                </Label>
                <Input
                  id="identificador"
                  placeholder={view === "student" ? "Ex: 20240001" : "nome@uor.ed.ao"}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Palavra-passe</Label>
                  <a href="#" className="text-sm font-medium text-primary hover:underline">
                    Esqueceu-se?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>

            <Button
              asChild
              className="w-full gradient-primary text-primary-foreground font-semibold h-11"
            >
              <Link to={view === "student" ? "/dashboard/estudante" : "/dashboard"}>Entrar</Link>
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            Ainda não tem conta?{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Criar Conta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
