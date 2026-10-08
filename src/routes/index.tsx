import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Zap,
  ShieldCheck,
  Sparkles,
  Rocket,
  Check,
  X,
  ChevronDown,
  ArrowRight,
  Play,
  Code2,
  Terminal,
  Layers,
  Clock3,
  BadgeCheck,
  MessageCircle,
  Star,
  Menu,
  ExternalLink,
  Download,
  Cpu,
  Globe,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [billing, setBilling] = useState<"tokens" | "unlimited">("tokens");

  return (
    <div className="min-h-screen bg-[#080a14] text-white antialiased selection:bg-[#2D8BFF] selection:text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap'); *{font-family:Inter,system-ui,sans-serif} .display{font-family:Space Grotesk,sans-serif}`}</style>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#080a14]/70 border-b border-white/10">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6 h-[64px] flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#2D8BFF] flex items-center justify-center font-black">N</div>
            <div className="leading-none">
              <div className="display font-bold tracking-tight">NEXA PRO</div>
              <div className="text-[11px] tracking-[0.18em] text-white/60 font-semibold">CLAUDE CODE EDITION</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
            <a href="#como-funciona" className="hover:text-white">Como funciona</a>
            <a href="#planos" className="hover:text-white">Planos</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#garantia" className="hover:text-white">Garantia</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#planos" className="rounded-full bg-white text-[#080a14] px-5 py-2.5 text-sm font-bold hover:bg-white/90 transition inline-flex items-center gap-2">
              Ver planos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden h-9 w-9 rounded-full border border-white/15 flex items-center justify-center">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3 bg-[#080a14]">
            <a href="#como-funciona" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium">Como funciona</a>
            <a href="#planos" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium">Planos</a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium">FAQ</a>
            <a href="#planos" className="mt-2 flex justify-center rounded-full bg-[#2D8BFF] py-3 text-sm font-bold">Ver planos</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8BFF]/15 via-transparent to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#2D8BFF]/20 blur-[80px]" />
        <div className="relative mx-auto max-w-[1160px] px-4 md:px-6 py-10 md:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2D8BFF]/15 border border-[#2D8BFF]/30 px-3 py-1.5 text-xs font-bold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> MÉTODO ATUALIZADO PARA O LOVABLE 2026
            </div>
            <h1 className="display mt-4 text-[34px] md:text-[48px] font-bold leading-[0.95] tracking-tight">
              Travou no <span className="text-[#2D8BFF]">Lovable</span>? <br />
              O Claude Code <span className="bg-gradient-to-r from-[#2D8BFF] to-cyan-400 bg-clip-text text-transparent">destrava hoje.</span>
            </h1>
            <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed text-white/70 max-w-[560px]">
              O chat do Lovable limitou e seu comando não executa mais. O <b className="text-white">Claude Code oficial</b> abre o código do seu projeto e aplica a alteração direto — sem passar pelo chat, sem gastar crédito lá.
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs text-white/60">
              <BadgeCheck className="h-4 w-4 text-emerald-400" /> Conexão direta com seu repositório
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <Lock className="h-3.5 w-3.5" /> Seu código continua seu
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#planos" className="inline-flex items-center gap-2 rounded-full bg-[#2D8BFF] px-7 py-3.5 text-sm font-extrabold hover:bg-[#1a78ee] transition shadow-lg shadow-[#2D8BFF]/20">
                Quero destravar agora <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#como-funciona" className="inline-flex items-center gap-2 rounded-full bg-white text-[#080a14] px-7 py-3.5 text-sm font-bold hover:bg-white/90 transition">
                <Play className="h-4 w-4" /> Ver como funciona
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-xs">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=11" alt="" className="h-7 w-7 rounded-full border-2 border-[#080a14]" />
                <img src="https://i.pravatar.cc/100?img=14" alt="" className="h-7 w-7 rounded-full border-2 border-[#080a14]" />
                <img src="https://i.pravatar.cc/100?img=32" alt="" className="h-7 w-7 rounded-full border-2 border-[#080a14]" />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1 font-bold"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.9/5 em 2.000+ avaliações</div>
                <div className="text-white/60">Quem migrou voltou a entregar no mesmo dia</div>
              </div>
            </div>
          </div>

          {/* TERMINAL CARD */}
          <div className="relative">
            <div className="rounded-[24px] bg-white/[0.06] border border-white/10 backdrop-blur p-3 shadow-2xl">
              <div className="rounded-[16px] bg-[#0f1221] border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-xs font-mono text-white/60 flex items-center gap-2">
                    <Terminal className="h-3.5 w-3.5" /> claude-code — nexa pro
                  </div>
                  <div className="h-2 w-16 rounded-full bg-white/10" />
                </div>
                <div className="p-5 font-mono text-xs leading-relaxed">
                  <div className="text-white/50">$ claude --project ./meu-app-lovable</div>
                  <div className="text-emerald-400">✔ Repositório conectado com sucesso</div>
                  <div className="text-white/90 mt-3">
                    <span className="text-white/50">&gt;</span> Crie uma página de checkout com PIX e cartão, <br />
                    com validação e e-mail de confirmação
                  </div>
                  <div className="mt-3 rounded-lg bg-white/[0.06] border border-white/10 p-3">
                    <div className="flex items-center gap-2 text-white/80">
                      <Cpu className="h-3.5 w-3.5 text-[#2D8BFF]" /> Analisando código...
                      <span className="ml-auto text-emerald-400 flex items-center gap-1">
                        <Check className="h-3 w-3" /> feito
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[92%] bg-[#2D8BFF] rounded-full" />
                    </div>
                    <div className="mt-2 text-white/60">Editando 3 arquivos • Criando 1 rota • Sem tocar no chat do Lovable</div>
                  </div>
                  <div className="mt-3 text-emerald-400">✔ Alteração aplicada. Pronto para deploy.</div>
                  <div className="mt-1 text-white/50">Tempo: 47s • Créditos Lovable: 0 consumidos</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-2 md:right-4 bg-white text-[#080a14] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 border border-black/5">
              <div className="h-9 w-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-extrabold leading-none">Sem gastar crédito Lovable</div>
                <div className="text-xs text-black/60">Execução direta no código</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOR vs SOLUÇÃO */}
      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6 grid md:grid-cols-2 gap-5">
          <div className="rounded-[20px] bg-white/[0.06] border border-white/10 p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/30 px-3 py-1 text-xs font-bold text-red-300">
              <X className="h-3.5 w-3.5" /> O MÉTODO ANTIGO TRAVOU
            </div>
            <h3 className="display mt-3 text-xl font-bold">Antes: dependia do chat do Lovable</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li className="flex gap-2">
                <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" /> Créditos acabam e o comando para no meio
              </li>
              <li className="flex gap-2">
                <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" /> Fila, limite diário e erro de execução
              </li>
              <li className="flex gap-2">
                <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" /> Sem controle real sobre o código
              </li>
            </ul>
          </div>
          <div className="rounded-[20px] bg-[#2D8BFF] p-6 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-3 py-1 text-xs font-bold">
              <Check className="h-3.5 w-3.5" /> COM NEXA PRO
            </div>
            <h3 className="display mt-3 text-xl font-bold">Agora: Claude Code direto no código</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/90">
              <li className="flex gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0" /> Abre o repositório e edita arquivo por arquivo
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0" /> Funciona mesmo com o Lovable limitado
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0" /> Você revisa e dá push quando quiser
              </li>
            </ul>
            <a href="#planos" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-[#2D8BFF] px-5 py-2.5 text-sm font-extrabold">
              Começar agora <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-10 md:py-12">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6">
          <div className="text-center max-w-[720px] mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-bold tracking-widest">COMO FUNCIONA</div>
            <h2 className="display mt-3 text-[28px] md:text-[36px] font-bold leading-none">3 passos para voltar a entregar</h2>
            <p className="mt-3 text-sm text-white/60">Sem gambiarra. É o Claude Code oficial conectado ao seu projeto.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { icon: Globe, title: "1. Conecte o projeto", desc: "Aponte o Nexa Pro para o repositório do seu app Lovable (GitHub). Leva menos de 1 minuto." },
              { icon: Code2, title: "2. Descreva a alteração", desc: "Digite o que precisa — 'crie checkout', 'corrija o bug do login', 'mude as cores' — como falaria com um dev." },
              { icon: Rocket, title: "3. Revise e publique", desc: "O Claude edita o código localmente. Você confere o diff e faz o push. Seu deploy continua normal." },
            ].map((s) => (
              <div key={s.title} className="rounded-[20px] bg-white/[0.06] border border-white/10 p-6">
                <div className="h-10 w-10 rounded-xl bg-[#2D8BFF] flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 display font-bold">{s.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[20px] bg-white/[0.06] border border-white/10 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Layers className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-bold">Compatível com seu fluxo atual</div>
                <div className="text-xs text-white/60">Lovable • GitHub • Supabase • Deploy onde você já usa</div>
              </div>
            </div>
            <div className="text-xs text-white/60 flex items-center gap-2">
              <Clock3 className="h-4 w-4" /> Configuração em ~60 segundos
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-6">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6 grid md:grid-cols-4 gap-4">
          {[
            { icon: Zap, title: "Sem fila do Lovable", desc: "Executa direto no código" },
            { icon: ShieldCheck, title: "Seu código, suas regras", desc: "Você aprova cada alteração" },
            { icon: Sparkles, title: "Funciona travado", desc: "Mesmo sem crédito lá" },
            { icon: Cpu, title: "Modelos potentes", desc: "Claude com contexto total" },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl bg-white text-[#080a14] p-5">
              <div className="h-9 w-9 rounded-xl bg-[#080a14] text-white flex items-center justify-center">
                <b.icon className="h-4 w-4" />
              </div>
              <div className="mt-3 text-sm font-extrabold">{b.title}</div>
              <div className="text-xs text-black/60">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-10 md:py-12">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6">
          <div className="text-center max-w-[720px] mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2D8BFF]/15 border border-[#2D8BFF]/30 px-3 py-1 text-xs font-bold tracking-widest text-[#7ab1ff]">PLANOS</div>
            <h2 className="display mt-3 text-[28px] md:text-[36px] font-bold leading-none">Escolha como prefere pagar</h2>
            <p className="mt-3 text-sm text-white/60">Pague uma vez em reais. Sem assinatura em dólar, sem surpresa na fatura.</p>
            <div className="mt-5 inline-flex rounded-full bg-white/10 p-1 border border-white/10">
              <button
                onClick={() => setBilling("tokens")}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${billing === "tokens" ? "bg-white text-[#080a14]" : "text-white/70"}`}
              >
                Pacotes de tokens
              </button>
              <button
                onClick={() => setBilling("unlimited")}
                className={`rounded-full px-6 py-2 text-sm font-bold transition ${billing === "unlimited" ? "bg-white text-[#080a14]" : "text-white/70"}`}
              >
                Ilimitado
              </button>
            </div>
          </div>

          {billing === "tokens" ? (
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              <div className="rounded-[20px] bg-white/[0.06] border border-white/10 p-6">
                <div className="text-xs font-bold tracking-widest text-white/60">STARTER</div>
                <div className="display mt-2 text-3xl font-bold">R$ 29,99</div>
                <div className="text-xs text-white/60">Pagamento único • Sem expiração</div>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5" /> Pacote de tokens para começar
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5" /> Use no seu ritmo, sem prazo
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5" /> Suporte por WhatsApp
                  </li>
                </ul>
                <a href="#" className="mt-6 flex w-full justify-center rounded-full bg-white text-[#080a14] py-3 text-sm font-extrabold hover:bg-white/90 transition">
                  Começar com Starter
                </a>
              </div>

              <div className="rounded-[20px] bg-[#2D8BFF] p-6 text-white relative overflow-hidden border border-white/10">
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/15 blur-xl" />
                <div className="inline-flex rounded-full bg-white text-[#2D8BFF] px-3 py-1 text-xs font-extrabold">MAIS VENDIDO</div>
                <div className="display mt-3 text-3xl font-bold">R$ 59,90</div>
                <div className="text-xs text-white/80">Pagamento único • Sem expiração</div>
                <ul className="mt-5 space-y-2.5 text-sm text-white/90">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" /> Tokens para vários projetos
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" /> Ideal para quem entrega toda semana
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" /> Prioridade no suporte
                  </li>
                </ul>
                <a href="#" className="mt-6 flex w-full justify-center rounded-full bg-white text-[#2D8BFF] py-3 text-sm font-extrabold hover:bg-white/90 transition">
                  Quero o mais vendido <ArrowRight className="h-4 w-4 ml-1" />
                </a>
                <div className="mt-3 text-center text-xs text-white/80">Ativação imediata após pagamento</div>
              </div>

              <div className="rounded-[20px] bg-white/[0.06] border border-white/10 p-6">
                <div className="text-xs font-bold tracking-widest text-white/60">PRO</div>
                <div className="display mt-2 text-3xl font-bold">R$ 99,90</div>
                <div className="text-xs text-white/60">Pagamento único • Sem expiração</div>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5" /> Volume maior com melhor custo
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5" /> Para quem tem 3+ projetos
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5" /> Onboarding 1:1
                  </li>
                </ul>
                <a href="#" className="mt-6 flex w-full justify-center rounded-full bg-white text-[#080a14] py-3 text-sm font-extrabold hover:bg-white/90 transition">
                  Escolher PRO
                </a>
              </div>
            </div>
          ) : (
            <div className="mt-8 grid md:grid-cols-2 gap-5 max-w-[760px] mx-auto">
              <div className="rounded-[20px] bg-white text-[#080a14] p-6">
                <div className="text-xs font-bold tracking-widest text-black/60">ILIMITADO MENSAL</div>
                <div className="display mt-2 text-3xl font-bold">R$ 109,99</div>
                <div className="text-xs text-black/60">Pagamento único • Uso ilimitado no período</div>
                <ul className="mt-5 space-y-2.5 text-sm">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-emerald-600 mt-0.5" /> Sem contar tokens
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-emerald-600 mt-0.5" /> Ideal para agências e volume alto
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 text-emerald-600 mt-0.5" /> Suporte prioritário
                  </li>
                </ul>
                <a href="#" className="mt-6 flex w-full justify-center rounded-full bg-[#080a14] text-white py-3 text-sm font-extrabold">
                  Quero ilimitado
                </a>
              </div>
              <div className="rounded-[20px] bg-[#2D8BFF] text-white p-6 border border-white/10">
                <div className="text-xs font-bold tracking-widest text-white/80">ILIMITADO ANUAL • MELHOR VALOR</div>
                <div className="display mt-2 text-3xl font-bold">R$ 299,90</div>
                <div className="text-xs text-white/80">Equivale a R$ 24,99/mês • Pagamento único</div>
                <ul className="mt-5 space-y-2.5 text-sm text-white/90">
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" /> Economia de 77% vs mensal
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" /> Uso ilimitado por 12 meses
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-4 w-4 mt-0.5" /> Acesso a novidades primeiro
                  </li>
                </ul>
                <a href="#" className="mt-6 flex w-full justify-center rounded-full bg-white text-[#2D8BFF] py-3 text-sm font-extrabold">
                  Garantir anual <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-white/60">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> Pagamento seguro
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5">
              <BadgeCheck className="h-4 w-4 text-emerald-400" /> Ativação imediata
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5">
              <Lock className="h-4 w-4" /> Sem mensalidade em dólar
            </span>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section id="garantia" className="py-6">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6">
          <div className="rounded-[20px] bg-white text-[#080a14] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="h-16 w-16 rounded-2xl bg-[#080a14] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <div className="display text-xl font-bold">Garantia incondicional de 7 dias</div>
              <p className="mt-1 text-sm text-black/60 leading-relaxed">Teste o Nexa Pro no seu projeto real. Se não destravar sua entrega, devolvemos cada centavo. Sem perguntas, sem burocracia.</p>
            </div>
            <a href="#planos" className="shrink-0 rounded-full bg-[#2D8BFF] text-white px-7 py-3 text-sm font-extrabold hover:bg-[#1a78ee] transition inline-flex items-center gap-2">
              Ativar Nexa Pro <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6">
          <div className="text-center">
            <h2 className="display text-[26px] md:text-[32px] font-bold">Perguntas frequentes</h2>
            <p className="mt-2 text-sm text-white/60">Tire suas dúvidas antes de ativar</p>
          </div>
          <div className="mt-8 max-w-[800px] mx-auto space-y-3">
            {[
              {
                q: "Preciso ter crédito no Lovable para usar?",
                a: "Não. O Nexa Pro não passa pelo chat do Lovable. Ele conecta o Claude Code direto ao código do seu repositório e aplica a alteração localmente. Funciona mesmo com o Lovable zerado ou limitado.",
              },
              {
                q: "Meu código continua seguro?",
                a: "Sim. Você conecta seu próprio repositório (GitHub) e revisa cada alteração no diff antes de dar push. Nada é publicado sem sua aprovação.",
              },
              {
                q: "Os tokens expiram?",
                a: "Não. Nos pacotes de tokens (a partir de R$ 29,99), o saldo não expira. Use no seu ritmo, sem prazo.",
              },
              {
                q: "Qual a diferença entre tokens e ilimitado?",
                a: "Tokens é pagamento único e você consome conforme usa, sem expiração. Ilimitado (a partir de R$ 109,99) libera uso sem contar tokens no período contratado — ideal para quem entrega todo dia ou tem vários projetos.",
              },
              {
                q: "E se eu não gostar?",
                a: "Você tem 7 dias de garantia incondicional. Se não destravar sua entrega, devolvemos 100% do valor.",
              },
            ].map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-white/[0.06] border border-white/10 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="text-sm font-semibold">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-sm leading-relaxed text-white/70">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-10">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6">
          <div className="rounded-[24px] bg-gradient-to-br from-[#2D8BFF] to-[#1a5fcc] p-6 md:p-10 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="display text-[28px] md:text-[34px] font-bold leading-none">Pare de depender do chat. Volte a entregar hoje.</h2>
                <p className="mt-3 text-sm text-white/80">Ative o Nexa Pro e faça sua próxima alteração direto no código em minutos.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#planos" className="inline-flex items-center gap-2 rounded-full bg-white text-[#2D8BFF] px-7 py-3.5 text-sm font-extrabold hover:bg-white/90 transition">
                    Ativar Nexa Pro agora <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-7 py-3.5 text-sm font-bold hover:bg-white/20 transition">
                    <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/80">
                  <Download className="h-4 w-4" /> Ativação imediata • Pagamento único em reais • 7 dias de garantia
                </div>
              </div>
              <div className="rounded-2xl bg-white text-[#080a14] p-5">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-black/60">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> O QUE DIZEM
                </div>
                <p className="mt-3 text-sm leading-relaxed">"Voltei a entregar no mesmo dia. O Claude fez o checkout completo sem eu gastar 1 crédito no Lovable. Valeu cada centavo."</p>
                <div className="mt-3 flex items-center gap-3">
                  <img src="https://i.pravatar.cc/100?img=15" alt="" className="h-8 w-8 rounded-full" />
                  <div>
                    <div className="text-sm font-bold leading-none">Marcos R.</div>
                    <div className="text-xs text-black/60">Lovable • 3 projetos ativos</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6 flex flex-col md:flex-row gap-6 justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-white text-[#080a14] flex items-center justify-center font-black text-sm">N</div>
              <div className="display font-bold">NEXA PRO</div>
            </div>
            <div className="mt-2 text-xs text-white/50 max-w-[420px] leading-relaxed">
              Nexa Pro conecta o Claude Code oficial ao seu projeto. Conteúdo original inspirado, sem reprodução do site de referência. Preços ilustrativos — ajuste antes de publicar.
            </div>
          </div>
          <div className="text-xs text-white/50 space-y-1">
            <div className="font-bold text-white">Links</div>
            <a href="#como-funciona" className="block hover:text-white">
              Como funciona
            </a>
            <a href="#planos" className="block hover:text-white">
              Planos
            </a>
            <a href="#faq" className="block hover:text-white">
              FAQ
            </a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-white">
              Termos e privacidade <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-[1160px] px-4 md:px-6 mt-6 text-center text-xs text-white/40">© {new Date().getFullYear()} Nexa Pro — Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}
