import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SkillBar from "./SkillBar";
import { Code, Server, Wrench, Monitor, Building } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "C#", percentage: 90 },
      { name: "SQL", percentage: 90 },
      { name: "JavaScript", percentage: 60 },
      { name: "TypeScript", percentage: 60 },
      { name: "LINQ", percentage: 70 },
      { name: "HTML/CSS", percentage: 70 },
    ],
  },
  {
    title: "Technologies",
    icon: Server,
    skills: [
      { name: ".NET Framework", percentage: 90 },
      { name: ".NET Core", percentage: 60 },
      { name: "Web API/Services", percentage: 80 },
      { name: "ASP.NET MVC", percentage: 80 },
      { name: "Entity Framework", percentage: 60 },
      { name: "Windows Forms", percentage: 90 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Visual Studio", percentage: 100 },
      { name: "VS Code", percentage: 90 },
      { name: "SQL Server", percentage: 70 },
      { name: "GitHub/TFS", percentage: 60 },
      { name: "Postman", percentage: 70 },
      { name: "Jira/Rally", percentage: 60 },
    ],
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: [
      { name: "Windows", percentage: 100 },
      { name: "Linux", percentage: 60 },
      { name: "macOS", percentage: 50 },
    ],
  },
  {
    title: "Domains",
    icon: Building,
    skills: [
      { name: "Supply Chain Systems", percentage: 90 },
      { name: "Warehouse Management", percentage: 90 },
      { name: "Healthcare Systems", percentage: 60 },
      { name: "Education Systems", percentage: 70 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-16"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 ${
                categoryIndex === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg">{category.title}</h3>
              </div>
              
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={categoryIndex * 0.1 + skillIndex * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
