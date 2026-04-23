/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { 
  Database, 
  Settings as SettingsIcon, 
  Cpu, 
  ArrowRight,
  Plus,
  Layout,
  Zap,
  TrendingUp,
  Wrench,
  BarChart3,
  Instagram,
  MapPin
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full h-28 bg-surface/90 backdrop-blur-md border-b border-outline-variant z-50 flex items-center justify-between px-6 md:px-12">
    <div className="flex items-center gap-2">
      <img 
        src="/logoprimario.png" 
        className="h-24 w-auto scale-110"
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className="hidden font-principal text-4xl tracking-widest text-on-surface">C</div>
      <div className="font-principal text-2xl tracking-[0.2em] text-on-surface ml-2"></div>
    </div>
    
    <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
      {['METODOLOGÍA', 'SERVICIOS', 'CASOS DE ESTUDIO'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase().replace(/[áéíóú]/g, (match: string) => ({'á':'a','é':'e','í':'i','ó':'o','ú':'u'}[match] || match)).replace(/\s/g, '-')}`}
          className="hover:opacity-100 transition-opacity text-on-surface"
        >
          {item}
        </a>
      ))}
    </div>
    
    <a 
      href="https://calendly.com/cliviamx/30min" 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-8 py-2.5 border border-on-surface/20 rounded-full text-[10px] font-bold tracking-widest hover:bg-on-surface hover:text-surface transition-all text-on-surface inline-block uppercase"
    >
      AGENDA UNA CITA
    </a>
  </nav>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative min-h-[120vh] pt-20 flex flex-col items-center justify-center overflow-hidden bg-surface">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center max-w-5xl px-6"
      >
        <motion.div 
          style={{ scale }}
          className="mb-2 inline-block relative group cursor-crosshair"
        >
          <div className="w-full max-w-xs flex items-center justify-center overflow-hidden">
             <img 
               src="/logoprimario.png" 
               alt="CLIVIA Logo Central"
               className="w-full h-auto grayscale brightness-50 opacity-20 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
               referrerPolicy="no-referrer"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/clivia/800/600?grayscale';
               }}
             />
          </div>
        </motion.div>

        <div className="mb-2 flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-on-surface/30"></div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] uppercase tracking-[0.4em] text-on-surface/50 font-medium"
          >
            Inteligencia Empresarial   
          </motion.span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl lg:text-[12rem] font-principal text-on-surface leading-[0.8] mb-12 uppercase tracking-tight"
        >
          Donde el caos <br/> se vuelve <br/> estrategia.
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
          <motion.a 
            href="https://wa.me/524152159111"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-on-surface text-surface rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-all duration-300 shadow-xl shadow-black/5 inline-block"
          >
            Consultar Ahora
          </motion.a>
          <motion.button 
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 border border-on-surface/10 rounded-full flex items-center justify-center group-hover:bg-on-surface/5 transition-colors">
              <ArrowRight size={14} className="text-on-surface transform -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-on-surface/80 font-medium tracking-widest">Ver Metodología</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

const ProblemSection = () => (
  <section className="py-32 px-6 md:px-12 border-t border-outline-variant bg-surface overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:col-span-12 lg:col-span-7 flex flex-col justify-center"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-3 h-3 bg-accent-orange rounded-full" />
          <span className="text-[11px] font-bold tracking-[0.4em] text-on-surface/40 uppercase">Visión Sistémica</span>
        </div>
        <h2 className="text-5xl md:text-8xl font-principal text-on-surface leading-[0.8] mb-8 uppercase">
          Diseñamos lógica detrás <br/> de tu operación.
        </h2>
        <p className="text-lg md:text-xl text-on-surface/60 font-light max-w-2xl leading-relaxed">
          Un negocio sin estructura depende del esfuerzo constante. Es por eso que en clivia, creamos sistemas que organizan, automatizan y permiten crecer con control.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:col-span-12 lg:col-span-4 lg:col-start-9 flex items-center"
      >
        <div className="p-12 border border-outline rounded-tl-[80px] rounded-br-[80px] bg-on-surface/5 backdrop-blur-sm relative">
           <div className="absolute -top-4 -left-4 text-6xl font-principal text-on-surface/10 leading-none">01</div>
           <p className="text-sm text-on-surface/70 leading-relaxed font-medium">
             "Todas las empresas son empresas de software."
           </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const MethodStep = ({ number, title, description, imageSrc, accent = false }: { number: string, title: string, description: string, imageSrc: string, accent?: boolean }) => (
  <div className={`p-12 border-outline-variant relative flex flex-col gap-8 transition-all hover:bg-on-surface/[0.02] border-r last:border-r-0`}>
    <div className="node-corner top-0 left-0" />
    <div className="flex justify-between items-start">
      <span className={`text-[10px] font-bold tracking-widest ${accent ? 'text-accent-orange' : 'text-on-surface/30'} uppercase`}>
        {number}
      </span>
      {accent && <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />}
    </div>
    
    <h3 className="text-4xl font-principal text-on-surface uppercase leading-none tracking-wider">{title}</h3>
    
    <div className={`h-40 w-full relative rounded-2xl overflow-hidden border border-outline-variant grayscale hover:grayscale-0 transition-all duration-700`}>
       <img 
         src={imageSrc} 
         alt={title}
         className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
         referrerPolicy="no-referrer"
       />
       <div className="absolute inset-0 bg-gradient-to-tr from-on-surface/5 to-transparent pointer-events-none" />
    </div>
    
    <p className="text-xs text-on-surface/60 leading-relaxed font-medium tracking-wide">
      {description}
    </p>
  </div>
);

const MethodSection = () => (
  <section id="metodologia" className="py-32 border-y border-outline-variant bg-surface relative overflow-hidden">
    <div className="absolute inset-0 blueprint-grid opacity-5" />
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6 relative z-10"
    >
      <div className="text-center mb-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.5em] text-on-surface/30 mb-4"
        >
          Filosofía del Orden
        </motion.div>
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-principal text-on-surface uppercase"
        >
          METODOLOGÍA
        </motion.h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 border border-outline rounded-[40px] overflow-hidden bg-surface shadow-2xl shadow-black/5">
        {[
          {
            number: "Ph / 01",
            title: "Diagnóstico",
            description: "Analizamos cómo funciona tu negocio hoy. Detectamos dónde se pierde tiempo, dónde hay desorden y qué procesos están frenando tu crecimiento.",
            imageSrc: "https://images.pexels.com/photos/34568328/pexels-photo-34568328.jpeg?w=800&h=600&fit=crop"
          },
          {
            number: "Ph / 02",
            title: "Organización y Datos",
            description: "Ponemos orden en tu operación y tu información. Unificamos tus procesos y datos en un solo sistema claro, para que todo tenga sentido y puedas tomar mejores decisiones.",
            imageSrc: "https://images.pexels.com/photos/17483870/pexels-photo-17483870.png?w=800&h=600&fit=crop",
            accent: true
          },
          {
            number: "Ph / 03",
            title: "Automatización Inteligente",
            description: "Hacemos que tu negocio funcione de forma más eficiente. Automatizamos tareas, optimizamos procesos y usamos datos para que la operación fluya y puedas crecer con control.",
            imageSrc: "https://images.pexels.com/photos/17484970/pexels-photo-17484970.png?w=800&h=600&fit=crop"
          }
        ].map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <MethodStep {...step} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description, tags, accent = false }: { icon: any, title: string, description: string, tags: string[], accent?: boolean }) => (
  <div className="group p-10 border border-outline rounded-[60px] bg-surface hover:border-on-surface/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5">
    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 ${accent ? 'bg-on-surface text-surface' : 'border border-outline text-on-surface'}`}>
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-4xl font-principal text-on-surface uppercase leading-none mb-6 tracking-wider">{title}</h3>
    <p className="text-on-surface/60 text-sm font-medium leading-relaxed mb-10">
      {description}
    </p>
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span key={tag} className="px-4 py-1.5 border border-outline rounded-full text-[9px] font-bold tracking-widest text-on-surface/40 uppercase hover:border-on-surface/30 hover:text-on-surface transition-colors">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ServicesSection = () => (
  <section id="servicios" className="py-32 px-6 md:px-12 bg-surface overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-[8rem] font-principal text-on-surface leading-[0.8] uppercase mb-6">Soluciones <br/> Clivia.</h2>
          <p className="text-xl text-on-surface/60 font-medium max-w-xl">
            Tecnología y sistemas para que tu negocio funcione mejor, con menos esfuerzo y más control.
          </p>
        </motion.div>
        <div className="text-right flex flex-col items-end gap-4 overflow-hidden">
           <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            className="h-[1px] bg-on-surface/20 translate-x-12" 
           />
           <span className="text-[10px] uppercase tracking-[0.4em] text-on-surface/30 font-bold whitespace-nowrap">Edición 2026 / Flujo de Valor</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Layout,
            title: "Orden y Control del Negocio",
            description: "Organizamos tu operación para que tengas claridad de qué está pasando y cómo mejorar.",
            tags: ['REVISAMOS COMO TRABAJAS HOY', 'DETECTAMOS PÉRDIDAS DE TIEMPO', 'ORGANIZAMOS TUS PROCESOS', 'CREAMOS UNA BASE DE DATA']
          },
          {
            icon: Zap,
            title: "Automatización de Procesos",
            description: "Automatizamos tareas repetitivas para que tu negocio avance sin que tengas que estar encima.",
            tags: ['AUTOMATIZACIÓN DE TAREAS', 'ENTRENAMIENTO DE AGENTES A TU MEDIDA', 'INTEGRACIÓN DE SISTEMAS']
          },
          {
            icon: Wrench,
            title: "Herramientas a Medida",
            description: "Diseñamos soluciones según tu operación, no plantillas genéricas.",
            tags: ['APPS SENCILLAS', 'PÁGINAS WEB', 'SISTEMAS DE FIDELIZACIÓN', 'IMPLEMENTACIONES PARA NEGOCIO']
          },
          {
            icon: BarChart3,
            title: "Inteligencia y Datos",
            description: "Usamos tu información para ayudarte a tomar mejores decisiones.",
            tags: ['ANÁLISIS DE DATOS', 'ESTRUCTURA DE KPI´S', 'CREACIÓN DE REPORTES CLAROS Y VISUALES'],
            accent: true
          }
        ].map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const DossierCard = ({ category, title, content, stat1, label1, stat2, label2, source }: { 
  category: string; title: string; content: string; stat1: string; label1: string; stat2: string; label2: string; source: string;
}) => (
  <div className="p-10 border border-outline rounded-[80px] bg-surface relative group overflow-hidden hover:shadow-2xl hover:shadow-black/5 transition-all">
    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/5 opacity-30 -mr-32 -mt-32 rounded-full border border-accent-orange/10" />
    <div className="relative z-10 flex flex-col h-full">
      <span className="text-[10px] font-bold text-accent-orange tracking-widest uppercase mb-8 block">{category}</span>
      <h3 className="text-4xl font-principal text-on-surface mb-6 uppercase leading-none tracking-wider">{title}</h3>
      <p className="text-on-surface/60 text-sm font-medium leading-relaxed mb-12 max-w-sm">{content}</p>
      
      <div className="flex gap-12 mb-12 border-l border-accent-orange/20 pl-6">
        <div>
          <div className="text-5xl font-principal text-on-surface mb-1 uppercase leading-none">{stat1}</div>
          <div className="text-[9px] font-bold tracking-widest opacity-30 uppercase">{label1}</div>
        </div>
        {stat2 && (
          <div>
            <div className="text-5xl font-principal text-accent-orange mb-1 uppercase leading-none">{stat2}</div>
            <div className="text-[9px] font-bold tracking-widest opacity-30 uppercase">{label2}</div>
          </div>
        )}
      </div>

      <div className="mt-auto pt-6 border-t border-outline-variant">
         <span className="text-[9px] font-bold text-on-surface/30 tracking-[0.3em] uppercase">Fuente: {source}</span>
      </div>
    </div>
  </div>
);

const CaseStudiesSection = () => (
  <section id="casos-de-estudio" className="py-32 px-6 md:px-12 bg-surface text-on-surface relative border-t border-outline-variant overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold text-accent-orange tracking-[0.5em] uppercase mb-6 block">Investigación y Contexto</span>
          <h2 className="text-6xl md:text-[10rem] font-principal text-on-surface leading-none uppercase">
            Dossier.
          </h2>
        </motion.div>
        <p className="text-on-surface/40 text-xs font-bold tracking-[0.3em] uppercase max-w-xs md:text-right">
          ¿POR QUÉ LOS NEGOCIOS ESTÁN MIGRANDO A SISTEMAS INTELIGENTES?
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            category: "Eficiencia Operativa",
            title: "Eficiencia Operativa",
            content: "Automatizar procesos no es opcional, es una ventaja competitiva para la supervivencia comercial.",
            stat1: "DE 30-50%",
            label1: "MEJORA EFICIENCIA",
            stat2: "HASTA 40%",
            label2: "REDUCCIÓN TIEMPO",
            source: "McKinsey & Company"
          },
          {
            category: "Toma de Decisiones",
            title: "Criterio Basado en Datos",
            content: "Las empresas que operan sobre infraestructuras de datos adquieren ventajas exponenciales.",
            stat1: "23x",
            label1: "PROBABILIDADES DE ADQUIRIR CLIENTES",
            stat2: "19x",
            label2: "DE SER RENTABLES",
            source: "McKinsey Global Institute"
          },
          {
            category: "Pymes en México",
            title: "Estado del Mercado Local",
            content: "La gran mayoría de las pymes en México aún opera en la sombra informativa.",
            stat1: "70%",
            label1: "NULA HERRAMIENTA ANÁLISIS",
            stat2: "MENOS DEL 30%",
            label2: "TOMA DECISIONES ESTRUCTURADAS EN DATOS",
            source: "INEGI"
          },
          {
            category: "Digitalización Pyme",
            title: "Barreras Estructurales",
            content: "La falta de sistemas sigue siendo la mayor debilidad del ecosistema pyme en México.",
            stat1: "+60%",
            label1: "OPERA SIN PROCESOS DIGITALIZADOS",
            source: "GS1 México"
          },
          {
            category: "Inteligencia Artificial",
            title: "Implementación de IA",
            content: "La adopción crece, pero el acceso a pequeños negocios depende de la forma de entrada.",
            stat1: "2 / 10",
            label1: "LA UTILIZA DE FORMA ACTIVA EN SUS OPERACIONES",
            source: "IBM"
          }
        ].map((study, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
          >
            <DossierCard {...study} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="grid grid-cols-1 md:grid-cols-4 border-t border-outline-variant bg-surface">
    <div className="p-12 border-r border-outline-variant flex flex-col gap-3">
      <span className="text-[9px] uppercase tracking-[0.3em] text-on-surface/40 font-bold">Clivia Systems</span>
      <div className="flex items-center gap-2 text-on-surface/80">
        <MapPin size={12} className="text-accent-orange" />
        <span className="text-xs font-medium tracking-widest uppercase">México</span>
      </div>
    </div>
    <div className="p-12 border-r border-outline-variant flex flex-col gap-3">
      <span className="text-[9px] uppercase tracking-[0.3em] text-on-surface/40 font-bold">Canales Activos</span>
      <a href="https://wa.me/524152159111" target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface/80 font-medium hover:text-accent-orange transition-colors tracking-wide">
        +52 415 215 9111
      </a>
      <a href="https://instagram.com/cliviamx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-on-surface/80 font-medium hover:text-accent-orange transition-colors group">
        <Instagram size={14} className="group-hover:scale-110 transition-transform" />
        <span className="tracking-wide">@cliviamx</span>
      </a>
    </div>
    <div className="p-12 border-r border-outline-variant flex flex-col gap-3">
      <span className="text-[9px] uppercase tracking-[0.3em] text-on-surface/40 font-bold">Estado Operativo</span>
      <span className="text-xs text-on-surface/80 font-medium leading-relaxed italic">
        Diseñando sistemas para empresas en crecimiento
      </span>
    </div>
    <div className="p-12 flex items-center justify-end">
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-2.5 h-2.5 rounded-full bg-accent-orange animate-pulse shadow-[0_0_10px_rgba(255,87,34,0.3)]"></div>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface/80 group-hover:text-on-surface transition-colors">Sistemas Activos</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-surface selection:bg-accent-orange selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <ServicesSection />
        <CaseStudiesSection />
        
        <section className="py-48 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-10" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-7xl font-black uppercase text-condensed leading-none mb-8">
              LA DIFERENCIA NO ESTA EN TENER MÁS HERRAMIENTAS,
            </h2>
            <p className="text-[11px] font-bold tracking-[0.4em] text-on-surface-variant uppercase mb-12">
              ESTA EN COMO ORGANIZAS TU OPERACIÓN.
            </p>
            
            <a 
              href="https://wa.me/524152159111" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-12 py-5 text-xl font-bold tracking-tighter uppercase hover:bg-accent-orange transition-all duration-300 relative group inline-block"
            >
              CONTACTAR CON CLIVIA
              <div className="node-corner group-hover:bg-white top-0 left-0" />
              <div className="node-corner group-hover:bg-white top-0 right-0" />
              <div className="node-corner group-hover:bg-white bottom-0 left-0" />
              <div className="node-corner group-hover:bg-white bottom-0 right-0" />
            </a>
            
            <div className="mt-24 flex justify-center gap-4">
              <div className="w-1.5 h-1.5 bg-accent-orange rotate-45" />
              <div className="w-1.5 h-1.5 bg-black rotate-45" />
              <div className="w-1.5 h-1.5 bg-black rotate-45" />
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
