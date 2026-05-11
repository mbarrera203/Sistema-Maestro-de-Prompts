import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, PenTool, GraduationCap, Clock } from 'lucide-react';
import { PurchaseCtaButton } from './PurchaseCtaButton';
const targets = [
{
  icon: <Clock className="w-6 h-6 text-amber-400" />,
  title: 'Emprendedores',
  desc: 'Para diseñar ofertas de negocio, estrategias de marketing y ahorrar horas semanales.'
},
{
  icon: <PenTool className="w-6 h-6 text-amber-400" />,
  title: 'Creadores de Contenido',
  desc: 'Para generar ideas infinitas, guiones y posts con tu propia voz y estilo.'
},
{
  icon: <Briefcase className="w-6 h-6 text-amber-400" />,
  title: 'Profesionales',
  desc: 'Para automatizar tareas repetitivas, redactar correos complejos y organizar proyectos.'
},
{
  icon: <GraduationCap className="w-6 h-6 text-amber-400" />,
  title: 'Estudiantes',
  desc: 'Para aprender cualquier tema complejo de forma simple con un tutor personalizado.'
}];

export function TargetAudience() {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Para quién es este curso?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Ideal para quienes valoran su tiempo y quieren dejar de hacer
              tareas manuales que la IA puede resolver en segundos (si sabés
              cómo pedírselo).
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
              <p className="text-amber-200 font-medium">
                "Desde las primeras 24 horas, vas a crear tu propio 'Prompt
                Maestro' personal."
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {targets.map((target, idx) =>
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: idx * 0.1
              }}
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              
                <div className="mb-4 bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-700">
                  {target.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{target.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {target.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <PurchaseCtaButton className="w-full sm:w-auto max-w-md" />
        </div>
      </div>
    </section>);

}