import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Battery, Camera, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-Time Battery Metrics Monitoring",
    description:
      "Built a real-time metrics visualization system using React, Chart.js, and MongoDB-Node.js. Implemented AI-driven analysis for battery performance tracking with live insights, historical trends, and predictive analytics.",
    tags: ["React", "Node.js", "MongoDB", "Chart.js", "AI/ML"],
    icon: Battery,
    gradient: "from-primary/20 to-accent/20",
    highlights: [
      "Real-time SOC/SOH tracking",
      "Sensor data integration",
      "Predictive analytics",
    ],
  },
  {
    title: "Early Warning Traffic Detection",
    description:
      "Developed a computer vision system to detect traffic violations and prevent pedestrian accidents using OpenCV and Python. Implemented object detection and motion tracking for real-time alerts.",
    tags: ["Python", "OpenCV", "Computer Vision", "YOLO"],
    icon: Camera,
    gradient: "from-secondary/20 to-primary/20",
    highlights: [
      "Multi-violation detection",
      "Real-time alerts",
      "Motion tracking",
    ],
  },
  {
    title: "Celtic Falcons - Rider Community",
    description:
      "Created a modern, responsive platform for bikers to connect globally. Built with React and MERN stack, featuring a visually stunning UI that showcases community features.",
    tags: ["React", "MERN", "SQL", "CSS"],
    icon: Users,
    gradient: "from-accent/20 to-secondary/20",
    highlights: [
      "Global community platform",
      "Responsive design",
      "Full-stack development",
    ],
  },
];

const internships = [
  {
    company: "iAgami Technologies",
    role: "Summer Intern",
    period: "Jun - Jul 2025",
    description: "Software development for HarvestEye Portal and BioArt e-commerce using AngularJS, Django, TypeScript.",
  },
  {
    company: "Touchmark Descience",
    role: "Project Intern",
    period: "Dec 2024 - Mar 2025",
    description: "Developed SurveyScope - a cloud-based HR survey tool with LLM integration for behavioral analytics.",
  },
  {
    company: "Rultosh Edufun",
    role: "Project Intern",
    period: "Mar - Jul 2024",
    description: "Built AI potato grading system using OpenCV and YOLO for object detection and classification.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute left-0 top-1/4 w-1/3 h-96 bg-primary/5 rounded-r-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-1/4 h-80 bg-accent/5 rounded-l-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world projects from internships and personal exploration,
            showcasing my skills in full-stack development and computer vision.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col glow-border hover:border-primary/30 transition-all duration-500">
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] group-hover:animate-[shimmer_2s_infinite]" />
                  <project.icon className="w-12 h-12 text-foreground/60 group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mb-4 space-y-1.5 flex-grow">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-xs text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internship Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Internship <span className="gradient-text">Experience</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {internships.map((intern, index) => (
              <motion.div
                key={intern.company}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass-card rounded-xl p-5 glow-border"
              >
                <p className="text-xs text-primary mb-1">{intern.period}</p>
                <h4 className="font-display font-semibold mb-1">{intern.company}</h4>
                <p className="text-sm text-muted-foreground mb-2">{intern.role}</p>
                <p className="text-xs text-muted-foreground/80">{intern.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/Gururagavendran" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
