import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Offer } from './components/Offer';
import { Methodology } from './components/Methodology';
import { TargetAudience } from './components/TargetAudience';
import { CTA } from './components/CTA';
import { PurchaseCtaButton } from './components/PurchaseCtaButton';
export function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-amber-500/30">
      {/* Navigation / Header (Simple) */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight flex items-center gap-3">
            <span>Sistema Maestro</span>
          </div>
          <PurchaseCtaButton compact className="shrink-0" />
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

      <footer className="bg-slate-950 py-16 border-t border-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-50 mb-4">
                ¿Tenés dudas?
              </h3>
              <p className="text-slate-300 max-w-md">
                Escribinos y te respondemos para ayudarte a elegir el mejor camino
                para tu sistema de prompts.
              </p>
            </div>

            <form className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm p-6 md:p-8 space-y-4 shadow-xl shadow-slate-950/40">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-slate-200 mb-2">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500/70 transition"
                />
              </div>

              <div>
                <label htmlFor="mail" className="block text-sm font-semibold text-slate-200 mb-2">
                  Mail
                </label>
                <input
                  id="mail"
                  name="mail"
                  type="email"
                  placeholder="tu@mail.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500/70 transition"
                />
              </div>

              <div>
                <label htmlFor="consulta" className="block text-sm font-semibold text-slate-200 mb-2">
                  Consulta
                </label>
                <textarea
                  id="consulta"
                  name="consulta"
                  placeholder="Contanos en qué te podemos ayudar..."
                  rows={4}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-500/70 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all hover:scale-[1.02]"
              >
                Enviar consulta
              </button>
            </form>
          </div>

          <p className="text-center text-slate-500 mt-10">
            © {new Date().getFullYear()} Sistema Maestro de Prompts. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </div>);

}