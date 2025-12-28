import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft, CreditCard, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "payment_in",
    title: "Paiement reçu",
    description: "De Sophie Martin",
    amount: "+€2,450.00",
    time: "Il y a 5 min",
    icon: ArrowDownLeft,
    color: "text-success",
  },
  {
    id: 2,
    type: "payment_out",
    title: "Paiement envoyé",
    description: "À Fournisseur ABC",
    amount: "-€850.00",
    time: "Il y a 1 heure",
    icon: ArrowUpRight,
    color: "text-destructive",
  },
  {
    id: 3,
    type: "subscription",
    title: "Nouvel abonnement",
    description: "Plan Premium activé",
    amount: "+€99.00/mois",
    time: "Il y a 2 heures",
    icon: CreditCard,
    color: "text-primary",
  },
  {
    id: 4,
    type: "user",
    title: "Nouveau membre",
    description: "Pierre Durant a rejoint",
    amount: "",
    time: "Il y a 3 heures",
    icon: UserPlus,
    color: "text-accent",
  },
  {
    id: 5,
    type: "payment_in",
    title: "Paiement reçu",
    description: "De Client XYZ",
    amount: "+€1,200.00",
    time: "Il y a 5 heures",
    icon: ArrowDownLeft,
    color: "text-success",
  },
];

const RecentActivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card bg-card/40 border-border/30 overflow-hidden"
    >
      <div className="p-6 border-b border-border/50">
        <h3 className="text-lg font-semibold text-foreground">Activité récente</h3>
      </div>
      <div className="divide-y divide-border/30">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="p-4 hover:bg-secondary/30 transition-colors flex items-center gap-4"
          >
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center bg-secondary",
              activity.color
            )}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {activity.title}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {activity.description}
              </p>
            </div>
            <div className="text-right shrink-0">
              {activity.amount && (
                <p className={cn(
                  "text-sm font-semibold",
                  activity.amount.startsWith("+") ? "text-success" : "text-destructive"
                )}>
                  {activity.amount}
                </p>
              )}
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentActivity;
