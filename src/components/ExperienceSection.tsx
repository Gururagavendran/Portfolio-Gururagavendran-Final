import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Rultosh Edufun",
    title: "Junior Java Developer",
    type: "Full-time",
    period: "Mar 2026 - Present",
    duration: "1 mo",
    mode: "On-site",
    location: "Chennai, India",
    description:
      "Working as Junior Java Developer at Rultosh Edufun. Wireframing and prototype design using Figma & Lovable.",
    skills: ["TypeScript", "Java", ""],
    isCurrent: true,
  },
  {
    company: "Rultosh Edufun",
    title: "Junior Developer (Trainee)",
    type: "Trainee",
    period: "Jan 2026 - Feb 2026",
    duration: "2 mos",
    mode: "Hybrid",
    location: "Chennai, India",
    description:
      "Project: Venture Debt Fund & Incubator (VCF-VD). Worked as a Junior Developer (Trainee), in contract with SIDBI under the VCF-VD client-assigned project.",
    skills: [],
    isCurrent: false,
  },
  {
    company: "iAgami Technologies",
    title: "Summer Intern",
    type: "Internship",
    period: "Jun - Jul 2025",
    duration: "2 mos",
    mode: "On-site",
    location: "Trichy, India",
    description:
      "Software development for HarvestEye Portal using Angular, Python, HTML/CSS. Conducted security testing with OWASP ZAP & SonarQube.",
    skills: ["Angular", "Python", "OWASP ZAP"],
    isCurrent: false,
  },
  {
    company: "Touchmark Descience",
    title: "Project Intern",
    type: "Internship",
    period: "Dec 2024 - Mar 2025",
    duration: "4 mos",
    mode: "Remote",
    location: "Chennai, India",
    description:
      "Built SurveyScope - a SaaS-based HR survey platform using React, Node, and PSQL with dashboards and analytics.",
    skills: ["React", "Node.js", "PostgreSQL"],
    isCurrent: false,
  },
  {
    company: "Rultosh Edufun",
    title: "Project Intern",
    type: "Internship",
    period: "Mar - Jul 2024",
    duration: "5 mos",
    mode: "Remote",
    location: "Chennai, India",
    description:
      "Built AI potato grading model using OpenCV & YOLO with real-time detection GUI.",
    skills: ["OpenCV", "YOLO", "Python"],
    isCurrent: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiences" className="py-32 relative" ref={ref}>
      <div className="absolute left-0 top-1/4 w-1/3 h-80 bg-primary/5 rounded-r-full blur-3xl" />
      <div className="absolute right-0 top-2/3 w-1/4 h-64 bg-secondary/5 rounded-l-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on industry experience across software development, AI/ML, and SaaS platforms.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

          {experiences.map((role, index) => (
            <motion.div
              key={`${role.company}-${role.title}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[18px] top-1 w-3 h-3 rounded-full border-2 ${
                  role.isCurrent
                    ? "bg-primary border-primary shadow-[0_0_12px] shadow-primary/50 animate-pulse"
                    : "bg-background border-primary/40"
                }`}
              />

              {/* Card */}
              <div
                className={`glass-card rounded-xl p-5 glow-border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 ${
                  role.isCurrent ? "border-primary/20 bg-primary/5" : ""
                }`}
              >
                {/* Company & Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-primary">
                    {role.company}
                  </span>
                  {role.isCurrent && (
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-medium animate-pulse">
                      Current
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className="font-display font-semibold text-lg mb-0.5">
                  {role.title}
                </h4>
                <p className="text-sm text-muted-foreground">{role.type}</p>

                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground/70 mt-2 mb-3 flex-wrap">
                  <span>{role.period}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span>{role.duration}</span>
                  {role.mode && (
                    <>
                      <span className="text-muted-foreground/30">·</span>
                      <span>{role.mode}</span>
                    </>
                  )}
                  {role.location && (
                    <>
                      <span className="text-muted-foreground/30">·</span>
                      <MapPin className="w-3 h-3" />
                      <span>{role.location}</span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground/90 leading-relaxed">
                  {role.description}
                </p>

                {/* Skills */}
                {role.skills.length > 0 && (
                  <div className="flex items-center gap-2 mt-4 flex-wrap">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
