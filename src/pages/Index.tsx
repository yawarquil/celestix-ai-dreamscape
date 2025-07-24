import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
