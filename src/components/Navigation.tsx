import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/TheCoderBuilder-dev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/brian-munene', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:brianinesh@gmail.com', label: 'Email' },
    { icon: Phone, href: 'https://wa.me/254748665079', label: 'WhatsApp' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border/20 backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center font-bold text-white">
                BM
              </div>
              <span className="font-hero text-xl font-bold text-foreground">
                Brian Munene
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden lg:flex items-center space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon size={18} />
                  </a>
                </Button>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed top-16 right-0 bottom-0 w-64 glass border-l border-border/20 p-6">
            <div className="space-y-6">
              {/* Mobile Menu Items */}
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Mobile Social Links */}
              <div className="pt-6 border-t border-border/20">
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon size={20} />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="pt-6">
                <div className="glass rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Currently Available</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Open for collaboration and new projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button (Mobile WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-accent hover:bg-accent/90 glow-primary shadow-lg"
          asChild
        >
          <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
            <Phone size={24} />
          </a>
        </Button>
      </div>
    </>
  );
};

export default Navigation;