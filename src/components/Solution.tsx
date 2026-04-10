import React from 'react';
import { motion } from 'framer-motion';
import { User, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';
export function Solution() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              De usuario curioso a{' '}
              <span className="text-amber-400">Arquitecto de IA</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              No es solo un curso; es un Sistema 360°. La IA es un espejo de tu
              claridad mental. Si tus instrucciones son potentes, los resultados
              serán extraordinarios.
            </p>

            <ul className="space-y-4 mb-8">
              {[
              'Tratá a la IA como un equipo de expertos (copywriter, estratega, analista).',
              'Construí una biblioteca personal de prompts reutilizables.',
              'Configurá roles permanentes para no repetir contexto.'].
              map((item, i) =>
              <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Before / After Comparison */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="relative">
            
            <div className="absolute -inset-1 bg-gradient-to-b from-amber-500/20 to-slate-800/20 rounded-3xl blur-xl" />
            <div className="relative bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              {/* Before */}
              <div className="p-6 border-b border-slate-800 bg-slate-900/50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-800 px-2 py-1 rounded">
                    El error común
                  </span>
                </div>
                <div className="flex gap-4 mb-4 opacity-60">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm text-slate-300">
                    Escribí un post sobre marketing para Instagram.
                  </div>
                </div>
                <div className="flex gap-4 opacity-60">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm text-slate-300">
                    El marketing es muy importante hoy en día. Para tener éxito
                    debes usar redes sociales...
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="p-6 bg-slate-850">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-400 px-2 py-1 rounded">
                    Con el Sistema Maestro
                  </span>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-2xl rounded-tl-none text-sm text-amber-100/90">
                    <span className="font-semibold text-amber-400">Rol:</span>{' '}
                    Actuá como un copywriter experto.
                    <br />
                    <span className="font-semibold text-amber-400">
                      Contexto:
                    </span>{' '}
                    Vendo asesorías a emprendedores.
                    <br />
                    <span className="font-semibold text-amber-400">
                      Objetivo:
                    </span>{' '}
                    Post de IG usando marco AIDA.
                    <br />
                    <span className="font-semibold text-amber-400">
                      Reglas:
                    </span>{' '}
                    Tono persuasivo, sin emojis excesivos.
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-800 border border-slate-700 p-3 rounded-2xl rounded-tl-none text-sm text-slate-200">
                    <span className="font-bold">Atención emprendedores:</span>{' '}
                    ¿Están perdiendo clientes por no saber comunicar su valor?
                    <br />
                    <br />
                    El 80% de los negocios fracasa no por un mal producto, sino
                    por un mensaje confuso...
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}