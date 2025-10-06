import { useState } from "react";
import { CheckCircle, ArrowRight, Zap, Workflow, Shield, Server, MessageCircle, Settings2, Globe, PlugZap, ShoppingCart, Database, Bot, CalendarCheck } from "lucide-react";

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

  const steps = [
    { step: "01", title: "Descubrimiento", desc: "Analizamos tus procesos y detectamos oportunidades de mejora." },
    { step: "02", title: "Diseño de Solución", desc: "Creamos una propuesta funcional adaptada a tu negocio." },
    { step: "03", title: "Implementación", desc: "Desplegamos la solución y te acompañamos durante la adopción." },
    { step: "04", title: "Soporte Continuo", desc: "Monitoreamos y mejoramos para que tu sistema evolucione contigo." },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 grid place-items-center">
              <span className="font-black">X</span>
            </div>
            <span className="font-semibold tracking-wide">Nodyx</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#servicios" className="hover:text-white">Qué hacemos</a>
            <a href="#productos" className="hover:text-white">Soluciones</a>
            <a href="#casos" className="hover:text-white">Casos</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
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

          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-fuchsia-500 blur-2xl opacity-20 rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 p-6 md:p-8 bg-white/5">
              <div className="grid grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 p-4 bg-white/5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center mb-3">{f.icon}</div>
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
              <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center mb-3">{s.icon}</div>
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

      <section id="productos" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Soluciones listas para implementar</h2>
        <p className="mt-2 text-neutral-300">Paquetes cerrados con alcance claro y entrega rápida.</p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {productized.map((p, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center mb-3">{p.icon}</div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-neutral-300 mt-1 flex-1">{p.desc}</p>
              <a href="https://wa.me/+573125241782" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-green-500 text-neutral-900 hover:bg-green-400 transition text-sm font-medium">Cotizar <ArrowRight className="w-4 h-4" /></a>
            </div>
          ))}
        </div>
      </section>

      <section id="casos" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Casos destacados</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-xs text-neutral-400">Caso #{i}</div>
              <h3 className="font-semibold mt-1">E‑commerce → Facturación + WhatsApp</h3>
              <p className="text-sm text-neutral-300 mt-1">Automatizamos pedidos y confirmaciones reduciendo tiempos en 70%.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-3xl border border-white/10 p-8 bg-white/5 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-black">Contáctanos 🚀</h2>
            <p className="mt-2 text-neutral-300">Hablemos de tu proyecto o idea. Te ayudamos a hacerlo realidad.</p>
            <a href="https://wa.me/+573125241782" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-green-500 text-neutral-900 hover:bg-green-400 transition text-sm font-medium">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert(`Gracias, te contactamos a ${email}`); }} className="space-y-3">
            <input className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400" placeholder="Nombre" required />
            <input className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400" placeholder="Correo" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <textarea className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400 min-h-[120px]" placeholder="Cuéntanos tu idea o proyecto" required />
            <button className="w-full rounded-2xl px-5 py-3 bg-indigo-500 hover:bg-indigo-400 transition font-semibold inline-flex items-center justify-center gap-2" type="submit">
              Enviar mensaje <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Nodyx. Innovación y automatización.</div>
          <div className="flex items-center gap-4">
            <a href="#servicios" className="hover:text-white">Qué hacemos</a>
            <a href="#productos" className="hover:text-white">Soluciones</a>
            <a href="#casos" className="hover:text-white">Casos</a>
            <a href="https://wa.me/+573125241782" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
