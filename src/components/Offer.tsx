import React from 'react';
import { motion } from 'framer-motion';
import {
  Book,
  FileText,
  LayoutTemplate,
  Copy,
  Calendar,
  Gift } from
'lucide-react';
const packItems = [
{
  icon: <Book className="w-8 h-8 text-amber-400" />,
  title: 'Manual Principal',
  desc: 'El mapa completo para construir superprompts paso a paso, sin relleno teórico.'
},
{
  icon: <FileText className="w-8 h-8 text-amber-400" />,
  title: 'Cheatsheets (Chuletas)',
  desc: 'Herramientas de consulta rápida con marcos como C.O.R.E. y los 4 Pilares.'
},
{
  icon: <LayoutTemplate className="w-8 h-8 text-amber-400" />,
  title: 'Plantillas Rellenables',
  desc: 'Archivos listos para completar: tu Prompt Maestro, ideas de negocio y planes.'
},
{
  icon: <Copy className="w-8 h-8 text-amber-400" />,
  title: 'Pack de 50+ Prompts',
  desc: 'Copiá, pegá y adaptá prompts probados de negocio, contenido y productividad.'
},
{
  icon: <Calendar className="w-8 h-8 text-amber-400" />,
  title: 'Planners 7 y 30 Días',
  desc: 'Un plan de acción paso a paso para integrar la IA como un hábito en tu vida.'
},
{
  icon: <Gift className="w-8 h-8 text-amber-400" />,
  title: 'Bonos de Alto Valor',
  desc: "Guías para vender, crear contenido diario y versión 'de bolsillo' para el móvil."
}];

export function Offer() {
  return (
    <section
      id="oferta"
      className="py-24 bg-slate-900 border-y border-slate-800">
      
      <div className="container mx-auto px-6 max-w-6xl">
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
          }}
          className="text-center mb-16">
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Qué incluye el{' '}
            <span className="text-amber-400">Sistema Maestro</span>?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Todo lo que necesitás para dominar la IA, organizado para que veas
            valor desde el primer minuto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packItems.map((item, idx) =>
          <motion.div
            key={idx}
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
            }}
            transition={{
              delay: idx * 0.1
            }}
            className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors box-glow-hover group">
            
              <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block border border-slate-700 group-hover:border-amber-500/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}