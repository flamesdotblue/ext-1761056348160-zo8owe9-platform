import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SharePopup from './components/SharePopup';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      <Header />
      <main className="relative flex-1">
        <Hero />
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full flex justify-center -mt-16 sm:-mt-24">
            <SharePopup />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
