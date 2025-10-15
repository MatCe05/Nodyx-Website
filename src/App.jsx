import { useState } from "react";
import { CheckCircle, ArrowRight, Zap, Workflow, Shield, Server, MessageCircle, Settings2, Globe, PlugZap, ShoppingCart, Database, Bot, CalendarCheck, Users, Lightbulb, Code, TestTube, Rocket, Headphones, Star, Award, Clock, DollarSign, Play, Heart, Target } from "lucide-react";


export default function NodyxLanding() {
  const [email, setEmail] = useState("");


  const features = [
    { icon: <Workflow className="w-6 h-6" />, title: "Automatizaciones n8n", desc: "Conecta apps, APIs y bases de datos en flujos inteligentes." },
    { icon: <Zap className="w-6 h-6" />, title: "Ahorro de tiempo", desc: "Reduce tareas repetitivas hasta 80% y disminuye errores." },
    { icon: <Shield className="w-6 h-6" />, title: "Calidad y transparencia", desc: "Entregables claros y comunicación constante." },
    { icon: <Server className="w-6 h-6" />, title: "Cloud o VPS", desc: "Despliegue en n8n Cloud o servidor propio optimizado." },
  ];


  const servicePillars = [
    {
      title: "Automatización Inteligente",
      icon: <PlugZap className="w-6 h-6" />,
      bullets: [
        "Flujos automatizados con n8n",
        "Integraciones entre sistemas y plataformas",
        "Bots y notificaciones en WhatsApp y Email",
      ],
    },
    {
      title: "Desarrollo de Software a Medida",
      icon: <Settings2 className="w-6 h-6" />,
      bullets: [
        "Sistemas de agendamiento y turnos",
        "Aplicaciones internas y paneles de control",
        "Gestión de inventario y pedidos",
      ],
    },
    {
      title: "Páginas Web y E‑commerce",
      icon: <Globe className="w-6 h-6" />,
      bullets: [
        "Diseño y desarrollo web profesional",
        "Tiendas en línea y catálogos digitales",
        "Optimización SEO y análisis de tráfico",
      ],
    },
  ];


  const processSteps = [
    { 
      step: "01", 
      title: "Descubrimiento", 
      desc: "Analizamos tus procesos actuales, identificamos oportunidades de mejora y definimos objetivos claros.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    { 
      step: "02", 
      title: "Planificación", 
      desc: "Diseñamos la arquitectura de la solución, definimos alcance, cronograma y recursos necesarios.",
      icon: <Users className="w-6 h-6" />
    },
    { 
      step: "03", 
      title: "Desarrollo", 
      desc: "Implementamos la solución en sprints cortos con entregas iterativas y feedback continuo.",
      icon: <Code className="w-6 h-6" />
    },
    { 
      step: "04", 
      title: "Pruebas", 
      desc: "Realizamos testing exhaustivo, control de calidad y validación con usuarios reales.",
      icon: <TestTube className="w-6 h-6" />
    },
    { 
      step: "05", 
      title: "Despliegue", 
      desc: "Ponemos en producción la solución y realizamos la migración de datos si es necesario.",
      icon: <Rocket className="w-6 h-6" />
    },
    { 
      step: "06", 
      title: "Soporte", 
      desc: "Brindamos mantenimiento continuo, monitoreo y mejoras para que evolucione contigo.",
      icon: <Headphones className="w-6 h-6" />
    },
  ];


  const productized = [
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      title: "Agenda Pro",
      desc: "Sistema de turnos/citas con panel admin, pagos opcionales y recordatorios por WhatsApp.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Shop Sync",
      desc: "Conecta tu tienda con facturación, inventario y notificaciones al cliente.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "DataFlow",
      desc: "ETL liviano: unifica datos, limpia y genera reportes o dashboards.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Chat Assist",
      desc: "Chatbots de atención en WhatsApp/Telegram para FAQs, pedidos o soporte.",
    },
  ];


  const whyChooseUs = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Enfoque personal",
      desc: "Como empresa nueva, cada proyecto recibe atención directa del fundador y máximo cuidado en los detalles."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Precios competitivos",
      desc: "Al estar empezando, ofrecemos tarifas más accesibles sin comprometer la calidad del servicio."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "100% personalizado",
      desc: "No tenemos procesos rígidos. Cada solución se adapta completamente a las necesidades de tu negocio."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponibilidad total",
      desc: "Al tener pocos clientes, podemos dedicar más tiempo y estar disponibles cuando nos necesites."
    }
  ];


  const successCases = [
    {
      industry: "Retail Local",
      title: "Panadería automatiza pedidos por WhatsApp",
      description: "Una panadería familiar que recibía 50+ pedidos diarios por WhatsApp. Creamos un bot que toma pedidos, calcula totales y confirma disponibilidad automáticamente.",
      results: [
        { metric: "Tiempo de respuesta", improvement: "-80%" },
        { metric: "Errores en pedidos", improvement: "-90%" }
      ]
    },
    {
      industry: "Servicios",
      title: "Consultorio médico optimiza citas",
      description: "Clínica pequeña que gestionaba citas por llamadas perdía muchas por no contestar. Implementamos sistema con recordatorios automáticos y reagendamiento.",
      results: [
        { metric: "Citas perdidas", improvement: "-65%" },
        { metric: "Tiempo administrativo", improvement: "-50%" }
      ]
    },
    {
      industry: "E-commerce",
      title: "Tienda online conecta todo su flujo",
      description: "Tienda que vendía por Instagram y gestionaba todo manualmente. Conectamos ventas → inventario → facturación → envío en un solo flujo.",
      results: [
        { metric: "Tiempo de proceso", improvement: "-75%" },
        { metric: "Satisfacción cliente", improvement: "+40%" }
      ]
    }
  ];


  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#servicios" className="hover:text-white transition-colors">Qué hacemos</a>
            <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
            <a href="#productos" className="hover:text-white transition-colors">Soluciones</a>
            <a href="#casos" className="hover:text-white transition-colors">Casos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          
          <a href="https://wa.me/+573125241782" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-green-500 text-neutral-900 hover:bg-green-400 transition text-sm font-medium">
            WhatsApp <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </header>


      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-600/20 via-indigo-600/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Soluciones digitales que <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">automatizan tu negocio</span>
            </h1>
            <p className="mt-5 text-neutral-300 text-lg">
              En <strong>Nodyx</strong> desarrollamos automatizaciones, software y páginas web para hacer que tu negocio funcione de forma más eficiente y moderna.
            </p>
            
            {/* CTAs principales */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-fuchsia-500 text-white hover:bg-fuchsia-400 transition font-semibold">
                Agenda consulta gratuita <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#casos" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/5 transition font-medium">
                <Play className="w-5 h-5" /> Ver casos de éxito
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-fuchsia-500 blur-2xl opacity-20 rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 p-6 md:p-8 bg-white/5">
              <div className="grid grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 p-4 bg-white/5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 border border-indigo-500/30 grid place-items-center mb-3">{f.icon}</div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="text-sm text-neutral-300 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="servicios" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Qué hacemos</h2>
        <p className="mt-2 text-neutral-300">Combinamos automatización, desarrollo y web para digitalizar tu negocio.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {servicePillars.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 border border-indigo-500/30 grid place-items-center mb-3">{s.icon}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {s.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>


      {/* Por qué elegirnos - Versión para empresa nueva */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Por qué elegirnos</h2>
        <p className="mt-2 text-neutral-300">Las ventajas de trabajar con una empresa nueva y comprometida.</p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 border border-indigo-500/30 grid place-items-center mx-auto mb-4">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-neutral-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section id="proceso" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Nuestro proceso</h2>
        <p className="mt-2 text-neutral-300">Metodología ágil y transparente para garantizar el éxito de tu proyecto.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 border border-indigo-500/30 grid place-items-center">
                  {step.icon}
                </div>
                <div className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-lg">
                  {step.step}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section id="productos" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Soluciones listas para implementar</h2>
        <p className="mt-2 text-neutral-300">Paquetes cerrados con alcance claro y entrega rápida.</p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {productized.map((p, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 border border-indigo-500/30 grid place-items-center mb-3">{p.icon}</div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-neutral-300 mt-1 flex-1">{p.desc}</p>
              <a href="https://wa.me/+573125241782" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-fuchsia-500 text-white hover:bg-fuchsia-400 transition text-sm font-medium">Cotizar <ArrowRight className="w-4 h-4" /></a>
            </div>
          ))}
        </div>
      </section>


      {/* Casos de éxito */}
      <section id="casos" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Casos de éxito</h2>
        <p className="mt-2 text-neutral-300">Proyectos reales que hemos automatizado para pequeñas empresas.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {successCases.map((caso, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-xs text-neutral-400">{caso.industry}</div>
              <h3 className="font-semibold mt-1">{caso.title}</h3>
              <p className="text-sm text-neutral-300 mt-2">{caso.description}</p>
              <div className="mt-4 space-y-2">
                {caso.results.map((result, ri) => (
                  <div key={ri} className="flex justify-between text-sm">
                    <span className="text-neutral-400">{result.metric}:</span>
                    <span className="text-green-400 font-semibold">{result.improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Cómo empezar */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-3xl border border-white/10 p-8 bg-gradient-to-r from-white/5 to-white/10">
          <h2 className="text-2xl md:text-4xl font-black text-center mb-2">¿Cómo empezar?</h2>
          <p className="text-center text-neutral-300 mb-8">Solo necesitas 4 pasos para automatizar tu negocio</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-fuchsia-500 text-white font-bold text-xl grid place-items-center mx-auto mb-3">1</div>
              <h3 className="font-semibold">Conversación inicial</h3>
              <p className="text-sm text-neutral-300 mt-1">15 min por WhatsApp para entender tu situación</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-fuchsia-500 text-white font-bold text-xl grid place-items-center mx-auto mb-3">2</div>
              <h3 className="font-semibold">Análisis gratuito</h3>
              <p className="text-sm text-neutral-300 mt-1">Te muestro exactamente qué se puede automatizar</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-fuchsia-500 text-white font-bold text-xl grid place-items-center mx-auto mb-3">3</div>
              <h3 className="font-semibold">Propuesta clara</h3>
              <p className="text-sm text-neutral-300 mt-1">Plan detallado con precio fijo, sin sorpresas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-fuchsia-500 text-white font-bold text-xl grid place-items-center mx-auto mb-3">4</div>
              <h3 className="font-semibold">Desarrollo y entrega</h3>
              <p className="text-sm text-neutral-300 mt-1">Implementación rápida con tu aprobación en cada paso</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="https://wa.me/+573125241782" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 bg-fuchsia-500 text-white hover:bg-fuchsia-400 transition font-semibold text-lg">
              Empezar ahora por WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>


      {/* Contacto*/}
      <section id="contacto" className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-3xl border border-white/10 p-8 bg-white/5 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-black">¡Hablemos de tu proyecto! 🚀</h2>
            <p className="mt-2 text-neutral-300">Como empresa nueva, cada cliente es importante. Te doy atención personalizada y respuesta rápida.</p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">Consulta gratuita de 30 minutos</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Respuesta en menos de 24 horas</span>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a href="https://wa.me/+573125241782" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-green-500 text-neutral-900 hover:bg-green-400 transition font-semibold">
                <MessageCircle className="w-5 h-5" /> WhatsApp directo
              </a>
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert(`Gracias, te contacto en menos de 24 horas a ${email}`); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre completo</label>
              <input className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400 transition" placeholder="Tu nombre" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400 transition" placeholder="tu@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Empresa/Proyecto</label>
              <input className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400 transition" placeholder="Nombre de tu empresa" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">¿Qué quieres automatizar?</label>
              <textarea className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400 min-h-[120px] transition" placeholder="Describe los procesos que te quitan tiempo o te dan dolores de cabeza..." required />
            </div>
            <button className="w-full rounded-2xl px-5 py-3 bg-indigo-500 hover:bg-indigo-400 transition font-semibold inline-flex items-center justify-center gap-2" type="submit">
              Enviar mensaje <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-neutral-400 text-center">Te contacto en máximo 24 horas con una propuesta inicial</p>
          </form>
        </div>
      </section>


      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Nodyx. Automatización para pequeñas empresas.</div>
          <div className="flex items-center gap-4">
            <a href="#servicios" className="hover:text-white">Qué hacemos</a>
            <a href="#proceso" className="hover:text-white">Proceso</a>
            <a href="#productos" className="hover:text-white">Soluciones</a>
            <a href="#casos" className="hover:text-white">Casos</a>
            <a href="https://wa.me/+573125241782" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
