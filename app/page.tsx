import Image from "next/image";

import {
  Zap,
  Wrench,
  Lightbulb,
  Plug,
  ShieldCheck,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Users,
  Gauge,
  MapPinned,
} from "lucide-react";


const services = [
  {
    icon: Zap,
    title: "Instalações elétricas",
    description:
      "Instalações e adequações elétricas para residências, comércios e pequenos negócios.",
  },
  {
    icon: Wrench,
    title: "Manutenção elétrica",
    description:
      "Identificação de problemas e manutenção para manter sua instalação segura e funcionando corretamente.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação",
    description:
      "Instalação e melhorias de iluminação para deixar seus ambientes mais funcionais e agradáveis.",
  },
  {
    icon: Plug,
    title: "Tomadas e interruptores",
    description:
      "Instalação, substituição e organização de tomadas e interruptores.",
  },
];

export default function Home() {
  const whatsappMessage = encodeURIComponent(
    "Olá, Rubens! Gostaria de solicitar um orçamento para um serviço elétrico."
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <span className="text-2xl font-black tracking-tight">
              RSD<span className="text-yellow-400">.</span>
            </span>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-400">
              Soluções Elétricas
            </p>
          </div>

          <a
            href={`https://wa.me/5511990091953?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-yellow-300"
          >
            Orçamento
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Atendimento em Tatuapé e região
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Energia segura para o seu{" "}
              <span className="text-yellow-400">projeto.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Soluções elétricas com atenção aos detalhes, segurança e
              qualidade para sua casa ou negócio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/5511990091953?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-7 py-4 font-bold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Solicitar orçamento
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/5"
              >
                Conhecer serviços
              </a>
            </div>
          </div>

        {/* HERO IMAGE */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-yellow-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50">
                <Image
                  src="/images/rubens-eletricista.jpg"
                  alt="Rubens da RSD Soluções Elétricas"
                  width={800}
                  height={800}
                  priority
                  className="h-auto w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent p-6 pt-24">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                    RSD Soluções Elétricas
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    Rubens de Souza Dias
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm text-zinc-300">
                    <MapPin size={16} className="text-yellow-400" />
                    Tatuapé, São Paulo - SP
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="bg-white py-20 text-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-600">
              Serviços
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Soluções para suas necessidades elétricas.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Atendimento para serviços elétricos residenciais e comerciais,
              sempre buscando segurança e qualidade.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-zinc-200 bg-zinc-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl"
              >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-zinc-950">
                <service.icon size={26} strokeWidth={2} />
              </div>

                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
              Por que escolher a RSD?
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Cuidado em cada detalhe.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Um atendimento próximo e responsável para cuidar das necessidades
              elétricas da sua casa ou negócio.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Segurança",
                description:
                  "A segurança da instalação e das pessoas vem sempre em primeiro lugar.",
              },
              {
                icon: Users,
                title: "Atendimento personalizado",
                description:
                  "Cada serviço é avaliado de acordo com a necessidade de cada cliente.",
              },
              {
                icon: Gauge,
                title: "Soluções eficientes",
                description:
                  "Buscamos soluções práticas e adequadas para cada situação.",
              },
              {
                icon: MapPinned,
                title: "Atendimento local",
                description:
                  "Atendimento em Tatuapé e região, facilitando o contato com clientes locais.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-zinc-950">
                  <item.icon size={26} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-zinc-100 py-20 text-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-600">
              Sobre a RSD
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Experiência e cuidado em cada serviço.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              A RSD Soluções Elétricas nasceu com o objetivo de oferecer
              atendimento próximo, responsável e de qualidade para clientes
              que precisam de serviços elétricos.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Sob responsabilidade de Rubens de Souza Dias, o atendimento é
              realizado em Tatuapé e região, com foco em entender a
              necessidade de cada cliente.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-950 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Atendimento
            </p>

            <h3 className="mt-4 text-3xl font-black">
              Vamos conversar sobre seu projeto?
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Entre em contato pelo WhatsApp e explique o que você precisa.
              Será um prazer avaliar o serviço.
            </p>

            <a
              href={`https://wa.me/5511990091953?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-yellow-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-yellow-300"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
        <section className="bg-white py-20 text-zinc-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-yellow-600">
                  Atendimento
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  Precisou de um eletricista?
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
                  A RSD Soluções Elétricas atende clientes no Tatuapé e região.
                  Entre em contato para explicar o que você precisa e solicitar um
                  orçamento.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400">
                      <MapPin size={22} />
                    </div>

                    <div>
                      <p className="font-bold">Área de atendimento</p>
                      <p className="text-zinc-600">Tatuapé e região — São Paulo/SP</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400">
                      <Phone size={22} />
                    </div>

                    <div>
                      <p className="font-bold">Telefone / WhatsApp</p>
                      <a
                        href="tel:+5511990091953"
                        className="text-zinc-600 transition hover:text-zinc-950"
                      >
                        (11) 99009-1953
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/5511990091953?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
                >
                  <MessageCircle size={20} />
                  Falar pelo WhatsApp
                </a>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yellow-400/10 blur-3xl" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-zinc-950">
                    <Zap size={30} fill="currentColor" />
                  </div>

                  <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                    RSD Soluções Elétricas
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Segurança e cuidado em cada serviço.
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-400">
                    Entre em contato e conte o que você precisa. A RSD poderá avaliar
                    sua necessidade e orientar sobre o serviço adequado.
                  </p>

                  <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-zinc-950">
                      <Phone size={18} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Fale agora
                      </p>
                      <p className="font-bold">(11) 99009-1953</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-16 text-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Precisa de um eletricista?
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Solicite seu orçamento.
            </h2>
          </div>

          <a
            href={`https://wa.me/5511990091953?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-zinc-950 px-7 py-4 font-bold text-white transition hover:bg-zinc-800"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-xl font-black">
              RSD<span className="text-yellow-400">.</span>
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Soluções Elétricas
            </p>
          </div>

          <div className="text-sm text-zinc-500">
            <p>Tatuapé, São Paulo - SP</p>
            <p className="mt-1">(11) 99009-1953</p>
          </div>

          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} RSD Soluções Elétricas.
          </p>
        </div>
      </footer>

              <a
                href={`https://wa.me/5511990091953?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a RSD pelo WhatsApp"
                className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105 hover:bg-green-400 sm:bottom-6 sm:right-6"
              >
                <MessageCircle size={28} />
              </a>

    </main>
  );
}