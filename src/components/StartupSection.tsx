import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe, Lightbulb, BookOpen, MonitorSmartphone, Building2, Leaf, TrendingUp, Zap, Code } from "lucide-react";
import profileImage from "@/assets/trovic.png";


const highlights = [
{
  icon: MonitorSmartphone,
  title: "Software Solutions",
  description: "Comprehensive software development services across domains"
},
{
  icon: Lightbulb,
  title: "AI Innovations",
  description: "Cutting-edge AI solutions to drive business growth"
},
{
  icon: BookOpen,
  title: "Across Domains",
  description: "Quick to pick up new technologies"
},
{
  icon: Users,
  title: "Team Collaboration",
  description: "Clear technical & professional skills"
}];


const StartupSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const domains = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions for businesses of all sizes, from startups to enterprises.",
      icon: MonitorSmartphone,
      color: "from-blue-500/20 to-blue-500/20"
    },
    {
      title: "Agritech",
      description: "AI-powered solutions for agriculture, including crop monitoring, yield prediction, and precision farming.",
      icon: Leaf,
      color: "from-amber-500/20 to-red-500/20"
    },
    {
      title: "Fintech",
      description: "AI-driven financial solutions, such as fraud detection, risk assessment, and algorithmic trading.",
      icon: TrendingUp,
      color: "from-pink-500/20 to-purple-500/20"
    },
    {
      title: "Electrical & Electronics",
      description: "Electronics & Electrical solutions including IoT applications, and hardware-software integration.",
      icon: Zap,
      color: "from-green-500/20 to-black-500/20"
    }
  ];

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
            className="relative">
            
            {/* Profile Card */}
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/30 to-transparent rounded-tr-full" />
                
                {/* Avatar placeholder */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img src={profileImage} alt="G Gururagavendran" className="w-full h-full object-cover" />
                </div>
                
                {/* Quick Info */}
                <div className="text-center">
                  <h3 className="font-display text-2xl font-bold mb-2">Trovic Technologies</h3>
                  <p className="text-muted-foreground mb-4"> Technological Research through Optimized Vision and Innovative Computing

 </p>
                  <div className="flex items-center justify-center gap-2 text-sm flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary">IT Services and IT Consulting</span>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary">Solution offered across domains</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 glass-card rounded-2xl flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}>
                
                <span className="text-3xl"> <Building2 size={40} color="red"/></span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}>
                
                <span className="text-2xl"><Lightbulb size={40} color="red"/></span>
              </motion.div>
            </div>

            {/* Highlights Grid - below profile card */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) =>
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-xl p-4 glow-border">
                
                  <item.icon className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            
            <h2 className="font-display gradient-text text-4xl md:text-5xl font-bold mb-6">
              TROVIC <span className="font-display ">Technologies</span>
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed text-justify text-primary-foreground"> At <span className="text-primary font-medium"> Trovic Technologies </span> we offer <span className="text-lg mb-6 leading-relaxed text-justify text-primary-foreground"> <span className="text-primary font-medium"> software </span> & <span className="text-primary font-medium"> 
              AI solutions </span> across various domains such as <span className="text-accent font-medium"> Agritech</span>, 
              <span className="text-accent font-medium"> Electronics</span>, and more. </span>
              Our mission is to empower businesses with cutting-edge technology, driving innovation and growth in the digital era. With a focus on quality and customer satisfaction, we strive to deliver solutions that not only meet but exceed expectations.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">
              Our team at <span className="text-primary font-medium">Trovic Technologies</span> consists of experts from various backgrounds, who have worked on real-world projects alongside engineering teams. We are committed to continuous learning and growth, ensuring that we stay at the forefront of technological advancements to provide the best solutions for our clients.
            </p>

            {/* Domains Offered */}
            <div className="mb-8">
              <h4 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
                <Globe size={20} className="text-primary" /> <span className="gradient-text">Domains Offered</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {domains.map((domain, index) => (
                  <motion.div
                    key={domain.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className={`glass-card rounded-lg p-4 glow-border hover:scale-105 transition-transform duration-300 bg-gradient-to-br ${domain.color}`}
                  >
                    <div className="flex gap-3">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20">
                          <domain.icon size={20} className="text-primary" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1 text-sm">
                          {domain.title}
                        </h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {domain.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>


            
          </motion.div>
        </div>
      </div>
    </section>);

};

export default StartupSection;