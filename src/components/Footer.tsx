import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            JD
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-secondary" /> by John Doe © {new Date().getFullYear()}
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
