import React from 'react';
import { Github as GithubIcon, Linkedin as LinkedinIcon, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/80 backdrop-blur-md border-t border-accent/20 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Chathumi Hewamaramage. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-accent transition-colors"><GithubIcon size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-accent transition-colors"><LinkedinIcon size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;