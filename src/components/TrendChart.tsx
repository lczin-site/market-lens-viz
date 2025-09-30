import { Card } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { name: "Jan", vendas: 4000, conversoes: 2400 },
  { name: "Fev", vendas: 3000, conversoes: 1398 },
  { name: "Mar", vendas: 2000, conversoes: 9800 },
  { name: "Abr", vendas: 2780, conversoes: 3908 },
  { name: "Mai", vendas: 1890, conversoes: 4800 },
  { name: "Jun", vendas: 2390, conversoes: 3800 },
  { name: "Jul", vendas: 3490, conversoes: 4300 },
];

export const TrendChart = () => {
  return (
    <Card className="glass-card p-6 animate-in">
      <h3 className="text-lg font-semibold mb-6">Tendências de Vendas e Conversões</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorConversoes" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: "12px" }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: "12px" }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Area 
            type="monotone" 
            dataKey="vendas" 
            stroke="hsl(var(--chart-1))" 
            fillOpacity={1}
            fill="url(#colorVendas)"
            strokeWidth={2}
          />
          <Area 
            type="monotone" 
            dataKey="conversoes" 
            stroke="hsl(var(--chart-2))" 
            fillOpacity={1}
            fill="url(#colorConversoes)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
