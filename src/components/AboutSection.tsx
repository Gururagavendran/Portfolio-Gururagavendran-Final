import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable solutions",
  },
  {
    icon: Palette,
    title: "Design Eye",
    description: "Creating visually stunning interfaces",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Adapting to new technologies quickly",
  },
  {
    icon: Sparkles,
    title: "Creative Mind",
    description: "Bringing innovative ideas to life",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-primary/5 rounded-r-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Profile Card */}
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/30 to-transparent rounded-tr-full" />
                
                {/* Avatar placeholder */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                  <span className="font-display text-6xl gradient-text font-bold">JD</span>
                </div>
                
                {/* Quick Info */}
                <div className="text-center">
                  <h3 className="font-display text-2xl font-bold mb-2">John Doe</h3>
                  <p className="text-muted-foreground mb-4">Final Year Student</p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary">B.Tech CSE</span>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary">2025</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 glass-card rounded-2xl flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate final-year Computer Science student with a love for 
              building digital products. My journey in tech started with curiosity 
              and has evolved into a deep appreciation for both the art and science 
              of software development.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, 
              contributing to open-source projects, or experimenting with the latest 
              technologies. I believe in continuous learning and pushing the boundaries 
              of what's possible.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 glow-border"
                >
                  <item.icon className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
