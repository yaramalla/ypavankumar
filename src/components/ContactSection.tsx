import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="section-heading mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm always open to discussing new opportunities, innovative projects, or ways to contribute to your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email Card */}
          <motion.a
            href="mailto:ypavan.net@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 text-center hover:border-primary/50 hover:card-glow transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground break-all">ypavan.net@gmail.com</p>
            <ExternalLink className="mx-auto mt-4 text-muted-foreground group-hover:text-primary transition-colors" size={16} />
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+919148283004"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 text-center hover:border-primary/50 hover:card-glow transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-semibold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">+91-9148283004</p>
            <ExternalLink className="mx-auto mt-4 text-muted-foreground group-hover:text-primary transition-colors" size={16} />
          </motion.a>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-semibold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">Hyderabad, India</p>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-4 mt-12"
        >
          <a
            href="https://www.linkedin.com/in/ypavan-net/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-12 h-12"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://www.instagram.com/y.pavan.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-12 h-12"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://wa.me/+919148283004"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-12 h-12"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
