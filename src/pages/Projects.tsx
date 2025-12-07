import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink, Code2, Zap, Users, Database, Globe, Server, Layout, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from '@/components/Navigation';

interface Project {
  id: string;
  title: string;
  emoji: string;
  description: string;
  longDescription: string;
  role: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "concept";
  impact: string;
  category: "api" | "landing-page" | "full-stack" | "concept";
}

const projects: Project[] = [
  {
    id: "deliveroo",
    title: "Deliveroo",
    emoji: "📦",
    description: "Full-stack parcel tracking system with Google Maps integration",
    longDescription: "A comprehensive parcel delivery system with real-time tracking, cost calculation logic, and role-based authentication. Features admin dashboard, customer portal, and delivery management.",
    role: "Lead Developer - Handled backend & Google Maps integration",
    techStack: ["Python", "Flask", "SQLAlchemy", "Google Maps API", "React", "PostgreSQL"],
    highlights: [
      "Real-time parcel tracking with live map updates",
      "Dynamic cost calculation based on distance & weight",
      "Role-based authentication (Admin, Customer, Delivery)",
      "RESTful API with comprehensive documentation"
    ],
    githubUrl: "https://github.com/brian/deliveroo",
    liveUrl: "https://deliveroo-demo.com",
    status: "completed",
    impact: "Streamlined delivery operations for 50+ local businesses",
    category: "full-stack"
  },
  {
    id: "mad-carts",
    title: "Mad-Carts API",
    emoji: "🛒",
    description: "E-commerce backend with advanced cart management",
    longDescription: "Robust e-commerce API with UUID-based cart system, inventory management, and payment integration. Built for scalability and performance.",
    role: "Backend Architect - Designed cart UUID system & API structure",
    techStack: ["Python", "Flask", "SQLAlchemy", "JWT", "Stripe API", "Redis"],
    highlights: [
      "UUID-based cart persistence across sessions",
      "Inventory management with low-stock alerts",
      "Stripe payment integration",
      "Redis caching for performance optimization"
    ],
    githubUrl: "https://github.com/brian/mad-carts",
    status: "completed",
    impact: "Powers 3 active e-commerce platforms",
    category: "api"
  },
  {
    id: "late-show-api",
    title: "Late Show API",
    emoji: "📺",
    description: "Guest management system with cascading operations",
    longDescription: "API for managing TV show guests with complex relationships and cascading delete operations. Features episode management and guest scheduling.",
    role: "API Developer - Implemented cascading deletes & data relationships",
    techStack: ["Python", "Flask", "SQLAlchemy", "JWT", "PostgreSQL"],
    highlights: [
      "Complex data relationships with cascading deletes",
      "Episode and guest scheduling system",
      "JWT authentication with role management",
      "Comprehensive API documentation"
    ],
    githubUrl: "https://github.com/brian/late-show-api",
    status: "completed",
    impact: "Used by content creators for show planning",
    category: "api"
  },
  {
    id: "freebie-tracker",
    title: "Freebie Tracker",
    emoji: "🎁",
    description: "Developer gift and resource management system",
    longDescription: "A system for tracking developer freebies, resources, and opportunities. Features categorization, expiry tracking, and sharing capabilities.",
    role: "Full-Stack Developer - Complete system design & implementation",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "JWT"],
    highlights: [
      "Resource categorization and tagging",
      "Expiry date tracking and notifications",
      "Community sharing features",
      "Mobile-responsive design"
    ],
    githubUrl: "https://github.com/TheCoderBuilder-dev/freebie-tracker",
    liveUrl: "https://freebie-tracker.vercel.app",
    status: "completed",
    impact: "Helps 200+ developers find resources",
    category: "full-stack"
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    emoji: "🚀",
    description: "Modern personal portfolio with interactive widgets",
    longDescription: "This very website you're viewing! A cyber-themed portfolio featuring glassmorphism design, interactive widgets, and smooth animations.",
    role: "Solo Creator - Full design & development",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
    highlights: [
      "Custom cyber/galactic dark theme",
      "Interactive dashboard with widgets",
      "Smooth scroll animations",
      "Fully responsive design"
    ],
    githubUrl: "https://github.com/TheCoderBuilder-dev/code-conquest-brian",
    liveUrl: "https://thecoderbuilder-dev.github.io/code-conquest-brian",
    status: "completed",
    impact: "Showcasing skills to potential clients & employers",
    category: "landing-page"
  },
  {
    id: "ecommerce-luxury",
    title: "Luxury E-Commerce",
    emoji: "💎",
    description: "High-end e-commerce landing page with elegant design",
    longDescription: "Premium e-commerce landing page featuring luxury product showcase, smooth animations, and sophisticated UI/UX design.",
    role: "Frontend Developer - UI/UX Implementation",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Elegant luxury brand aesthetic",
      "Smooth product animations",
      "Premium user experience",
      "Fully responsive design"
    ],
    liveUrl: "https://ecommerce-luxury-umber.vercel.app/",
    status: "completed",
    impact: "Modern template for luxury brands",
    category: "landing-page"
  },
  {
    id: "creative-agency",
    title: "Creative Agency",
    emoji: "🎨",
    description: "Bold agency landing page with creative flair",
    longDescription: "Dynamic creative agency website showcasing services, portfolio, and bold design elements to attract clients.",
    role: "Frontend Developer - Creative Design",
    techStack: ["React", "Next.js", "Tailwind CSS", "GSAP"],
    highlights: [
      "Bold creative design",
      "Interactive portfolio showcase",
      "Engaging animations",
      "Modern agency branding"
    ],
    liveUrl: "https://creative-agency-ten-eta.vercel.app/",
    status: "completed",
    impact: "Professional presence for creative businesses",
    category: "landing-page"
  },
  {
    id: "saas-platform",
    title: "SaaS Platform",
    emoji: "☁️",
    description: "Modern SaaS product landing page",
    longDescription: "Clean and professional SaaS platform landing page with feature highlights, pricing tiers, and conversion-focused design.",
    role: "Frontend Developer - SaaS UI Design",
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Clean SaaS design patterns",
      "Feature showcase sections",
      "Pricing tier displays",
      "Conversion-optimized layout"
    ],
    liveUrl: "https://saas-platform-steel.vercel.app/",
    status: "completed",
    impact: "Ready-to-use SaaS landing template",
    category: "landing-page"
  },
  {
    id: "aurum-suites",
    title: "Aurum Suites Hotel",
    emoji: "🏨",
    description: "Luxury hotel booking landing page",
    longDescription: "Elegant hotel landing page featuring room showcases, booking functionality, and premium hospitality design.",
    role: "Frontend Developer - Hospitality UI",
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    highlights: [
      "Luxury hotel aesthetic",
      "Room showcase galleries",
      "Booking interface design",
      "Premium guest experience"
    ],
    liveUrl: "https://site-aurum-suites.vercel.app/",
    status: "completed",
    impact: "Professional online presence for hotels",
    category: "landing-page"
  },
  {
    id: "black-nature",
    title: "Black Nature",
    emoji: "🌿",
    description: "Nature-inspired minimalist landing page",
    longDescription: "Minimalist landing page with nature-inspired design, featuring dark themes and organic visual elements.",
    role: "Frontend Developer - Design Implementation",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    highlights: [
      "Nature-inspired dark theme",
      "Minimalist design approach",
      "Organic visual elements",
      "Smooth user experience"
    ],
    liveUrl: "https://site-black-nature.vercel.app/",
    status: "completed",
    impact: "Unique nature-themed web presence",
    category: "landing-page"
  },
  {
    id: "opulent-jewelry",
    title: "Opulent Jewelry",
    emoji: "💍",
    description: "Premium jewelry store landing page",
    longDescription: "Sophisticated jewelry boutique landing page with elegant product displays and luxury shopping experience.",
    role: "Frontend Developer - Luxury E-Commerce",
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    highlights: [
      "Elegant jewelry showcase",
      "Premium shopping experience",
      "High-end visual design",
      "Sophisticated UI/UX"
    ],
    liveUrl: "https://site-opulent-jewelry.vercel.app/",
    status: "completed",
    impact: "Luxury online jewelry showcase",
    category: "landing-page"
  },
  {
    id: "deepwoken-planner",
    title: "Deepwoken Build Planner",
    emoji: "🎮",
    description: "Gaming tool for character build optimization",
    longDescription: "Interactive build planner for the game Deepwoken, allowing players to theory-craft character builds with stat optimization and build sharing.",
    role: "Concept & Design - Future personal project",
    techStack: ["React", "TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    highlights: [
      "Interactive stat allocation system",
      "Build sharing and rating community",
      "Build optimization algorithms",
      "Mobile gaming experience"
    ],
    status: "concept",
    impact: "Potential to serve 10k+ gamers",
    category: "concept"
  }
];

const Projects = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'bg-accent';
      case 'in-progress': return 'bg-primary';
      case 'concept': return 'bg-secondary';
      default: return 'bg-muted';
    }
  };

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'concept': return 'Concept';
      default: return 'Unknown';
    }
  };

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="mb-6"
              onClick={() => navigate('/code-conquest-brian/')}
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
            
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold hero-text mb-6">
                All Projects 🔬
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore my complete portfolio organized by category
              </p>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-12" onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5 h-auto gap-2 bg-muted/50 p-2">
              <TabsTrigger value="all" className="flex items-center gap-2 py-3">
                <Code2 size={18} />
                <span>All Projects</span>
              </TabsTrigger>
              <TabsTrigger value="api" className="flex items-center gap-2 py-3">
                <Server size={18} />
                <span>APIs</span>
              </TabsTrigger>
              <TabsTrigger value="landing-page" className="flex items-center gap-2 py-3">
                <Layout size={18} />
                <span>Landing Pages</span>
              </TabsTrigger>
              <TabsTrigger value="full-stack" className="flex items-center gap-2 py-3">
                <Globe size={18} />
                <span>Full-Stack</span>
              </TabsTrigger>
              <TabsTrigger value="concept" className="flex items-center gap-2 py-3">
                <Zap size={18} />
                <span>Concepts</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Projects Count */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Showing <span className="text-primary font-bold">{filteredProjects.length}</span> {selectedCategory === "all" ? "projects" : `${selectedCategory} project${filteredProjects.length !== 1 ? 's' : ''}`}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="glass border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{project.emoji}</span>
                      <div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge className={`${getStatusColor(project.status)} text-xs mt-1`}>
                          {getStatusText(project.status)}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button variant="outline" size="icon" className="h-8 w-8" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="outline" size="icon" className="h-8 w-8" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} className="text-primary" />
                    <span className="text-primary font-medium">{project.role}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 size={16} className="text-accent" />
                      <span className="text-sm font-medium">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap size={16} className="text-fire" />
                      <span className="text-sm font-medium">Key Features</span>
                    </div>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="glass rounded-lg p-3 border-l-2 border-primary">
                    <div className="flex items-center gap-2 mb-1">
                      <Database size={14} className="text-primary" />
                      <span className="text-xs font-medium text-primary">Impact</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.githubUrl && (
                      <Button variant="outline" className="flex-1 text-sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button className="flex-1 bg-gradient-cyber text-sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <Button variant="secondary" className="flex-1 text-sm" disabled>
                        <Code2 size={16} className="mr-2" />
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                <span className="hero-text">Want to Collaborate? 💡</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to new projects and collaboration opportunities. Let's build something amazing together!
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-gradient-fire glow-primary" asChild>
                  <a href="/code-conquest-brian/#contact">
                    Get in Touch
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/TheCoderBuilder-dev" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={18} />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Brian Munene. Built with ❤️ and lots of coffee ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
