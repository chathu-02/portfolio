import { motion } from 'framer-motion';
import { Code2, Database, Palette, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "Frontend", icon: <Code2 size={24} />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: <Database size={24} />, items: ["Node.js", "Express", "Python", "MongoDB","Supbase"] },
    { name: "Design", icon: <Palette size={24} />, items: ["Figma", "UI/UX", "Responsive Design"] },
    { name: "Mobile", icon: <Smartphone size={24} />, items: ["React Native","Android studio sdk"] },
    { name: "Live", icon: <Smartphone size={24} />, items: ["Render"] },
  ];

  return (
    <section id="skills" className="w-full bg-[#020c1b] py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <h3 className="text-center text-4xl md:text-5xl font-black text-white mb-16 uppercase tracking-wider"></h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-6 bg-[#112240] rounded-2xl border border-white/5 hover:border-emerald-400/50 transition-all text-center"
            >
              <div className="text-emerald-400 flex justify-center mb-4">{skill.icon}</div>
              <h4 className="text-xl font-bold text-white mb-4">{skill.name}</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                {skill.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;