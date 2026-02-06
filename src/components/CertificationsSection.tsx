import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Database Design and Basic SQL in PostgreSQL",
    issuer: "University of Michigan (Coursera)",
    status: "ongoing",
  },
  {
    title: "JavaScript Essentials 1 & 2",
    issuer: "Cisco Network Academy",
    status: "May 2025",
  },
  {
    title: "Database Management System",
    issuer: "IIT Kharagpur (NPTEL)",
    status: "Mar 2025",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-32 relative" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-80 bg-secondary/5 rounded-r-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const isOngoing = cert.status === "ongoing";
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="glass-card rounded-xl p-5 glow-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  {isOngoing ? (
                    <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-[10px] font-medium flex items-center gap-1">
                      <Clock size={10} /> Ongoing
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-medium flex items-center gap-1">
                      <CheckCircle size={10} /> {cert.status}
                    </span>
                  )}
                </div>
                <h4 className="font-display font-semibold text-sm mb-2">{cert.title}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
