import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = ({ Projects }) => {
  const images = (Projects.images && Projects.images.length > 0 ? Projects.images : [Projects.image]).filter(Boolean);
  const sliderImages = Projects.id === 1 ? images : images.slice(0, 24);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0a192f] rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group shadow-xl"
    >
      {/* --- Image Slider Area --- */}
      <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden bg-slate-900">
        {sliderImages.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={0}
            navigation={sliderImages.length > 1}
            pagination={sliderImages.length > 1 ? { clickable: true, dynamicBullets: true } : false}
            loop={sliderImages.length > 1}
            className="project-swiper h-full w-full"
          >
            {sliderImages.map((src, i) => (
              <SwiperSlide key={i} className="h-10 w-10 min-w-10 min-h-10">
                <img
                  src={src}
                  alt={`${Projects.title} screenshot ${i + 1}`}
                  className="h-10 w-10 min-w-10 min-h-10 object-cover object-center"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-10 h-10 flex items-center justify-center">
            <Code2 size={48} className="text-emerald-500/20" />
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-all duration-300 pointer-events-none" />
      </div>

      {/* --- Content Area --- */}
      <div className="p-6 space-y-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {Projects.title}
          </h4>
          <div className="flex gap-4 justify-center">
            <a href={Projects.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={Projects.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed min-h-[40px]">
          {Projects.description}
        </p>
        
        <div className="flex flex-wrap gap-6 pt-6">
          {Projects.tech.map((t, i) => (
            <span key={i} className="text-[20px] uppercase font-bold tracking-wider bg-emerald-500/10 text-emerald-400 px-6 py-1 rounded-md border border-emerald-500/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration and order tracking.A speciality is jawelery makers can say to the system they are availabe or not.using that status system is automatically assigned new oder to the available jawelery maker.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind","Express","Stripe","JWT","HTML/CSS"],
      github: "https://github.com/chathu-02/e-commerce-website",
      demo: "https://aura-gem-store-final.onrender.com/",
      images: ["/1.jpg", "/2.jpg", "/3.jpg","/4.jpg","/5.jpg", "/6.jpg", "/8.jpg", "/9.jpg", "/10.jpg", "/11.jpg", "/13.jpg", "/14.jpg", "/15.jpg", "/16.jpg", "/20.jpg", "/21.jpg", "/22.jpg"] 
    },
    {
      id: 2,
      title: "Task Manager",
      description: "Real-time task collaboration Application with user authentication with notifications.And and share your mood at a time",
      tech: ["Kotlin", "Android SDK", "Figma"],
      github: "https://github.com/chathu-02/Personal-Wellness-App",
      images: ["/23.jpg", "/24.jpg","/25.jpg","/26.jpg","/27.jpg","/28.jpg","/29.jpg","/30.jpg","/31.jpg","/33.jpg","/34.jpg"]
    }
  ];

  return (
    <section id="Projects" className="py-24 bg-[#020c1b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tight flex items-center gap-3">
             <Code2 className="text-emerald-500" size={32} />
              <span className="text-emerald-500">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 mt-4 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(Projects => (
            <ProjectCard key={Projects.id} Projects={Projects} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;