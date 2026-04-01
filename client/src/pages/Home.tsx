import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Phone,
  Zap,
  Shield,
  ArrowRight,
  Star,
  Smartphone,
  Battery,
  Wrench,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

/**
 * GS INFOCELL Landing Page - Versão CRO Otimizada
 * Design: Apple Minimalism + Premium Tech Aesthetic + Conversão Brasileira
 * Color Palette: Navy Blue (#001F3F), White (#FFFFFF), WhatsApp Green (#25D366)
 * Focus: Urgência, Confiança, Escaneabilidade, Mobile-First
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

  const whatsappLink =
    "https://wa.me/5511999999999?text=Olá%20GS%20INFOCELL!%20Gostaria%20de%20um%20orçamento%20para%20reparar%20meu%20celular.";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section - Otimizado para Conversão */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-6 order-2 lg:order-1">
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-[#001F3F] leading-tight">
                  Assistência Técnica Celular Apple Especializada
                </h1>

                {/* Trust Trigger - Avaliações */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#001F3F]">
                    5.0
                  </span>
                  <span className="text-xs text-gray-600">
                    (Mais de 500 clientes satisfeitos)
                  </span>
                </div>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Seu iPhone ou Android quebrou? Na GS INFOCELL, somos
                  especialistas em reparo de celulares, garantindo que seu
                  aparelho volte a funcionar perfeitamente com agilidade e
                  total confiança.
                </p>
              </div>

              {/* CTA Buttons - Otimizados para Conversão */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1fa857] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  💬 Pedir Orçamento via WhatsApp
                  <ArrowRight size={18} />
                </a>
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
                  Pedir Orçamento por Formulário
                </Button>
              </div>

              {/* Micro-texto de Urgência */}
              <p className="text-xs md:text-sm text-gray-600 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#25D366]" />
                Resposta imediata em horário comercial
              </p>

              {/* Trust Trigger - Velocidade */}
              <div className="bg-gradient-to-r from-[#25D366]/10 to-[#001F3F]/10 p-3 rounded-lg border border-[#25D366]/20">
                <p className="text-sm font-semibold text-[#001F3F]">
                  ⚡ Reparos rápidos em até 60 minutos
                </p>
                <p className="text-xs text-gray-600">
                  Para modelos selecionados
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031400192/j3cbDH25f6DrJBnEGfKSrG/hero-image-custom_d85b6767.jpg"
                alt="Logo GS INFOCELL"
                className="w-full max-w-sm rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent"></div>
      </section>

      {/* Marcas Atendidas - Autoridade */}
      <section className="py-6 md:py-8 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs md:text-sm font-semibold text-gray-600 mb-4">
            Especialistas em reparos avançados das principais marcas:
          </p>
          <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
            {["Apple", "Samsung", "Motorola", "Xiaomi"].map((brand) => (
              <div
                key={brand}
                className="text-gray-400 font-bold text-sm md:text-base opacity-60 hover:opacity-100 transition-opacity"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section - Otimizado para Escaneabilidade */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-3">
              Qual é o Problema do Seu Celular?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Identifique em menos de 2 segundos
            </p>
          </div>

          {/* Problem Cards - Modernos e Minimalistas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                icon: AlertCircle,
                title: "Tela Trincada",
                description: "Tela danificada que dificulta o uso?",
                color: "text-red-500",
              },
              {
                icon: Battery,
                title: "Bateria Viciada",
                description: "Descarrega rápido demais?",
                color: "text-yellow-500",
              },
              {
                icon: Smartphone,
                title: "Aparelho Lento",
                description: "Travamentos e falhas frequentes?",
                color: "text-orange-500",
              },
              {
                icon: Wrench,
                title: "Não Liga",
                description: "Celular não responde mais?",
                color: "text-gray-500",
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="p-5 md:p-6 rounded-lg bg-white border-2 border-gray-200 hover:border-[#25D366] hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <problem.icon
                    size={28}
                    className={`${problem.color} flex-shrink-0 group-hover:scale-110 transition-transform`}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#001F3F] mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA After Problems */}
          <div className="text-center mt-8 md:mt-12">
            <p className="text-gray-600 mb-4">
              Encontrou o seu problema? Clique abaixo para conversar com um
              especialista!
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1fa857] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              💬 Conversar no WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#001F3F] to-[#0a3a5c] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031400192/j3cbDH25f6DrJBnEGfKSrG/workshop-professional-a2eeD4QVEMxDEDpHEMyLrC.webp"
                alt="Oficina profissional da GS INFOCELL"
                className="w-full max-w-md rounded-lg shadow-2xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Por Que Escolher a GS INFOCELL?
                </h2>
                <p className="text-base md:text-lg text-gray-100 leading-relaxed">
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
                    <feature.icon className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-200">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-3">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Confira os depoimentos de clientes satisfeitos
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                className="p-6 md:p-8 rounded-lg bg-gray-50 border-l-4 border-[#25D366] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-[#25D366] text-lg">
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm md:text-base">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-[#001F3F]">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repaired Phone Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F]">
                Seu Celular Funcionando Perfeitamente
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Após o reparo na GS INFOCELL, seu aparelho volta a funcionar
                como novo, com garantia de qualidade e satisfação total.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1fa857] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                💬 Solicitar Orçamento Agora
                <ArrowRight size={18} />
              </a>
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
        className="py-12 md:py-16 bg-white scroll-smooth"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-3">
                Não Deixe Seu Celular Quebrado Por Mais Tempo!
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Preencha o formulário abaixo para solicitar seu orçamento
                gratuito
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-opacity-20 transition-all text-sm md:text-base"
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
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-opacity-20 transition-all text-sm md:text-base"
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-opacity-20 transition-all text-sm md:text-base"
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-opacity-20 transition-all resize-none text-sm md:text-base"
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#1fa857] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg"
              >
                Enviar Solicitação
              </Button>

              <p className="text-center text-xs md:text-sm text-gray-600">
                Ou converse conosco direto no WhatsApp:{" "}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-semibold hover:underline"
                >
                  💬 (11) 99999-9999
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001F3F] text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">GS INFOCELL</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Assistência Técnica Especializada em Celulares
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm md:text-base">
                © 2026 GS INFOCELL. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-2">
                Especialistas em reparo de iPhones e Smartphones
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
