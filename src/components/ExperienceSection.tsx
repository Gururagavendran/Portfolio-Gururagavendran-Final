import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";

const roles = [
  {
    title: "Junior Java Developer",
    type: "Full-time",
    period: "Mar 2026 - Present",
    duration: "1 mo",
    mode: "On-site",
    description:
      "Working as Junior Java Developer at Rultosh Edufun. Wireframing and prototype design using Figma & Lovable.",
    skills: ["TypeScript", "Java", "+8 skills"],
    isCurrent: true,
  },
  {
    title: "Junior Developer (Trainee)",
    type: "Trainee",
    period: "Jan 2026 - Feb 2026",
    duration: "2 mos",
    mode: "Hybrid",
    description:
      "Project: Venture Debt Fund & Incubator (VCF-VD). Worked as a Junior Developer (Trainee), in contract with SIDBI under the VCF-VD client-assigned project.",
    skills: [],
    isCurrent: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="absolute left-0 top-1/4 w-1/3 h-80 bg-primary/5 rounded-r-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey at Rultosh Edufun Private Limited, Chennai.
          </p>
        </motion.div>

        {/* Company Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="glass-card rounded-2xl p-6 glow-border border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">
                  Rultosh Edufun Private Limited
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Chennai, Tamil Nadu, India</span>
                  <span className="text-muted-foreground/40">·</span>
                  <Clock className="w-3.5 h-3.5" />
                  <span>3 mos</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
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
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-display font-semibold text-lg">
                        {role.title}
                      </h4>
                      {role.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-medium animate-pulse">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {role.type}
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground/70 mb-3 flex-wrap">
                  <span>{role.period}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span>{role.duration}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span>{role.mode}</span>
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
