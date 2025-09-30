import { TrendingUp, DollarSign, Target, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { TrendChart } from "@/components/TrendChart";
import { ChannelChart } from "@/components/ChannelChart";

const Index = () => {
  return (
    <div className="min-h-screen p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Receita Total"
            value="R$ 48.5K"
            change="+12.5% vs mês anterior"
            trend="up"
            icon={DollarSign}
          />
          <StatCard
            title="Taxa de Conversão"
            value="3.24%"
            change="+0.8% vs mês anterior"
            trend="up"
            icon={Target}
          />
          <StatCard
            title="ROI Médio"
            value="285%"
            change="+23% vs mês anterior"
            trend="up"
            icon={TrendingUp}
          />
          <StatCard
            title="Usuários Ativos"
            value="12.4K"
            change="-2.1% vs mês anterior"
            trend="down"
            icon={Users}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TrendChart />
          <ChannelChart />
        </div>
      </div>
    </div>
  );
};

export default Index;
