import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Lightbulb, BookOpen, MessageCircle } from "lucide-react";
import profileImage from "@/assets/profile.png";

const highlights = [
{
  icon: Users,
  title: "Collaborative",
  description: "Team player with internship experience"
},
{
  icon: Lightbulb,
  title: "Creative Mind",
  description: "Innovative approach to problem-solving"
},
{
  icon: BookOpen,
  title: "Adaptive Learner",
  description: "Quick to pick up new technologies"
},
{
  icon: MessageCircle,
  title: "Communication",
  description: "Clear technical & professional skills"
}];


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
                  <h3 className="font-display text-2xl font-bold mb-2">G Gururagavendran</h3>
                  <p className="text-muted-foreground mb-4">Junior Developer @ SIDBI</p>
                  <div className="flex items-center justify-center gap-2 text-sm flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary">BE CSE</span>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary">VCF Project</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 glass-card rounded-2xl flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}>
                
                <span className="text-3xl">🚀</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}>
                
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify">Passionate Computer Science Engineering undergraduate, currently working as a Junior Java Developer at Rultosh Edufun under SIDBI, Chennai VCF-VD Project. Eager to grow as a Software Developer with a keen interest in designing, bringing strong skills in communication, technical adaptability, coding, and creativity.

              <span className="text-primary font-medium"></span> at 
              <span className="text-primary font-medium"></span> under their VCF Project. 
              Eager to grow as a Software Developer with a keen interest in designing, bringing strong 
              skills in communication, technical adaptability, coding, and creativity.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">
              I've interned at <span className="text-primary font-medium">iAgami Technologies</span>, <span className="text-secondary font-medium">Touchmark Descience</span>, 
              and <span className="text-accent font-medium">Rultosh Edufun</span>, working on real-world projects alongside engineering teams. 
              I've also actively participated in project expos, symposiums, and technical events 
              that shaped my practical knowledge and team dynamics.
            </p>

            {/* Education */}
            <div className="glass-card rounded-xl p-5 mb-8 glow-border">
              <h4 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
                🎓 <span className="gradient-text">Education</span>
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">BE — Computer Science & Engineering</span> · St. Joseph's College of Engineering, Chennai
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">HSC & SSC</span> · Narayana E-Techno School
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
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
        </div>
      </div>
    </section>);

};

export default AboutSection;