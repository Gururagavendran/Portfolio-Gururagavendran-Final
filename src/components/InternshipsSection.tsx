import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const internships = [
  {
    company: "SIDBI",
    role: "Junior Developer (Trainee)",
    period: "Present",
    description: "Currently working on VCF Project in Chennai, contributing to development initiatives.",
    link: "#",
    isCurrent: true,
  },
  {
    company: "iAgami Technologies",
    role: "Summer Intern",
    period: "Jun - Jul 2025",
    description: "Software development for HarvestEye Portal using Angular, Python, HTML/CSS. Conducted security testing with OWASP ZAP & SonarQube.",
    link: "#",
    isCurrent: false,
  },
  {
    company: "Touchmark Descience",
    role: "Project Intern",
    period: "Dec 2024 - Mar 2025",
    description: "Built SurveyScope - a SaaS-based HR survey platform using React, Node, and PSQL with dashboards and analytics.",
    link: "#",
    isCurrent: false,
  },
  {
    company: "Rultosh Edufun",
    role: "Project Intern",
    period: "Mar - Jul 2024",
    description: "Built AI potato grading model using OpenCV & YOLO with real-time detection GUI.",
    link: "#",
    isCurrent: false,
  },
];

const InternshipsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" className="py-32 relative" ref={ref}>
      <div className="absolute right-0 top-1/3 w-1/4 h-80 bg-secondary/5 rounded-l-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on industry experience across software development, AI/ML, and SaaS platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {internships.map((intern, index) => (
            <motion.a
              key={intern.company}
              href={intern.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`glass-card rounded-xl p-5 glow-border cursor-pointer block transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 ${
                intern.isCurrent ? "border-primary/30 bg-primary/5" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-primary" />
                <p className="text-xs text-primary">{intern.period}</p>
                {intern.isCurrent && (
                  <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-medium animate-pulse">
                    Current
                  </span>
                )}
              </div>
              <h4 className="font-display font-semibold mb-1">{intern.company}</h4>
              <p className="text-sm text-muted-foreground mb-2">{intern.role}</p>
              <p className="text-xs text-muted-foreground/80">{intern.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
