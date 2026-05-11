import { motion } from 'framer-motion';
import { Layers, Target, RefreshCw } from 'lucide-react';
export function Methodology() {
  return (
    <section id="metodologia" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
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
            Marcos de Trabajo Exclusivos
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Estructuras probadas para no empezar nunca desde cero.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Step 1 */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            
            <div className="w-20 h-20 shrink-0 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
              <Layers className="w-10 h-10 text-amber-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                1. Anatomía del Superprompt
              </h3>
              <p className="text-slate-400 text-lg mb-4">
                La fórmula definitiva para que la IA entienda exactamente qué
                querés.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Rol', 'Contexto', 'Objetivo', 'Reglas', 'Formato'].map(
                  (tag) =>
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-sm font-medium text-slate-300">
                    
                      {tag}
                    </span>

                )}
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            
            <div className="w-20 h-20 shrink-0 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
              <Target className="w-10 h-10 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">2. Marco C.O.R.E.</h3>
              <p className="text-slate-400 text-lg">
                Un sistema ágil para el día a día:{' '}
                <strong className="text-slate-200">C</strong>ontexto,{' '}
                <strong className="text-slate-200">O</strong>bjetivo,{' '}
                <strong className="text-slate-200">R</strong>eglas y{' '}
                <strong className="text-slate-200">E</strong>ntrega. Diseñado
                para tareas rápidas sin perder calidad.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            
            <div className="w-20 h-20 shrink-0 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
              <RefreshCw className="w-10 h-10 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                3. Método de Iteración en 3 Pasos
              </h3>
              <p className="text-slate-400 text-lg">
                Cómo pasar de un prompt bruto a un resultado profesional.
                Aprendé a corregir a la IA sin frustrarte y logrando el tono
                exacto que buscás.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}