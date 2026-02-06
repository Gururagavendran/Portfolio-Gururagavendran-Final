import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, Eye } from "lucide-react";

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

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-32 relative" ref={ref}>
      <div className="absolute right-0 bottom-1/4 w-1/4 h-80 bg-accent/5 rounded-l-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Events & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
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
    </section>
  );
};

export default EventsSection;
