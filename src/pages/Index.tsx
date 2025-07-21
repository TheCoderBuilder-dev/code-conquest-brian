import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechStack from '@/components/TechStack';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="tech">
          <TechStack />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        {/* Contact section placeholder */}
        <section id="contact" className="py-20 bg-gradient-to-b from-muted/10 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
              Let's Build Something Epic 🚀
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to turn your ideas into reality? Let's connect and create something amazing together.
            </p>
            <div className="glass rounded-xl p-8">
              <p className="text-muted-foreground mb-4">Contact form coming soon...</p>
              <p className="text-primary font-mono">brian@example.com | +254 700 000 000</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Brian Munene. Built with 🔥 and lots of coffee ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
