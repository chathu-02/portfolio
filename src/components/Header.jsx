import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const navItems = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ 
        backgroundColor: scrolled ? 'rgba(10, 37, 64, 0.95)' : '#0a2540', 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 1000, 
        borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(59, 130, 246, 0.15)' : 'none',
        transition: 'all 0.5s ease'
      }}
    >
      {/* Animated gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #3b82f6, #60a5fa, transparent)',
          transformOrigin: 'left'
        }}
      />

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 20 - 10, 0]
          }}
          transition={{ 
            duration: 3 + i, 
            repeat: Infinity,
            delay: i * 0.5
          }}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#3b82f6',
            left: `${20 + i * 30}%`,
            top: '50%',
            filter: 'blur(1px)'
          }}
        />
      ))}

      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        
        {/* Logo with animations */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          style={{ 
            color: 'white', 
            fontSize: '24px', 
            fontWeight: '900', 
            letterSpacing: '-1px',
            position: 'relative',
            cursor: 'pointer'
          }}
        >
          <motion.span
            animate={{ 
              textShadow: [
                '0 0 10px rgba(59, 130, 246, 0.3)',
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 10px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            CHATHUMI HEWAMARAMAGE
          </motion.span>
          <motion.span 
            animate={{ 
              scale: [1, 1.2, 1],
              color: ['#3b82f6', '#60a5fa', '#3b82f6']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Navigation with advanced animations */}
        <div style={{ display: 'flex', gap: '24px' }}>
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={item === 'ABOUT' ? '#about-image' : `#${item.toLowerCase()}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setActiveIndex(index)}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: '10px 24px',
                borderRadius: '50px', 
                border: '1px solid rgba(59, 130, 246, 0.3)',
                transition: '0.3s',
                position: 'relative',
                overflow: 'hidden',
                background: activeIndex === index 
                  ? 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(96, 165, 250, 0.2))'
                  : 'transparent'
              }}
              onMouseOver={(e) => { 
                e.target.style.backgroundColor = '#2563eb'; 
                e.target.style.borderColor = '#60a5fa';
                e.target.style.boxShadow = '0 5px 20px rgba(37, 99, 235, 0.4), 0 0 20px rgba(96, 165, 250, 0.3)';
              }}
              onMouseOut={(e) => { 
                e.target.style.backgroundColor = 'transparent'; 
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {/* Shimmer effect */}
              <motion.span
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  pointerEvents: 'none'
                }}
              />
              <span style={{ position: 'relative', zIndex: 1 }}>{item}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom gradient glow */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '20%',
          right: '20%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
          filter: 'blur(2px)'
        }}
      />
    </motion.nav>
  );
};

export default Header;