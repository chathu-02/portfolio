import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-black py-20 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[2px] bg-emerald-500"></div>
            
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Contact Information (4 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10 text-center"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Let's build something epic.</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
                I'm currently available for work or full-time positions. If you have a project that needs some creative injection, let’s talk.
              </p>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <a href="mailto:chathuhewamaramage@gmail.com" className="flex flex-col items-center text-center gap-3 group">
                <div className="w-14 h-14 bg-[#0a0a0a] rounded-2xl flex items-center justify-center text-emerald-400 border border-white/10 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.1)] transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Email Me</p>
                  <p className="text-white group-hover:text-emerald-400 transition-colors break-all">chathuhewamaramage@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex flex-col items-center text-center gap-3 group">
                <div className="w-14 h-14 bg-[#0a0a0a] rounded-2xl flex items-center justify-center text-emerald-400 border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Location</p>
                  <p className="text-white">Mawanella, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-row justify-center gap-30 pt-20">
              {[
                { icon: <Github size={30} />, link: "https://github.com/chathu-02/" },
                { icon: <Linkedin size={30} />, link: "https://www.linkedin.com/in/chathu-hewamaramage-1a4a4b1b9/" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank"
                  className="w-12 h-12 bg-[#0a0a0a] rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-400/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Contact Form (7 Columns) */}
          

        </div>
      </div>
    </section>
  );
};

export default Contact;