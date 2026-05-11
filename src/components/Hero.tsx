import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        <motion.img
          initial={{
            opacity: 0,
            y: 12
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          src="/Logo.png"
          alt="Sistema Maestro de Prompts"
          className="w-44 sm:w-56 md:w-64 mx-auto mb-8 drop-shadow-[0_10px_30px_rgba(14,165,233,0.25)]"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-amber-400 text-sm font-medium mb-8">
          
          <Sparkles className="w-4 h-4" />
          <span>Sistema 360° para dominar la IA</span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.1
          }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
      
          La diferencia no es la IA {' '}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 text-glow">
          Sos vos
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          
          Convertí a ChatGPT y Gemini en tu propio equipo de expertos. Un
          sistema práctico (no teórico) para multiplicar tu claridad, tu tiempo
          y tus resultados mediante instrucciones estratégicas.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* <PurchaseCtaButton className="w-full sm:w-auto" /> */}
          <a
            href="#metodologia"
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-lg transition-all border border-slate-700 flex items-center justify-center">
            
            Ver cómo funciona
          </a>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 0.8
          }}
          className="mt-16 flex items-center justify-center gap-8 text-slate-500 text-sm font-medium">
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            Ruta Express de 1 hora
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            No requiere saber programar
          </div>
        </motion.div>
      </div>
    </section>);

}