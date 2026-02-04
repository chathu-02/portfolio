import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } 
  }
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-[#020c1b] overflow-hidden px-6 pt-200 md:pt-280">
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] right-[10%] w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-sky-500/10 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -25, 0],
            y: [0, 25, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl w-full flex flex-col items-center gap-20"
      >
        {/* Main Name & Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
         <br className="md:hidden" /> 
            <motion.span 
              className="bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% auto' }}
            >
            CHATHUMI HEWAMARAMAGE
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Professional Title */}
        <motion.div variants={itemVariants} className="mb-100">
          <motion.p 
            className="text-emerald-400 text-2xl md:text-4xl lg:text-5xl font-bold tracking-[0.15em] uppercase"
            animate={{ 
              textShadow: [
                '0 0 10px rgba(16, 185, 129, 0)',
                '0 0 20px rgba(16, 185, 129, 0.5)',
                '0 0 10px rgba(16, 185, 129, 0)'
              ]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Full-Stack Web Developer
          </motion.p>
          <motion.div 
            className="h-1.5 bg-emerald-400 w-32 mx-auto mt-8 rounded-full shadow-[0_0_20px_#10b981]"
            animate={{ 
              width: ['128px', '160px', '128px'],
              boxShadow: [
                '0 0 20px rgba(16, 185, 129, 0.5)',
                '0 0 30px rgba(16, 185, 129, 0.8)',
                '0 0 20px rgba(16, 185, 129, 0.5)'
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Profile Image - After Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="w-5 h-3 rounded-full p-1 bg-gradient-to-r from-sky-400 to-emerald-400">
            <div className="w-full h-full rounded-full bg-[#020c1b] p-1 overflow-hidden">
              <img
                src="/im.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Intro Paragraph */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl mx-auto max-w-3xl"
          whileHover={{ 
            boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
            borderColor: "rgba(16, 185, 129, 0.4)"
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed italic font-light">
            "I am a <span className="text-white font-semibold">Full-Stack Web Developer</span> passionate about building 
            <span className="text-sky-300"> beautiful</span>, 
            user-friendly, and high-performance web applications."
          </p>
        </motion.div>
      </motion.div>

      {/* Mouse Scroll Animation */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;