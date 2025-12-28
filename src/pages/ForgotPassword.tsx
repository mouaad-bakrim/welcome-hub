import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ArrowLeft, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/components/AuthLayout";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSuccess(true);
    toast({
      title: "Email envoyé!",
      description: "Vérifiez votre boîte de réception pour réinitialiser votre mot de passe.",
    });
    setIsLoading(false);
  };

  if (isSuccess) {
    return (
      <AuthLayout 
        title="Email envoyé!" 
        subtitle="Vérifiez votre boîte de réception"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-20 h-20 rounded-full bg-success/20 flex items-center justify-center"
          >
            <CheckCircle className="h-10 w-10 text-success" />
          </motion.div>
          
          <div className="space-y-2">
            <p className="text-foreground">
              Un email a été envoyé à
            </p>
            <p className="text-primary font-medium">{email}</p>
            <p className="text-muted-foreground text-sm mt-4">
              Cliquez sur le lien dans l'email pour réinitialiser votre mot de passe.
            </p>
          </div>

          <div className="pt-4 space-y-3">
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => setIsSuccess(false)}
            >
              Renvoyer l'email
            </Button>
            <Link to="/login">
              <Button variant="ghost" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à la connexion
              </Button>
            </Link>
          </div>
        </motion.div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Mot de passe oublié?" 
      subtitle="Entrez votre email pour réinitialiser"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <Label htmlFor="email" className="text-muted-foreground text-sm">
            Adresse email
          </Label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="vous@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-11"
              required
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Nous vous enverrons un lien pour réinitialiser votre mot de passe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                Envoyer le lien
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>

          <Link to="/login">
            <Button variant="ghost" className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la connexion
            </Button>
          </Link>
        </motion.div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
