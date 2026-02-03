import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Software Engineer",
    company: "Enterprise Solutions",
    period: "Present",
    description: "Leading development of enterprise-grade .NET applications",
  },
  {
    type: "work",
    title: "Software Engineer",
    company: "Healthcare Systems",
    period: "Previous",
    description: "Developed scalable healthcare management solutions",
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "Supply Chain Tech",
    period: "Earlier",
    description: "Built warehouse management and logistics systems",
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "University",
    period: "Completed",
    description: "Focus on software engineering and database systems",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-16"
        >
          Experience & <span className="text-gradient">Education</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="text-primary" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-xl">Work Experience</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="glass-card rounded-xl p-5">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h4 className="font-heading font-semibold text-lg mt-1">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="font-heading font-semibold text-xl">Education</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="glass-card rounded-xl p-5">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {edu.period}
                    </span>
                    <h4 className="font-heading font-semibold text-lg mt-1">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Roles Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <h4 className="font-heading font-semibold text-lg mb-4">Key Roles</h4>
              <div className="flex flex-wrap gap-2">
                {["Full-Stack Developer", "Backend Specialist", "API Designer", "Database Architect", "Team Lead"].map((role) => (
                  <span
                    key={role}
                    className="px-4 py-2 rounded-full glass-card text-sm font-medium text-primary border-primary/20"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
