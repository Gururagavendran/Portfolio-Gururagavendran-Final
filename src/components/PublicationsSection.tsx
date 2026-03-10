import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Real-Time Monitoring System For Battery SOC Prediction and Metrics Analysis using ML Techniques",
    status: "Presented at ICCCES 2026 (ISBN-indexed); IEEE publication under process.",
    abstract:
      "Developed an intelligent IoT-based battery monitoring system for electric vehicles and energy storage that estimates State of Charge (SOC), State of Health (SOH), and Remaining Useful Life (RUL). Implemented edge-computing architecture with React visualization, evaluating five ML algorithms. The EA-Random Forest hybrid achieved 85% predictive accuracy, outperforming conventional methods.",
  },
  {
    title: "A Digital Twin-Enhanced Battery Management System with Adaptive Learning for Electric Vehicle Applications",
    status: "Presented at ICVADV 2026 (ISBN-indexed); IEEE publication under process.",
    abstract:
      "Created a Digital Twin framework with adaptive machine learning for lithium-ion Battery Management Systems in electric vehicles. Evaluated six ML algorithms on 1,150+ real-world samples, with neural network achieving R² of 0.7789—competitive with Extended Kalman Filter approaches. Integrated anomaly detection (92% precision) and adaptive learning, yielding 13.71% accuracy improvement.",
  },
];

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-32 relative" ref={ref}>
      <div className="absolute right-0 top-1/3 w-1/4 h-80 bg-primary/5 rounded-l-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Research <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed research in battery management systems, machine learning, and IoT.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-6 glow-border hover:border-primary/30 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary shrink-0 mt-1" />
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {pub.title}
                </h3>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium mb-4 w-fit">
                {pub.status}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {pub.abstract}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
