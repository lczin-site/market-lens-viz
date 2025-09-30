import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { canal: "Instagram", alcance: 12000, engajamento: 8500 },
  { canal: "Facebook", alcance: 9800, engajamento: 6200 },
  { canal: "LinkedIn", alcance: 7500, engajamento: 5800 },
  { canal: "TikTok", alcance: 15000, engajamento: 11000 },
  { canal: "Email", alcance: 6000, engajamento: 4200 },
];

export const ChannelChart = () => {
  return (
    <Card className="glass-card p-6 animate-in">
      <h3 className="text-lg font-semibold mb-6">Performance por Canal</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="canal" 
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
          <Legend />
          <Bar 
            dataKey="alcance" 
            fill="hsl(var(--chart-1))" 
            radius={[8, 8, 0, 0]}
          />
          <Bar 
            dataKey="engajamento" 
            fill="hsl(var(--chart-3))" 
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
