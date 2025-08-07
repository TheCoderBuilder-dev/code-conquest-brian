import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TechItem {
  name: string;
  level: number;
  description: string;
  firstUsed: string;
}

const techStack: TechItem[] = [
  {
    name: "Python",
    level: 95,
    description: "Backend beast mode - Flask, SQLAlchemy, APIs",
    firstUsed: "Started with basic scripts, now building full systems"
  },
  {
    name: "React",
    level: 90,
    description: "Frontend fire - Components, hooks, state management",
    firstUsed: "From HTML to modern React mastery"
  },
  {
    name: "Flask",
    level: 90,
    description: "My ride-or-die for web APIs and backends",
    firstUsed: "First real framework love - built Deliveroo with it"
  },
  {
    name: "SQLAlchemy",
    level: 85,
    description: "Database ORM magic - complex relationships made easy",
    firstUsed: "Game changer for database management"
  },
  {
    name: "JavaScript",
    level: 88,
    description: "The language that powers the web",
    firstUsed: "From simple DOM manipulation to full apps"
  },
  {
    name: "TypeScript",
    level: 80,
    description: "JavaScript with superpowers and type safety",
    firstUsed: "Made my code bulletproof and professional"
  },
  {
    name: "Google Maps API",
    level: 85,
    description: "Location services for Deliveroo tracking system",
    firstUsed: "Integrated real-time parcel tracking"
  },
  {
    name: "SendGrid",
    level: 80,
    description: "Email automation and notifications",
    firstUsed: "Professional email handling for apps"
  },
  {
    name: "Git & GitHub",
    level: 85,
    description: "Version control and collaboration",
    firstUsed: "Essential for any serious development"
  },
  {
    name: "AWS/Cloud",   
    level: 75,
    description: "Deployment and cloud infrastructure",
    firstUsed: "Scaling apps beyond localhost"
  }
];

const TechStack = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
            Tech Arsenal 
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My weapons of choice for building digital experiences that actually work and scale
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <Card 
              key={tech.name}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Tech Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl"></span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {tech.level}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-cyber rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${tech.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-3">
                  {tech.description}
                </p>

                {/* Fun Fact - Hidden by default, shown on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-primary-glow font-mono bg-muted/50 rounded p-2 border-l-2 border-primary">
                     {tech.firstUsed}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="text-center mt-16">
          <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Always Learning, Always Growing 
            </h3>
            
            {/* Current Learning */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-left p-4 bg-muted/20 rounded-lg">
                <h4 className="font-semibold text-accent mb-2"> Currently Learning</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI/ML integration for web apps</li>
                  <li>• Advanced cloud architecture patterns</li>
                  <li>• Web3 & blockchain development</li>
                  <li>• Mobile app development with React Native</li>
                </ul>
              </div>
              <div className="text-left p-4 bg-muted/20 rounded-lg">
                <h4 className="font-semibold text-fire mb-2"> Next on the List</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• DevOps & CI/CD mastery</li>
                  <li>• System design & architecture</li>
                  <li>• Data science fundamentals</li>
                  <li>• Startup & business strategy</li>
                </ul>
              </div>
            </div>

            {/* Personal Touch */}
            <div className="border-t border-border/20 pt-4">
              <p className="text-sm text-muted-foreground italic">
                "The day you stop learning is the day you stop growing. At 18, I've got the whole world to explore!" 
                <span className="text-primary">- Brian</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;