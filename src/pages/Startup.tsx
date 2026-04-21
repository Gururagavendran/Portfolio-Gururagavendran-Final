import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StartupSection from "@/components/StartupSection";

const Startup = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card py-4"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </Button>
          <span className="font-display text-xl font-bold gradient-text">TROVIC Technologies</span>
          <div className="w-24" />
        </div>
      </motion.div>

      <main className="pt-20">
        <StartupSection />
      </main>
    </div>
  );
};

export default Startup;
