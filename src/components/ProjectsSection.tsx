import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2, Zap, Users, Database } from "lucide-react";

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
}

const projects: Project[] = [
  {
    id: "deliveroo",
    title: "Deliveroo",
    emoji: "🔥",
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
    impact: "Streamlined delivery operations for 50+ local businesses"
  },
  {
    id: "mad-carts",
    title: "Mad-Carts",
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
    impact: "Powers 3 active e-commerce platforms"
  },
  {
    id: "late-show-api",
    title: "Late Show API",
    emoji: "🎬",
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
    impact: "Used by content creators for show planning"
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
    githubUrl: "https://github.com/brian/freebie-tracker",
    liveUrl: "https://freebie-tracker.vercel.app",
    status: "completed",
    impact: "Helps 200+ developers find resources"
  },
  {
    id: "deepwoken-planner",
    title: "Deepwoken Build Planner",
    emoji: "👾",
    description: "Gaming tool for character build optimization (Concept)",
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
    impact: "Potential to serve 10k+ gamers"
  }
];

const ProjectsSection = () => {
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

  return (
    <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
            Brian's Lab 💼
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of legendary works that solve real problems and move the digital world forward
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
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
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Github size={16} />
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ExternalLink size={16} />
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
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
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
                    <Button variant="outline" className="flex-1 text-sm">
                      <Github size={16} className="mr-2" />
                      View Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button className="flex-1 bg-gradient-cyber text-sm">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
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
              <span className="hero-text">Want to See More? 🚀</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              These are just the highlights! I'm constantly building, experimenting, and shipping new ideas. 
              Check out my GitHub for the full collection of projects and contributions.
            </p>
            <Button className="bg-gradient-fire glow-primary">
              <Github className="mr-2" size={20} />
              Explore All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;