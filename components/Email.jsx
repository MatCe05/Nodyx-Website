import { useState } from "react";
import emailjs from "emailjs-com";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Gracias, te contactaré en menos de 24 horas.");
        setFormData({ name: "", email: "", company: "", message: "" });
      })
      .catch(() => {
        alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente o contactanos por WhatsApp.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Nombre completo</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400 transition"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400 transition"
          placeholder="tu@email.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Empresa/Proyecto</label>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400 transition"
          placeholder="Nombre de tu empresa"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">¿Qué quieres automatizar?</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400 min-h-[120px] transition"
          placeholder="Describe los procesos que te quitan tiempo o te dan dolores de cabeza..."
          required
        />
      </div>

      <button
        className="w-full rounded-2xl px-5 py-3 bg-indigo-500 hover:bg-indigo-400 transition font-semibold inline-flex items-center justify-center gap-2"
        type="submit"
        disabled={isSending}
      >
        {isSending ? "Enviando..." : "Enviar mensaje"} <ArrowRight className="w-5 h-5" />
      </button>

      <p className="text-xs text-neutral-400 text-center">
        Te contacto en máximo 24 horas con una propuesta inicial
      </p>
    </form>
  );
}
