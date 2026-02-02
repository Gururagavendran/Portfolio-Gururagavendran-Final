import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Gururagavendran",
    username: "@Gururagavendran",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gururagavendran-g-62a023261/",
    username: "Gururagavendran G",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:gururagavendran52@gmail.com",
    username: "gururagavendran52@gmail.com",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute right-0 top-1/3 w-1/3 h-96 bg-secondary/5 rounded-l-full blur-3xl" />
      <div className="absolute left-1/4 bottom-0 w-1/4 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to learning, growing, and contributing to meaningful 
            tech-driven projects. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 glow-border hover:border-primary/30 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <link.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {link.label}
                </h3>
                <p className="text-sm text-muted-foreground break-all">
                  {link.username}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span>Tamil Nadu, India</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8 text-center glow-border"
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Whether you have a project in mind, want to discuss opportunities, 
              or just want to say hi — I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:gururagavendran52@gmail.com">
                  <Send size={18} className="mr-2" />
                  Send me an Email
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/gururagavendran-g-62a023261/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} className="mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
