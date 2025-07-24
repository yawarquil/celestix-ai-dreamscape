import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Wand2, 
  Settings, 
  History, 
  Zap, 
  Palette, 
  Download,
  Brain,
  Shield,
  Infinity
} from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="h-8 w-8" />,
    title: "AI-Powered Generation",
    description: "Advanced AI models for stunning image and video creation",
    badge: "Core"
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Model Switching",
    description: "Choose from Stable Diffusion, DALL-E, Midjourney, and more",
    badge: "Flexible"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Prompt Enhancement",
    description: "AI automatically refines your prompts for better results",
    badge: "Smart"
  },
  {
    icon: <History className="h-8 w-8" />,
    title: "Generation History",
    description: "View, manage, and regenerate your past creations",
    badge: "Organized"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Style Customization",
    description: "Adjust resolution, aspect ratio, and artistic styles",
    badge: "Creative"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Real-time Progress",
    description: "Live updates and progress tracking for all generations",
    badge: "Fast"
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "High-Quality Export",
    description: "Download in multiple formats and resolutions",
    badge: "Quality"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Storage",
    description: "Your creations safely stored with privacy protection",
    badge: "Secure"
  },
  {
    icon: <Infinity className="h-8 w-8" />,
    title: "Unlimited Generations",
    description: "No limits on your creativity and generation count",
    badge: "Premium"
  }
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="glass-card px-4 py-2">
            <Zap className="h-4 w-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            Everything You Need to Create
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional-grade tools and features designed for creators, artists, and innovators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-primary group-hover:text-accent transition-colors">
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}