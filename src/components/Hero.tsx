import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Image, Video, Sparkles, ArrowRight, Download } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

export function Hero() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // TODO: Implement actual generation when Supabase is connected
    setTimeout(() => setIsGenerating(false), 3000);
  };

  const enhancePrompt = () => {
    // TODO: Implement AI prompt enhancement
    const enhanced = `${prompt}, ultra high quality, professional lighting, cinematic composition, highly detailed`;
    setPrompt(enhanced);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Parallax Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Hero Badge */}
          <Badge 
            variant="secondary" 
            className="glass-card px-6 py-2 text-sm font-medium"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Next-Generation AI Creation Platform
          </Badge>

          {/* Hero Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Create Stunning
              <span className="gradient-text block">
                AI-Generated Content
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your ideas into breathtaking images and videos with our advanced AI models. 
              No limits, just pure creativity.
            </p>
          </div>

          {/* Generation Panel */}
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="glass-button"
                >
                  <Image className="h-4 w-4 mr-2" />
                  Image
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="glass-button"
                >
                  <Video className="h-4 w-4 mr-2" />
                  Video
                </Button>
              </div>

              <div className="space-y-4">
                <Textarea
                  placeholder="Describe your vision... (e.g., 'A mystical forest with glowing creatures')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="glass-input min-h-[120px] text-base resize-none"
                />

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={enhancePrompt}
                    variant="ghost"
                    size="sm"
                    className="glass-button flex-1"
                    disabled={!prompt.trim()}
                  >
                    <Wand2 className="h-4 w-4 mr-2" />
                    Enhance Prompt
                  </Button>
                  
                  <Button
                    onClick={handleGenerate}
                    size="lg"
                    className="glass-button bg-gradient-to-r from-primary to-accent text-primary-foreground flex-1 sm:flex-2"
                    disabled={!prompt.trim() || isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Generate
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Generation Progress */}
              {isGenerating && (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Generating your creation...</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full animate-shimmer" style={{ width: '45%' }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sample Results Grid */}
          <div className="max-w-5xl mx-auto mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Recent Creations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card rounded-xl overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-muted-foreground">Sample Generation {i}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      "A futuristic cityscape with neon lights"
                    </p>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="glass-button w-full"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-3 h-3 bg-primary rounded-full animate-glow" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 bg-accent rounded-full animate-glow" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-primary rounded-full animate-glow" />
      </div>
    </section>
  );
}