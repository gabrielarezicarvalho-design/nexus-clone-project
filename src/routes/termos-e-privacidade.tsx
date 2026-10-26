import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  FileText,
  Lock,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/termos-e-privacidade")({
  component: TermosEPrivacidade,
});

function TermosEPrivacidade() {
  const [activeTab, setActiveTab] = useState<"termos" | "privacidade">("termos");

  return (
    <div className="min-h-screen bg-[#080a14] text-white antialiased selection:bg-[#2D8BFF] selection:text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap'); *{font-family:Inter,system-ui,sans-serif} .display{font-family:Space Grotesk,sans-serif}`}</style>

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#080a14]/80 border-b border-white/10">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6 h-[64px] flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-xl bg-[#2D8BFF] flex items-center justify-center font-black group-hover:scale-105 transition-transform">
              L
            </div>
            <div className="leading-none">
              <div className="display font-bold tracking-tight">lunax api</div>
              <div className="text-[11px] tracking-[0.18em] text-white/60 font-semibold">
                CLAUDE CODE EDITION
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.04]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar ao início</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-white/10 py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8BFF]/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-[1160px] px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold tracking-wider text-white/80">
            <ShieldCheck className="h-3.5 w-3.5 text-[#2D8BFF]" />
            CONTRATO E PRIVACIDADE DE DADOS
          </div>
          <h1 className="display mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Termos de Uso e Política de Privacidade
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/65 max-w-2xl mx-auto">
            Transparência total sobre as condições de serviço do lunax api, proteção
            dos seus dados e segurança do seu código-fonte.
          </p>
          <div className="mt-4 text-xs text-white/50">
            Última atualização: Março de 2026 • Em conformidade com a LGPD (Lei Geral de Proteção de Dados)
          </div>

          {/* TAB SELECTOR */}
          <div className="mt-8 inline-flex rounded-full bg-white/10 p-1 border border-white/10">
            <button
              onClick={() => setActiveTab("termos")}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition ${
                activeTab === "termos"
                  ? "bg-[#2D8BFF] text-white shadow-lg shadow-[#2D8BFF]/25"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <FileText className="h-4 w-4" />
              Termos de Uso
            </button>
            <button
              onClick={() => setActiveTab("privacidade")}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition ${
                activeTab === "privacidade"
                  ? "bg-[#2D8BFF] text-white shadow-lg shadow-[#2D8BFF]/25"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Lock className="h-4 w-4" />
              Política de Privacidade
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="mx-auto max-w-[900px] px-4 md:px-6 py-12">
        {activeTab === "termos" ? (
          <div className="space-y-10">
            {/* Secção 1 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#2D8BFF] mb-3">
                <span className="font-mono text-sm font-bold bg-[#2D8BFF]/10 px-2.5 py-1 rounded-md border border-[#2D8BFF]/30">
                  01
                </span>
                <h2 className="display text-xl md:text-2xl font-bold text-white">
                  Objeto e Aceitação dos Termos
                </h2>
              </div>
              <p className="text-sm md:text-[15px] leading-relaxed text-white/75 mt-3">
                Ao contratar, assinar ou utilizar o <strong>lunax api</strong> (Claude Code Edition),
                você concorda expressamente com todos os termos e diretrizes aqui estabelecidos. O
                lunax api disponibiliza conectividade e suporte para execução direta do Claude Code
                em repositórios e projetos (incluindo Lovable e Git), contornando limitações de filas
                e créditos de chats convencionais.
              </p>
            </div>

            {/* Secção 2 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#2D8BFF] mb-3">
                <span className="font-mono text-sm font-bold bg-[#2D8BFF]/10 px-2.5 py-1 rounded-md border border-[#2D8BFF]/30">
                  02
                </span>
                <h2 className="display text-xl md:text-2xl font-bold text-white">
                  Planos, Tokens e Modalidades de Pagamento
                </h2>
              </div>
              <div className="space-y-4 text-sm md:text-[15px] leading-relaxed text-white/75">
                <p>
                  Oferecemos opções de aquisição sem assinaturas ocultas em moeda estrangeira:
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-4">
                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                    <div className="font-bold text-white text-base">Pacotes de Tokens</div>
                    <p className="text-xs text-white/60 mt-1">
                      Pagamento único em reais (a partir de R$ 29,99). Os tokens adquiridos
                      <strong> não expiram</strong> e podem ser consumidos em seu próprio ritmo
                      para um ou múltiplos repositórios.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                    <div className="font-bold text-white text-base">Planos Ilimitados</div>
                    <p className="text-xs text-white/60 mt-1">
                      Acesso sem limite de tokens durante o período contratado (mensal a R$ 109,99
                      ou anual a R$ 299,90), ideal para times, desenvolvedores freelancers e agências.
                    </p>
                  </div>
                </div>
                <p>
                  Todos os preços são expressos em Reais (BRL), livres de variação cambial e taxas
                  de conversão de cartão internacional (IOF internacional não aplicável).
                </p>
              </div>
            </div>

            {/* Secção 3 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#2D8BFF] mb-3">
                <span className="font-mono text-sm font-bold bg-[#2D8BFF]/10 px-2.5 py-1 rounded-md border border-[#2D8BFF]/30">
                  03
                </span>
                <h2 className="display text-xl md:text-2xl font-bold text-white">
                  Garantia Incondicional de 7 Dias e Reembolso
                </h2>
              </div>
              <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-white/75">
                <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-emerald-200">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Direito de arrependimento integral:</span> Se por
                    qualquer motivo você sentir que o lunax api não destravou sua produtividade, solicite o
                    estorno dentro de até 7 (sete) dias corridos a partir da compra.
                  </div>
                </div>
                <p>
                  A devolução é integral (100% do valor pago), processada de forma simples e sem
                  burocracias via canal de suporte oficial.
                </p>
              </div>
            </div>

            {/* Secção 4 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#2D8BFF] mb-3">
                <span className="font-mono text-sm font-bold bg-[#2D8BFF]/10 px-2.5 py-1 rounded-md border border-[#2D8BFF]/30">
                  04
                </span>
                <h2 className="display text-xl md:text-2xl font-bold text-white">
                  Propriedade do Código e Segurança
                </h2>
              </div>
              <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-white/75">
                <p>
                  Todo o código-fonte, arquitetura, modelos e alterações realizadas em seu projeto
                  permanecem de propriedade <strong>única e exclusiva do usuário</strong>.
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-[#2D8BFF]" />
                    <span>Nenhuma alteração é publicada em produção sem a revisão e push manual do usuário.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-[#2D8BFF]" />
                    <span>O lunax api não reivindica direitos autorais ou royalties sobre códigos criados.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-[#2D8BFF]" />
                    <span>Seu repositório é operado localmente ou de forma isolada, respeitando suas permissões Git.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Secção 5 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#2D8BFF] mb-3">
                <span className="font-mono text-sm font-bold bg-[#2D8BFF]/10 px-2.5 py-1 rounded-md border border-[#2D8BFF]/30">
                  05
                </span>
                <h2 className="display text-xl md:text-2xl font-bold text-white">
                  Aviso sobre Marcas e Terceiros
                </h2>
              </div>
              <p className="text-sm md:text-[15px] leading-relaxed text-white/75">
                "Claude" e "Claude Code" são marcas de titularidade da Anthropic, PBC. "Lovable" e "GitHub"
                são marcas registradas de suas respectivas titulares. O <strong>lunax api</strong> é uma
                solução independente voltada para produtividade de desenvolvedores e não possui filiação,
                patrocínio ou endosso institucional direto por parte da Anthropic ou Lovable, salvo o
                consumo técnico regular das APIs e ferramentas oficiais suportadas.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Secção Privacidade 1 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#2D8BFF] mb-3">
                <span className="font-mono text-sm font-bold bg-[#2D8BFF]/10 px-2.5 py-1 rounded-md border border-[#2D8BFF]/30">
                  01
                </span>
                <h2 className="display text-xl md:text-2xl font-bold text-white">
                  Compromisso com a Privacidade (LGPD)
                </h2>
              </div>
              <p className="text-sm md:text-[15px] leading-relaxed text-white/75 mt-3">
                A segurança e confidencialidade dos seus dados são tratadas com máxima seriedade.
                Esta política reflete as práticas estabelecidas pela Lei Geral de Proteção de Dados
                (Lei nº 13.709/2018 - LGPD), garantindo transparência no tratamento de dados e controle
                ao titular.
              </p>
            </div>

            {/* Secção Privacidade 2 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#2D8BFF] mb-3">
                <span className="font-mono text-sm font-bold bg-[#2D8BFF]/10 px-2.5 py-1 rounded-md border border-[#2D8BFF]/30">
                  02
                </span>
                <h2 className="display text-xl md:text-2xl font-bold text-white">
                  Dados Coletados e Finalidade
                </h2>
              </div>
              <div className="space-y-3 text-sm md:text-[15px] leading-relaxed text-white/75">
                <p>Coletamos apenas as informações estritamente necessárias:</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2D8BFF] mt-1 shrink-0" />
                    <span><strong>Dados de Faturamento:</strong> Nome, e-mail e identificação de pagamento para emissão de recibo, ativação de chaves e controle de licença.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2D8BFF] mt-1 shrink-0" />
                    <span><strong>Comunicação e Suporte:</strong> Mensagens de suporte via WhatsApp ou e-mail trocadas para fins de atendimento e resolução de dúvidas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2D8BFF] mt-1 shrink-0" />
                    <span><strong>Dados de Telemetria Técnica:</strong> Métricas estritamente técnicas de tempo de resposta e integridade da sessão, sem identificação de conteúdo confidencial.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Secção Privacidade 3 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#2D8BFF] mb-3">
                <span className="font-mono text-sm font-bold bg-[#2D8BFF]/10 px-2.5 py-1 rounded-md border border-[#2D8BFF]/30">
                  03
                </span>
                <h2 className="display text-xl md:text-2xl font-bold text-white">
                  Não Retenção do seu Código-Fonte
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Lock className="h-4 w-4 text-emerald-400" />
                  Seus arquivos e regras de negócio não são compartilhados
                </div>
                <p className="text-sm text-white/75">
                  O lunax api não copia, vende, treina modelos de terceiros ou arquiva permanentemente
                  o código de projetos dos clientes. As operações de diff e geração ocorrem em seu
                  ambiente ou em túnel efêmero estritamente para entrega do resultado solicitado.
                </p>
              </div>
            </div>

            {/* Secção Privacidade 4 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#2D8BFF] mb-3">
                <span className="font-mono text-sm font-bold bg-[#2D8BFF]/10 px-2.5 py-1 rounded-md border border-[#2D8BFF]/30">
                  04
                </span>
                <h2 className="display text-xl md:text-2xl font-bold text-white">
                  Direitos do Titular de Dados
                </h2>
              </div>
              <p className="text-sm md:text-[15px] leading-relaxed text-white/75">
                Você pode a qualquer momento solicitar a confirmação da existência de tratamento, o
                acesso aos dados coletados, correção de dados incompletos ou a exclusão definitiva do
                seu registro em nossas bases de contato.
              </p>
            </div>

            {/* Secção Privacidade 5 */}
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3 text-[#2D8BFF] mb-3">
                <span className="font-mono text-sm font-bold bg-[#2D8BFF]/10 px-2.5 py-1 rounded-md border border-[#2D8BFF]/30">
                  05
                </span>
                <h2 className="display text-xl md:text-2xl font-bold text-white">
                  Canal de Contato e DPO
                </h2>
              </div>
              <p className="text-sm md:text-[15px] leading-relaxed text-white/75">
                Para exercer seus direitos ou esclarecer qualquer ponto desta política, contate
                diretamente a equipe de atendimento pelo suporte do lunax api ou via WhatsApp.
              </p>
            </div>
          </div>
        )}

        {/* CTA INFERIOR */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-white/[0.07] to-white/[0.03] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="display font-bold text-lg text-white">Pronto para destravar sua entrega?</div>
            <div className="text-xs md:text-sm text-white/60 mt-1">
              Escolha seu plano e comece a executar direto no repositório hoje mesmo.
            </div>
          </div>
          <Link
            to="/"
            className="rounded-full bg-[#2D8BFF] px-6 py-3 text-sm font-bold hover:bg-[#1a78ee] transition shrink-0 shadow-lg shadow-[#2D8BFF]/25"
          >
            Ver planos do lunax api
          </Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 bg-[#060810]">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6 flex flex-col md:flex-row gap-6 justify-between items-center text-xs text-white/50">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-[#2D8BFF] flex items-center justify-center font-bold text-white text-xs">
              L
            </div>
            <div>
              <span className="font-bold text-white">lunax api</span> — Termos e Privacidade
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-white transition">
              Início
            </Link>
            <Link to="/notas" className="hover:text-white transition">
              Notas
            </Link>
            <span className="text-white/30">|</span>
            <span>© {new Date().getFullYear()} lunax api. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
