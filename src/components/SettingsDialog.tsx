import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/components/ThemeProvider';
import { 
  Settings, 
  User, 
  Palette, 
  Zap, 
  History, 
  Key, 
  Monitor,
  Sun,
  Moon,
  Sparkles,
  Image,
  Video,
  Download,
  Trash2,
  Crown,
  CreditCard
} from 'lucide-react';

interface SettingsDialogProps {
  children: React.ReactNode;
}

export function SettingsDialog({ children }: SettingsDialogProps) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  // Mock user data - replace with real data from Supabase
  const [userSettings, setUserSettings] = useState({
    email: 'user@example.com',
    name: 'John Doe',
    subscription: 'Premium',
    apiKeys: {
      openai: '',
      runware: '',
      elevenlabs: ''
    },
    preferences: {
      defaultModel: 'gpt-4-vision',
      imageQuality: 'high',
      videoQuality: 'hd',
      autoEnhancePrompts: true,
      saveHistory: true,
      downloadFormat: 'png'
    }
  });

  const updatePreference = (key: string, value: any) => {
    setUserSettings(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }));
  };

  const updateApiKey = (service: string, value: string) => {
    setUserSettings(prev => ({
      ...prev,
      apiKeys: {
        ...prev.apiKeys,
        [service]: value
      }
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="glass-card max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Settings className="h-6 w-6" />
            Settings
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <Tabs defaultValue="account" className="p-6 pt-2">
            <TabsList className="grid w-full grid-cols-4 glass-card">
              <TabsTrigger value="account" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Account
              </TabsTrigger>
              <TabsTrigger value="generation" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Generation
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Appearance
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                History
              </TabsTrigger>
            </TabsList>

            {/* Account Settings */}
            <TabsContent value="account" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    Manage your account details and subscription
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={userSettings.name}
                        className="glass-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={userSettings.email}
                        className="glass-input"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 glass-card rounded-lg">
                    <div className="flex items-center gap-3">
                      <Crown className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="font-semibold">Subscription Status</p>
                        <p className="text-sm text-muted-foreground">Premium Plan</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                      <Crown className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  </div>

                  <Button className="w-full glass-button">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Manage Subscription
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    API Keys
                  </CardTitle>
                  <CardDescription>
                    Configure your AI service API keys for generation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="openai-key">OpenAI API Key</Label>
                    <Input 
                      id="openai-key"
                      type="password"
                      placeholder="sk-..."
                      value={userSettings.apiKeys.openai}
                      onChange={(e) => updateApiKey('openai', e.target.value)}
                      className="glass-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="runware-key">Runware API Key</Label>
                    <Input 
                      id="runware-key"
                      type="password"
                      placeholder="rw_..."
                      value={userSettings.apiKeys.runware}
                      onChange={(e) => updateApiKey('runware', e.target.value)}
                      className="glass-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="elevenlabs-key">ElevenLabs API Key</Label>
                    <Input 
                      id="elevenlabs-key"
                      type="password"
                      placeholder="el_..."
                      value={userSettings.apiKeys.elevenlabs}
                      onChange={(e) => updateApiKey('elevenlabs', e.target.value)}
                      className="glass-input"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Generation Settings */}
            <TabsContent value="generation" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Image className="h-5 w-5" />
                    Image Generation
                  </CardTitle>
                  <CardDescription>
                    Configure default settings for AI image generation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Default Model</Label>
                      <Select value={userSettings.preferences.defaultModel} onValueChange={(value) => updatePreference('defaultModel', value)}>
                        <SelectTrigger className="glass-input">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dall-e-3">DALL-E 3</SelectItem>
                          <SelectItem value="midjourney">Midjourney</SelectItem>
                          <SelectItem value="stable-diffusion">Stable Diffusion</SelectItem>
                          <SelectItem value="runware">Runware</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Image Quality</Label>
                      <Select value={userSettings.preferences.imageQuality} onValueChange={(value) => updatePreference('imageQuality', value)}>
                        <SelectTrigger className="glass-input">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="ultra">Ultra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Download Format</Label>
                    <Select value={userSettings.preferences.downloadFormat} onValueChange={(value) => updatePreference('downloadFormat', value)}>
                      <SelectTrigger className="glass-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="jpg">JPG</SelectItem>
                        <SelectItem value="webp">WebP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto-enhance Prompts</Label>
                      <p className="text-sm text-muted-foreground">Automatically improve prompts using AI</p>
                    </div>
                    <Switch 
                      checked={userSettings.preferences.autoEnhancePrompts}
                      onCheckedChange={(checked) => updatePreference('autoEnhancePrompts', checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Video Generation
                  </CardTitle>
                  <CardDescription>
                    Configure default settings for AI video generation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Video Quality</Label>
                    <Select value={userSettings.preferences.videoQuality} onValueChange={(value) => updatePreference('videoQuality', value)}>
                      <SelectTrigger className="glass-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="720p">720p HD</SelectItem>
                        <SelectItem value="1080p">1080p Full HD</SelectItem>
                        <SelectItem value="4k">4K Ultra HD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    Theme Preferences
                  </CardTitle>
                  <CardDescription>
                    Customize the appearance of your interface
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <Button
                      variant={theme === 'light' ? 'default' : 'outline'}
                      onClick={() => setTheme('light')}
                      className="h-auto p-4 flex flex-col gap-2"
                    >
                      <Sun className="h-6 w-6" />
                      <span>Light</span>
                    </Button>
                    <Button
                      variant={theme === 'dark' ? 'default' : 'outline'}
                      onClick={() => setTheme('dark')}
                      className="h-auto p-4 flex flex-col gap-2"
                    >
                      <Moon className="h-6 w-6" />
                      <span>Dark</span>
                    </Button>
                    <Button
                      variant={theme === 'premium' ? 'default' : 'outline'}
                      onClick={() => setTheme('premium')}
                      className="h-auto p-4 flex flex-col gap-2"
                    >
                      <Sparkles className="h-6 w-6" />
                      <span>Premium</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* History Settings */}
            <TabsContent value="history" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <History className="h-5 w-5" />
                    Generation History
                  </CardTitle>
                  <CardDescription>
                    Manage your generation history and downloads
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Save Generation History</Label>
                      <p className="text-sm text-muted-foreground">Keep a record of all your generations</p>
                    </div>
                    <Switch 
                      checked={userSettings.preferences.saveHistory}
                      onCheckedChange={(checked) => updatePreference('saveHistory', checked)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Export History</p>
                        <p className="text-sm text-muted-foreground">Download all your generations</p>
                      </div>
                      <Button variant="outline" className="glass-button">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Clear History</p>
                        <p className="text-sm text-muted-foreground">Permanently delete all generation history</p>
                      </div>
                      <Button variant="destructive" className="bg-red-500/20 hover:bg-red-500/30 border-red-500/30">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Clear All
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}