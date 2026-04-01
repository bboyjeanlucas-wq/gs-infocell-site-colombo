import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Phone, Zap, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * GS INFOCELL Landing Page
 * Design: Apple Minimalism + Premium Tech Aesthetic
 * Color Palette: Navy Blue (#001F3F), White (#FFFFFF), Green (#10B981)
 * Typography: Poppins (Bold) for headings, Inter (Regular) for body
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    problem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert(
      "Obrigado por entrar em contato! Em breve nossa equipe retornará."
    );
    setFormData({ name: "", phone: "", email: "", problem: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] leading-tight">
                  Assistência Técnica Celular Apple Especializada
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Seu iPhone ou Android quebrou? Na GS INFOCELL, somos
                  especialistas em reparo de celulares, garantindo que seu
                  aparelho volte a funcionar perfeitamente com agilidade e
                  total confiança.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() =>
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Quero Consertar Meu Celular
                  <ArrowRight size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white font-semibold rounded-lg transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Pedir Orçamento Grátis
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031400192/j3cbDH25f6DrJBnEGfKSrG/hero-technician-cMcpyTqRxdEah2VPbfuFt9.webp"
                alt="Técnico especializado consertando iPhone"
                className="w-full max-w-md rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent"></div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
              Seu Celular Quebrado Está Te Deixando na Mão?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Você passa por algum desses problemas? A GS INFOCELL tem a
              solução.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔨",
                title: "Tela Trincada",
                description:
                  "Tela danificada que dificulta o uso e compromete a segurança?",
              },
              {
                icon: "🔋",
                title: "Bateria Viciada",
                description:
                  "Bateria que descarrega rápido demais, deixando você desconectado?",
              },
              {
                icon: "⚙️",
                title: "Aparelho Lento",
                description:
                  "Celular lento ou com falhas que atrapalham produtividade?",
              },
              {
                icon: "😰",
                title: "Medo de Reparos",
                description:
                  "Insegurança em entregar seu celular para reparo?",
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-50 border border-gray-200 hover:border-[#10B981] hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{problem.icon}</div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#001F3F] to-[#0a3a5c] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031400192/j3cbDH25f6DrJBnEGfKSrG/workshop-professional-a2eeD4QVEMxDEDpHEMyLrC.webp"
                alt="Oficina profissional da GS INFOCELL"
                className="w-full max-w-md rounded-lg shadow-2xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  GS INFOCELL: A Solução Definitiva
                </h2>
                <p className="text-lg text-gray-100 leading-relaxed">
                  Somos a sua assistência técnica celular de confiança, com foco
                  total na qualidade e na sua satisfação.
                </p>
              </div>

              {/* Solution Features */}
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Especialistas em Reparo",
                    description:
                      "Equipe qualificada para todas as marcas e modelos, incluindo Apple.",
                  },
                  {
                    icon: Zap,
                    title: "Agilidade e Eficiência",
                    description:
                      "Diagnósticos precisos e reparos rápidos para você não ficar sem seu aparelho.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Peças de Qualidade",
                    description:
                      "Apenas componentes de alta qualidade que garantem durabilidade.",
                  },
                  {
                    icon: Phone,
                    title: "Transparência Total",
                    description:
                      "Orçamentos claros e sem surpresas. Você acompanha tudo.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <feature.icon className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-200">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600">
              Confira os depoimentos de clientes satisfeitos
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Maria S.",
                role: "Cliente Satisfeita",
                text: "Meu iPhone estava com a tela completamente destruída e a GS INFOCELL consertou em poucas horas! Atendimento excelente e preço justo. Recomendo demais!",
                rating: 5,
              },
              {
                name: "João P.",
                role: "Cliente Fiel",
                text: "Precisava de um reparo urgente na bateria do meu Samsung e eles foram super rápidos e eficientes. Meu celular está como novo!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-gray-50 border-l-4 border-[#10B981] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-[#10B981] text-xl">
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-[#001F3F]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repaired Phone Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F]">
                Seu Celular Funcionando Perfeitamente
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Após o reparo na GS INFOCELL, seu aparelho volta a funcionar
                como novo, com garantia de qualidade e satisfação total.
              </p>
              <Button
                size="lg"
                className="bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Solicitar Orçamento Agora
              </Button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031400192/j3cbDH25f6DrJBnEGfKSrG/phone-repaired-BthZ9CqkdTx5MSL5SHtpF2.webp"
                alt="Smartphone reparado e funcionando perfeitamente"
                className="w-full max-w-md rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="py-16 md:py-24 bg-white scroll-smooth"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
                Não Deixe Seu Celular Quebrado Por Mais Tempo!
              </h2>
              <p className="text-lg text-gray-600">
                Preencha o formulário abaixo para solicitar seu orçamento
                gratuito
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#001F3F] mb-2">
                    Nome Completo
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-opacity-20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#001F3F] mb-2">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-opacity-20 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#001F3F] mb-2">
                  E-mail
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-opacity-20 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#001F3F] mb-2">
                  Descreva o Problema do Seu Celular
                </label>
                <Textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  placeholder="Ex: Tela trincada, bateria não carrega, aparelho lento..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-opacity-20 transition-all resize-none"
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enviar Solicitação
              </Button>

              <p className="text-center text-sm text-gray-600">
                Você também pode entrar em contato via WhatsApp:{" "}
                <a
                  href="https://wa.me/5511999999999"
                  className="text-[#10B981] font-semibold hover:underline"
                >
                  (11) 99999-9999
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001F3F] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold">GS INFOCELL</h3>
              <p className="text-gray-300">
                Assistência Técnica Especializada em Celulares
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">
                © 2026 GS INFOCELL. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Especialistas em reparo de iPhones e Smartphones
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
