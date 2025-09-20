import { useState } from "react";
import { CheckCircle, ArrowRight, Zap, Workflow, Shield, Server, LineChart, MessagesSquare } from "lucide-react";

export default function NodyxLanding() {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <Workflow className="w-6 h-6" />, title: "Automatizaciones n8n",
      desc: "Conecta apps, APIs y bases de datos en flujos inteligentes sin complicaciones."
    },
    {
      icon: <Zap className="w-6 h-6" />, title: "Ahorro de tiempo",
      desc: "Reduce tareas repetitivas hasta 80% y enfócate en crecer."
    },
    {
      icon: <Shield className="w-6 h-6" />, title: "Seguridad & buenas prácticas",
      desc: "Diseño con PDD, SDD, TDD, test plan y control de accesos."
    },
    {
      icon: <Server className="w-6 h-6" />, title: "Cloud o VPS",
      desc: "Despliegue en n8n Cloud o servidor propio optimizado para costo/beneficio."
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$700.000 COP / mes",
      bullets: [
        "1-2 automatizaciones",
        "Hasta 10k ejecuciones/mes",
        "Monitoreo básico",
        "Soporte por correo"
      ]
    },
    {
      name: "Pyme",
      price: "$1.200.000 COP / mes",
      highlight: true,
      bullets: [
        "Hasta 5 automatizaciones",
        "20k–50k ejecuciones/mes",
        "SLA 8x5 + WhatsApp",
        "Reportes mensuales"
      ]
    },
    {
      name: "Pro",
      price: "$2.000.000 COP / mes",
      bullets: [
        "Automatizaciones ilimitadas*",
        ">50k ejecuciones/mes",
        "SLA 12x5 + on-call",
        "Entornos dev/prod"
      ]
    }
  ];

  const steps = [
    { step: "01", title: "Descubrimiento", desc: "Brief, mapa de procesos y KPIs (ahorro, tiempo, errores)." },
    { step: "02", title: "Dimensionamiento", desc: "Factibilidad técnica, costos Cloud vs VPS, estimación/ROI." },
    { step: "03", title: "Diseño & Build", desc: "PDD • SDD • TDD, desarrollo en n8n con buenas prácticas." },
    { step: "04", title: "Pruebas & Go-Live", desc: "Test plan, QA con datos reales, manuales y capacitación." },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 grid place-items-center">
              <span className="font-black">X</span>
            </div>
            <span className="font-semibold tracking-wide">Nodyx</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#proceso" className="hover:text-white">Proceso</a>
            <a href="#precios" className="hover:text-white">Precios</a>
            <a href="#casos" className="hover:text-white">Casos</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-neutral-900 hover:opacity-90 transition text-sm font-medium">
            Empezar <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-600/20 via-indigo-600/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Automatiza tus procesos <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">con Nodyx</span>
            </h1>
            <p className="mt-5 text-neutral-300 text-lg">
              Diseñamos flujos en <strong>n8n</strong> que conectan tus herramientas, reducen costos y aceleran tu operación.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="rounded-2xl px-5 py-3 bg-indigo-500 hover:bg-indigo-400 transition font-semibold inline-flex items-center gap-2">
                Solicitar demo <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#precios" className="rounded-2xl px-5 py-3 border border-white/20 hover:border-white/40 transition font-semibold">
                Ver precios
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-neutral-400 text-sm">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> PDD • SDD • TDD • Test plan</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Cloud o VPS</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-fuchsia-500 blur-2xl opacity-20 rounded-3xl"/>
            <div className="relative rounded-3xl border border-white/10 p-6 md:p-8 bg-white/5">
              <div className="grid grid-cols-2 gap-4">
                {features.map((f,i)=> (
                  <div key={i} className="rounded-2xl border border-white/10 p-4 bg-white/5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center mb-3">
                      {f.icon}
                    </div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="text-sm text-neutral-300 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Servicios</h2>
        <p className="mt-2 text-neutral-300">Automatizaciones llave en mano con metodología y documentación completa.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {title:"Integraciones & APIs",desc:"Sincroniza e‑commerce, CRM, ERPs y mensajería.",icon:<MessagesSquare className='w-6 h-6'/>},
            {title:"Bots & Notificaciones",desc:"WhatsApp, email, monitoreos y alertas en tiempo real.",icon:<Zap className='w-6 h-6'/>},
            {title:"Reportes & Data",desc:"ETL, hojas de cálculo, dashboards y backups automáticos.",icon:<LineChart className='w-6 h-6'/>}
          ].map((s,i)=> (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center mb-3">{s.icon}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-neutral-300 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Nuestro proceso</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((s,i)=> (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-sm text-neutral-400">{s.step}</div>
              <h3 className="font-semibold mt-1">{s.title}</h3>
              <p className="text-sm text-neutral-300 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Planes</h2>
        <p className="mt-2 text-neutral-300">También hacemos proyectos a medida y cobramos solo por valor entregado.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {plans.map((p,i)=> (
            <div key={i} className={`rounded-2xl border p-6 bg-white/5 ${p.highlight? 'border-fuchsia-400/40' : 'border-white/10'}`}>
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <div className="text-3xl font-black mt-2">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {p.bullets.map((b,bi)=> (
                  <li key={bi} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5"/> {b}</li>
                ))}
              </ul>
              <a href="#contacto" className="mt-6 inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-neutral-900 hover:opacity-90 transition text-sm font-medium">
                Empezar <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-4xl font-black">Casos destacados</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=> (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-xs text-neutral-400">Caso #{i}</div>
              <h3 className="font-semibold mt-1">E‑commerce → Facturación + WhatsApp</h3>
              <p className="text-sm text-neutral-300 mt-1">Automatizamos pedidos y confirmaciones reduciendo tiempos en 70%.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-3xl border border-white/10 p-8 bg-white/5 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-black">Hablemos 🚀</h2>
            <p className="mt-2 text-neutral-300">Cuéntanos tu proceso y te enviamos una demo + estimación de ROI.</p>
            <ul className="mt-6 space-y-2 text-neutral-300 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Respuesta en 24h</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> NDA a solicitud</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Precios claros y sin sorpresas</li>
            </ul>
          </div>
          <form onSubmit={(e)=>{e.preventDefault(); alert(`Gracias, te contactamos a ${email}`)}} className="space-y-3">
            <input className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400" placeholder="Nombre" required />
            <input className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400" placeholder="Correo" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
            <textarea className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400 min-h-[120px]" placeholder="¿Qué proceso quieres automatizar?" required />
            <button className="w-full rounded-2xl px-5 py-3 bg-indigo-500 hover:bg-indigo-400 transition font-semibold inline-flex items-center justify-center gap-2" type="submit">
              Solicitar propuesta <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-neutral-400">Al enviar, aceptas nuestra política de datos. Te contactaremos en máximo 24h.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Nodyx. Automatización inteligente.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
