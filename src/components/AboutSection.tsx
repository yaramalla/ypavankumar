import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, Languages } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Hyderabad, India" },
  { icon: Mail, label: "Email", value: "ypavan.net@gmail.com", href: "mailto:ypavan.net@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91-9148283004", href: "tel:+919148283004" },
  { icon: Languages, label: "Languages", value: "English • Telugu • Tamil" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed text-center mb-12"
          >
            A highly skilled Software Engineer with deep expertise in designing, developing, and deploying 
            multi-tiered web and Windows-based enterprise applications using Microsoft .NET technologies. 
            Known for writing clean, scalable C# code and making significant contributions across all stages 
            of the software development lifecycle, from initial planning to deployment. Proficient in delivering 
            innovative, high-performance solutions tailored to clients in the{" "}
            <span className="text-primary font-medium">Warehouse Management (Supply Chain)</span>,{" "}
            <span className="text-primary font-medium">Healthcare</span>, and{" "}
            <span className="text-primary font-medium">Education</span> sectors.
          </motion.p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {href ? (
                  <a
                    href={href}
                    className="glass-card rounded-xl p-5 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 block h-full"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </a>
                ) : (
                  <div className="glass-card rounded-xl p-5 flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
