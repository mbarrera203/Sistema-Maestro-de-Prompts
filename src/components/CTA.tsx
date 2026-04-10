import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-amber-500/5" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
            Empezá a diseñar resultados hoy
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            No necesitás ser técnico, solo tener ganas de practicar y mejorar la
            forma en la que pensás.
          </p>

          <div className="flex flex-col items-center gap-6">
            <button className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-2xl text-xl transition-all box-glow hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center">
              Quiero mi Sistema Maestro ahora
              <ArrowRight className="w-6 h-6" />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Garantía de satisfacción</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full" />
              <a
                href="#"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                
                <MessageCircle className="w-5 h-5" />
                <span>¿Tenés dudas? Hablá con nosotros</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}