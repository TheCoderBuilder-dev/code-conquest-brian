import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Code, Zap, MapPin, Calendar, Trophy, Music, Video } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("origin");

  const achievements = [
    { icon: "🎓", title: "KCSE A-", description: "Strong academic foundation" },
    { icon: "🏆", title: "Moringa Graduate", description: "Phase 1-4 Software Engineering" },
    { icon: "🎯", title: "Strathmore Student", description: "Currently pursuing tech degree" },
    { icon: "📜", title: "GitHub Student Pack", description: "Access to premium dev tools" },
    { icon: "🔧", title: "Cisco IT Essentials", description: "Networking fundamentals certified" },
    { icon: "📱", title: "1K+ Views", description: "Growing social media presence" }
  ];

  const moringaPhases = [
    {
      phase: "Phase 1",
      title: "Foundation & Logic",
      description: "Programming fundamentals, Python basics, and computational thinking",
      skills: ["Python", "Logic Building", "Problem Solving", "Git Basics"]
    },
    {
      phase: "Phase 2", 
      title: "Web Development",
      description: "Frontend technologies, responsive design, and user experience",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      phase: "Phase 3",
      title: "Backend Mastery",
      description: "Server-side development, databases, and API construction",
      skills: ["Flask", "SQLAlchemy", "PostgreSQL", "API Design"]
    },
    {
      phase: "Phase 4",
      title: "Full-Stack Integration",
      description: "Bringing everything together with real-world projects",
      skills: ["React", "Integration", "Deployment", "Project Management"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
            The Developer Behind the Code 🧬
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From KCSE A- to coding demon mode - the journey of a young visionary building his legacy
          </p>
        </div>

        {/* Interactive Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 glass">
            <TabsTrigger value="origin" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <GraduationCap className="mr-2" size={18} />
              Origin Story
            </TabsTrigger>
            <TabsTrigger value="grind" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Code className="mr-2" size={18} />
              The Grind
            </TabsTrigger>
            <TabsTrigger value="now" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Zap className="mr-2" size={18} />
              Now Playing
            </TabsTrigger>
          </TabsList>

          {/* Origin Story Tab */}
          <TabsContent value="origin" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">The Beginning 🌱</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Started my journey with a solid <span className="text-accent font-semibold">KCSE A-</span>, 
                      proving that academic excellence was just the foundation. But I knew traditional paths 
                      weren't going to build the empire I envisioned.
                    </p>
                    <p>
                      At 18, while most peers were still figuring out life, I was already 
                      <span className="text-primary font-semibold"> deep in code</span>, building systems, 
                      and turning ideas into reality. The mission? Become a millionaire by 22 through pure skill and innovation.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <MapPin size={16} className="text-accent" />
                      <span className="font-medium">Nairobi, Kenya 🇰🇪 - Where dreams meet execution</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-fire">The Vision 🚀</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Not just another developer - I'm building to solve real problems. Every line of code 
                      has purpose, every project moves the needle forward.
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                      <h4 className="font-semibold text-primary mb-2">Core Values:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Quality over Quantity</strong> - Every project must solve a real problem</li>
                        <li>• <strong>Continuous Learning</strong> - Technology evolves, so do I</li>
                        <li>• <strong>Impact First</strong> - Build things that matter and last</li>
                        <li>• <strong>Kenya to the World</strong> - Representing East African innovation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Achievements Unlocked 🏆</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center">
                    <CardContent className="p-4">
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <div className="font-semibold text-sm text-foreground mb-1">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* The Grind Tab */}
          <TabsContent value="grind" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold hero-text mb-4">Moringa School Journey 🎓</h3>
              <p className="text-muted-foreground">A systematic approach to mastering full-stack development</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {moringaPhases.map((phase, index) => (
                <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-primary text-primary-foreground">{phase.phase}</Badge>
                      <h4 className="text-xl font-bold">{phase.title}</h4>
                    </div>
                    <p className="text-muted-foreground mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Strathmore Section */}
            <Card className="glass border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold">Strathmore University Life 📚</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-accent">Academic Balance</h4>
                    <p className="text-muted-foreground text-sm">
                      Balancing university coursework with real-world development projects. 
                      Applying theoretical computer science concepts to practical solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-accent">Campus Innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      Leading tech discussions, mentoring fellow students, and building projects 
                      that solve campus-specific problems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Now Playing Tab */}
          <TabsContent value="now" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Current Focus */}
              <Card className="glass border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="text-primary" size={24} />
                    <h3 className="text-2xl font-bold">Currently Building 🔨</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Active Projects</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Scaling Deliveroo for enterprise clients</li>
                        <li>• Building AI-powered coding assistant</li>
                        <li>• Contributing to open-source projects</li>
                        <li>• Mentoring upcoming developers</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Learning Focus</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Advanced cloud architecture (AWS/GCP)</li>
                        <li>• Machine learning integration</li>
                        <li>• Blockchain development</li>
                        <li>• Mobile app development</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Media & Lifestyle */}
              <Card className="glass border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Music className="text-accent" size={24} />
                    <h3 className="text-2xl font-bold">Beyond Code 🎵</h3>
                  </div>
                  <div className="space-y-6">
                    {/* Spotify Widget Placeholder */}
                    <div className="bg-muted/50 rounded-lg p-4 border border-accent/20">
                      <div className="flex items-center gap-3 mb-3">
                        <Music className="text-accent" size={20} />
                        <span className="font-semibold">Currently Playing</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        🎵 Lo-fi Hip Hop - Perfect coding vibes
                      </div>
                    </div>

                    {/* Content Creation */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Video className="text-fire" size={20} />
                        <span className="font-semibold">Content Creation</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-muted/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-primary">📱</div>
                          <div className="text-xs text-muted-foreground">TikTok Tech Tips</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-accent">🎙️</div>
                          <div className="text-xs text-muted-foreground">Podcast Clips</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-fire">📺</div>
                          <div className="text-xs text-muted-foreground">YouTube Channel</div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-secondary">💰</div>
                          <div className="text-xs text-muted-foreground">Whop Earnings</div>
                        </div>
                      </div>
                    </div>

                    {/* Podcast Shows */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Podcast Shows:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>🎭 "Comedy & Chaos" - Tech humor and industry commentary</li>
                        <li>💪 "Motivation & Hustle" - Entrepreneurship and mindset</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Status Update */}
            <Card className="glass border-border/50 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="font-semibold text-primary">Live Status Update</span>
                </div>
                <p className="text-muted-foreground">
                  Currently building the next generation of web applications while balancing university life. 
                  Always open to collaboration opportunities and interesting projects! 🚀
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutSection;