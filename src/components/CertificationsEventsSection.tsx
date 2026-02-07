import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, CheckCircle, Trophy, Users, Eye } from "lucide-react";

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

const events = [
  {
    text: "Won 3rd Prize at Tech Forge Expo, Euphoria 2025, and ₹2,000 cash prize at the technical project expo organized by Kalasalingam Academy of Research and Education, Srivilliputhur.",
    icon: Trophy,
    highlight: true,
  },
  {
    text: "Participated in InnovateXpo project expo, organized by SJIT.",
    icon: Eye,
    highlight: false,
  },
  {
    text: "Organised and volunteered at Cryptix Symposium, organized by Dept of CSE, SJCE.",
    icon: Users,
    highlight: false,
  },
  {
    text: "Won 3rd prize in the college cultural quiz program, conducted by Dept of CSE, SJCE.",
    icon: Trophy,
    highlight: true,
  },
  {
    text: "Attended In-plant visit to TANSAM Center of Excellence, powered by Siemens, Taramani.",
    icon: Eye,
    highlight: false,
  },
];

const CertificationsEventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications-events" className="py-32 relative" ref={ref}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-80 bg-secondary/5 rounded-r-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-1/4 h-80 bg-accent/5 rounded-l-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Certifications */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
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

          {/* Events & Achievements */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Events & Achievements
            </h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`glass-card rounded-xl p-5 flex items-start gap-4 glow-border hover:border-primary/30 transition-all duration-500 ${
                    event.highlight ? "border-primary/20 bg-primary/5" : ""
                  }`}
                >
                  <event.icon
                    className={`w-5 h-5 shrink-0 mt-0.5 ${
                      event.highlight ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsEventsSection;
