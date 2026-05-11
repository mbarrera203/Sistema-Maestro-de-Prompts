import { motion } from 'framer-motion';
import { MessageSquareDashed, Wand2, History, RefreshCcw } from 'lucide-react';
const errors = [
{
  icon: <MessageSquareDashed className="w-6 h-6 text-red-400" />,
  title: 'Usar prompts vagos sin contexto',
  desc: "Pedirle a la IA 'escribe un post' y recibir un texto robótico que nadie quiere leer."
},
{
  icon: <Wand2 className="w-6 h-6 text-red-400" />,
  title: "Esperar 'magia' en lugar de colaborar",
  desc: 'Creer que la IA lee la mente en vez de guiarla como a un asistente humano.'
},
{
  icon: <History className="w-6 h-6 text-red-400" />,
  title: 'Perder los prompts que sí funcionan',
  desc: 'Tener que reinventar la rueda cada vez porque no tenés un sistema de guardado.'
},
{
  icon: <RefreshCcw className="w-6 h-6 text-red-400" />,
  title: 'No iterar las respuestas',
  desc: 'Conformarte con el primer resultado mediocre en lugar de pulirlo estratégicamente.'
}];

export function Problem() {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800">
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
            ¿¿Tus respuestas de IA se sienten vacías?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            El problema no es la herramienta, es que le hablás como a un chat
            cualquiera. Estos son los errores que te están costando tiempo y
            resultados:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {errors.map((error, idx) =>
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
            className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl flex gap-6 items-start">
            
              <div className="p-3 bg-red-500/10 rounded-xl shrink-0">
                {error.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-200">
                  {error.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{error.desc}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}