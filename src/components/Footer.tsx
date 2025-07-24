import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, MessageCircle, Mail, Heart } from 'lucide-react';
import celestixLogo from '@/assets/celestix-logo.png';

export function Footer() {
  return (
    <footer className="glass-card border-t mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={celestixLogo} 
                alt="CELESTIX.AI" 
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold gradient-text">
                CELESTIX.AI
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Next-generation AI creation platform for stunning images and videos.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="glass-button">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="glass-button">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="glass-button">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="glass-button">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-foreground cursor-pointer transition-colors">Generate</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">Models</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">History</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">Settings</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">API</div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-foreground cursor-pointer transition-colors">About</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">Blog</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">Careers</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">Contact</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">Press</div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">Cookie Policy</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">DMCA</div>
              <div className="hover:text-foreground cursor-pointer transition-colors">Acceptable Use</div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 CELESTIX.AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for creators worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}