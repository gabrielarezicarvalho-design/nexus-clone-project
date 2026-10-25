import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNotas, useCreateNota, useDeleteNota } from "@/hooks/useNotas";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Trash2, Plus, StickyNote, LogIn, ArrowLeft } from "lucide-react";
import { NOTAS_PAGE_SIZE } from "@/services/notasService";

export const Route = createFileRoute("/notas")({
  component: NotasPage,
});

function NotasPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [page, setPage] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setUserId(data.session?.user.id ?? null);
      setCheckingAuth(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user.id ?? null);
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const { data, isLoading, isError, error, isFetching } = useNotas(userId ?? undefined, page);
  const createMut = useCreateNota();
  const deleteMut = useDeleteNota(userId ?? undefined);

  const total = data?.count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / NOTAS_PAGE_SIZE));
  const notas = data?.data ?? [];

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      toast.error("Faça login para criar notas.");
      return;
    }
    if (!titulo.trim() || !texto.trim()) {
      toast.error("Preencha título e texto.");
      return;
    }
    try {
      await createMut.mutateAsync({ userId, input: { titulo, texto } });
      setTitulo("");
      setTexto("");
      setPage(0);
      toast.success("Nota criada!");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro ao criar nota";
      toast.error(msg);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMut.mutateAsync(id);
      toast.success("Nota removida.");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro ao remover";
      toast.error(msg);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#080a14] text-white flex items-center justify-center p-6">
        <Skeleton className="h-32 w-full max-w-xl" />
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="min-h-screen bg-[#080a14] text-white flex flex-col">
        <header className="border-b border-white/10 bg-[#080a14]/70 backdrop-blur">
          <div className="mx-auto max-w-[1160px] px-4 md:px-6 h-[64px] flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-[#2D8BFF] flex items-center justify-center font-black">N</div>
              <span className="font-bold">Nexa Api</span>
            </Link>
            <Link to="/" className="text-sm text-white/70 hover:text-white inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Voltar
            </Link>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md bg-white text-[#080a14]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogIn className="h-5 w-5" /> Acesso necessário
              </CardTitle>
              <CardDescription>Faça login para ver suas notas. Cada usuário vê apenas as próprias notas (RLS por user_id).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Configure o Supabase Auth no projeto e faça login. Após autenticado, esta página lista automaticamente apenas as notas onde <code className="bg-muted px-1 py-0.5 rounded">user_id = auth.uid()</code>.
              </p>
              <Button onClick={() => navigate({ to: "/" })} className="w-full">
                Voltar ao início
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080a14] text-white antialiased">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#080a14]/70 border-b border-white/10">
        <div className="mx-auto max-w-[1160px] px-4 md:px-6 h-[64px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#2D8BFF] flex items-center justify-center font-black">N</div>
            <div className="leading-none">
              <div className="font-bold tracking-tight">Nexa Api</div>
              <div className="text-[11px] tracking-[0.18em] text-white/60 font-semibold">NOTAS</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs text-white/60">Listando apenas suas notas</span>
            <Link to="/" className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium hover:bg-white/10">
              Início
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1160px] px-4 md:px-6 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
              <StickyNote className="h-6 w-6 text-[#2D8BFF]" /> Minhas notas
            </h1>
            <p className="mt-1 text-sm text-white/60">Multi-tenant por <code className="bg-white/10 px-1.5 py-0.5 rounded text-white">user_id</code> com RLS. Paginação de {NOTAS_PAGE_SIZE} por página, ordenadas por mais recentes.</p>
          </div>
          <div className="text-xs text-white/50">{isFetching ? "Atualizando..." : `${total} nota(s) no total`}</div>
        </div>

        <Card className="mt-6 bg-white text-[#080a14]">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2"><Plus className="h-4 w-4" /> Nova nota</CardTitle>
            <CardDescription>Título até 200 caracteres. Texto obrigatório.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="titulo">Título</Label>
                <Input id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} maxLength={200} placeholder="Ex: Ideia para checkout" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="texto">Texto</Label>
                <Textarea id="texto" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Descreva sua nota..." rows={3} required />
              </div>
              <Button type="submit" disabled={createMut.isPending} className="bg-[#2D8BFF] hover:bg-[#1a78ee] text-white">
                {createMut.isPending ? "Salvando..." : "Salvar nota"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8">
          {isLoading ? (
            <div className="grid gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-24 w-full bg-white/10" />
              ))}
            </div>
          ) : isError ? (
            <Card className="bg-red-50 border-red-200 text-red-900">
              <CardContent className="pt-6 text-sm">Erro ao carregar notas: {(error as Error)?.message ?? "desconhecido"}</CardContent>
            </Card>
          ) : notas.length === 0 ? (
            <Card className="bg-white/[0.06] border-white/10 text-white">
              <CardContent className="pt-6 text-center py-12">
                <StickyNote className="h-8 w-8 mx-auto text-white/40" />
                <p className="mt-3 text-sm font-semibold">Nenhuma nota ainda</p>
                <p className="text-xs text-white/60">Crie sua primeira nota no formulário acima. Ela ficará visível apenas para você.</p>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="grid gap-3">
                {notas.map((nota) => (
                  <Card key={nota.id} className="bg-white text-[#080a14] overflow-hidden">
                    <CardHeader className="pb-2 flex flex-row items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-[15px] leading-tight">{nota.titulo}</CardTitle>
                        <CardDescription className="text-xs">{new Date(nota.created_at).toLocaleString("pt-BR")}</CardDescription>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(nota.id)} disabled={deleteMut.isPending} className="shrink-0 text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{nota.texto}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <Button variant="outline" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))} className="bg-white text-[#080a14]">
                  Anterior
                </Button>
                <span className="text-xs text-white/60">
                  Página {page + 1} de {totalPages} • {total} total
                </span>
                <Button variant="outline" disabled={page + 1 >= totalPages} onClick={() => setPage((p) => p + 1)} className="bg-white text-[#080a14]">
                  Próxima
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
