import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}

export const StatCard = ({ title, value, change, trend, icon: Icon }: StatCardProps) => {
  return (
    <Card className="stat-card animate-in">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {value}
          </h3>
          <p className={`text-sm mt-2 flex items-center gap-1 ${
            trend === "up" ? "text-success" : "text-destructive"
          }`}>
            <span>{trend === "up" ? "↑" : "↓"}</span>
            {change}
          </p>
        </div>
        <div className="p-3 rounded-xl bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};
