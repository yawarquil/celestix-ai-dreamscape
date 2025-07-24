import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Settings, Moon, Sun, Sparkles, User, History } from 'lucide-react';
import { SettingsDialog } from '@/components/SettingsDialog';

export function Header() {
  const { theme, setTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun className="h-4 w-4" />;
      case 'dark': return <Moon className="h-4 w-4" />;
      case 'premium': return <Sparkles className="h-4 w-4" />;
    }
  };

  const getLogo = () => {
    // Use light logo for dark themes and dark logo for light themes
    switch (theme) {
      case 'light':
      case 'premium':
        return '/lovable-uploads/18170051-3e56-4fe0-aeb7-90370853a649.png';
      case 'dark':
        return '/lovable-uploads/c1e32f50-9b07-43a9-9141-846b7cfbc86f.png';
      default:
        return '/lovable-uploads/c1e32f50-9b07-43a9-9141-846b7cfbc86f.png';
    }
  };

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'premium'> = ['light', 'dark', 'premium'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={getLogo()} 
              alt="CELESTIX.AI" 
              className="h-8 w-auto animate-float"
            />
            <h1 className="text-xl font-bold gradient-text">
              CELESTIX.AI
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm"
              className="glass-button"
            >
              Generate
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="glass-button"
            >
              <History className="h-4 w-4 mr-2" />
              History
            </Button>
            <SettingsDialog>
              <Button 
                variant="ghost" 
                size="sm"
                className="glass-button"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </SettingsDialog>
          </div>

          {/* Theme Switcher & User */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={cycleTheme}
              className="glass-button"
            >
              {getThemeIcon()}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="glass-button"
            >
              <User className="h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}