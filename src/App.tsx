import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Offer } from './components/Offer';
import { Methodology } from './components/Methodology';
import { TargetAudience } from './components/TargetAudience';
import { CTA } from './components/CTA';
export function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-amber-500/30">
      {/* Navigation / Header (Simple) */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-slate-950 font-black">
              S
            </div>
            Sistema Maestro
          </div>
          <a
            href="#oferta"
            className="text-sm font-semibold bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-700">
            
            Ver Pack
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Offer />
        <Methodology />
        <TargetAudience />
        <CTA />
      </main>

      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center text-slate-500">
        <div className="container mx-auto px-6">
          <p>
            © {new Date().getFullYear()} Sistema Maestro de Prompts. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </div>);

}