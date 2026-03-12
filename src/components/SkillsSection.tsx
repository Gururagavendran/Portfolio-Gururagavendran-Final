import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    color: "primary",
    skills: ["Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    color: "secondary",
    skills: ["React", "Redux",  "Angular", "HTML/CSS"],
  },
  {
    title: "Backend",
    color: "accent",
    skills: ["Node", "Express", "Spring Boot", "JWT", "Redux Toolkit"],
  },
  
  {
    title: "Database",
    color: "accent",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },

  {
    title: "Tools",
    color: "primary",
    skills: ["VS Code", "Git", "Docker", "Figma"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute right-0 top-1/3 w-1/4 h-80 bg-secondary/5 rounded-l-full blur-3xl" />
      <div className="absolute left-1/4 bottom-0 w-1/3 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My toolbox for turning ideas into reality. From frontend frameworks 
            to computer vision, constantly learning and growing.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 glow-border"
            >
              <h3 className={`font-display text-xl font-semibold mb-6 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-${category.color} group-hover:shadow-[0_0_10px] group-hover:shadow-${category.color} transition-shadow`} />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Computer Vision",
              "REST APIs",
              "Sourcetree",
              "SonarQube",
              "Canva",
              "OWASP ZAP",
              "BMS Basics",
              "Sony Vegas",
              "Lovable"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full glass-card text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
