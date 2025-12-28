import { motion } from "framer-motion";
import { DollarSign, Users, TrendingUp, CreditCard, Plus } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Revenus totaux",
    value: "€45,231",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Utilisateurs actifs",
    value: "2,338",
    change: "+15.3%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Taux de conversion",
    value: "12.5%",
    change: "+4.2%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Transactions",
    value: "1,423",
    change: "-2.3%",
    changeType: "negative" as const,
    icon: CreditCard,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <div className="pl-64">
        <Header />
        
        <main className="p-6 space-y-6">
          {/* Welcome section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Bonjour, Jean! 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Voici ce qui se passe avec vos projets aujourd'hui.
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nouvelle transaction
            </Button>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.title} {...stat} delay={index * 0.1} />
            ))}
          </div>

          {/* Charts and activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div className="lg:col-span-1">
              <RecentActivity />
            </div>
          </div>

          {/* Quick actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20 p-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Prêt à développer votre activité?
                </h3>
                <p className="text-muted-foreground mt-1">
                  Découvrez nos outils avancés pour optimiser vos performances.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">En savoir plus</Button>
                <Button variant="gradient">Démarrer</Button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
