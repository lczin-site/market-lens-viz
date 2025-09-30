import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

export const Header = () => {
  return (
    <header className="mb-8 animate-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            Análise de Mercado Digital
          </h1>
          <p className="text-muted-foreground mt-2">
            Dashboard completo de métricas e tendências
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            7 dias
          </Button>
          <Button variant="outline" size="sm">
            30 dias
          </Button>
          <Button variant="default" size="sm">
            90 dias
          </Button>
        </div>
      </div>
    </header>
  );
};
