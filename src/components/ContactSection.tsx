import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
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
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on 
              projects, or just have a chat about tech and design.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <motion.a
                    href="mailto:hello@johndoe.dev"
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        hello@johndoe.dev
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Message Form */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6">
                  Quick Message
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>
                  <Button variant="hero" className="w-full" size="lg">
                    Send Message
                    <Send size={18} />
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  I typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
