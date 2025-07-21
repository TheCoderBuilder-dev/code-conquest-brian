import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Download, MapPin, Code2 } from "lucide-react";
import heroGlobe from "@/assets/hero-globe.png";

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const codeCommand = '> python main.py --build="Legacy"';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= codeCommand.length) {
        setTypedText(codeCommand.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <img 
            src={heroGlobe} 
            alt="3D Globe" 
            className="w-[800px] h-[800px] object-cover rotate-slow opacity-30 scale-110"
          />
          {/* Floating Parcel Icons */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-primary">
              📦
            </div>
          </div>
          <div className="absolute top-3/4 right-1/3 animate-float" style={{animationDelay: '2s'}}>
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center glow-primary">
              🚚
            </div>
          </div>
          <div className="absolute top-1/2 right-1/4 animate-float" style={{animationDelay: '4s'}}>
            <div className="w-8 h-8 bg-fire rounded-lg flex items-center justify-center glow-primary">
              🌍
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Terminal Command */}
        <div className="mb-8 inline-block">
          <div className="glass rounded-lg p-4 font-mono text-left max-w-md mx-auto">
            <div className="flex items-center mb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-fire rounded-full"></div>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="text-primary-glow">
              <span className="text-muted-foreground">brian@portfolio:~$ </span>
              <span className="font-mono">{typedText}</span>
              <span className="animate-blink">|</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text leading-tight">
          Hi, I'm Brian 👨🏽‍💻
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-4 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Code2 className="text-primary" size={24} />
            <span>Full Stack Dev</span>
            <span className="text-primary">•</span>
            <span>Product Builder</span>
            <span className="text-primary">•</span>
            <span>Visionary Coder</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg">
            <MapPin className="text-accent" size={20} />
            <span>Nairobi, Kenya 🇰🇪</span>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto font-light">
          "I build web apps that move things. And people."
        </p>

        <div className="text-lg text-primary-glow mb-10 font-mono">
          18 years old • Aiming to be a millionaire by 22 🚀
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-cyber text-white font-semibold px-8 py-4 rounded-xl glow-primary hover:scale-105 transition-all duration-300"
          >
            <ExternalLink className="mr-2" size={20} />
            Explore Portfolio
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Github className="mr-2" size={20} />
            Hire Me / Collaborate
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-muted hover:bg-muted/80 text-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2" size={20} />
            Download Blueprint
          </Button>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="glass rounded-lg p-4 text-center hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="glass rounded-lg p-4 text-center hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-accent">4</div>
            <div className="text-sm text-muted-foreground">Years Coding</div>
          </div>
          <div className="glass rounded-lg p-4 text-center hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-fire">100%</div>
            <div className="text-sm text-muted-foreground">Passion</div>
          </div>
          <div className="glass rounded-lg p-4 text-center hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-secondary">∞</div>
            <div className="text-sm text-muted-foreground">Potential</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;