import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EcoTrack",
    description: "A sustainability app helping users track and reduce their carbon footprint with AI-powered suggestions and gamification elements.",
    tags: ["React", "Node.js", "MongoDB", "TensorFlow"],
    gradient: "from-green-500/20 to-cyan-500/20",
    accent: "primary",
    github: "#",
    live: "#",
  },
  {
    title: "DevFlow",
    description: "A collaborative coding platform with real-time code sharing, integrated chat, and project management features for remote teams.",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Docker"],
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "accent",
    github: "#",
    live: "#",
  },
  {
    title: "ArtVault",
    description: "NFT marketplace concept with intuitive gallery views, advanced filtering, and seamless wallet integration for digital artists.",
    tags: ["React", "Solidity", "IPFS", "Ethers.js"],
    gradient: "from-orange-500/20 to-red-500/20",
    accent: "secondary",
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      
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
            A selection of projects I've worked on. Each one represents a unique 
            challenge and an opportunity to learn something new.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col glow-border">
                {/* Project Image/Preview Area */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] group-hover:animate-[shimmer_2s_infinite]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-foreground/80">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg">
            View All Projects
            <ArrowUpRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
