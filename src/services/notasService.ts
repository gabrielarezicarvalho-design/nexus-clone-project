import { supabase } from "@/integrations/supabase/client";
import type { CreateNotaInput, UpdateNotaInput } from "@/features/notas/types";

export const NOTAS_PAGE_SIZE = 20;

export async function listNotas(params: {
  userId: string;
  page: number;
  pageSize?: number;
}) {
  const pageSize = params.pageSize ?? NOTAS_PAGE_SIZE;
  const from = params.page * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabase
    .from("notas")
    .select("id, user_id, titulo, texto, created_at, updated_at", { count: "exact" })
    .eq("user_id", params.userId)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw error;
  return { data: data ?? [], count };
}

export async function createNota(params: { userId: string; input: CreateNotaInput }) {
  const { data, error } = await supabase
    .from("notas")
    .insert({
      user_id: params.userId,
      titulo: params.input.titulo.trim(),
      texto: params.input.texto.trim(),
    })
    .select("id, user_id, titulo, texto, created_at, updated_at")
    .single();

  if (error) throw error;
  return data;
}

export async function updateNota(params: { id: string; input: UpdateNotaInput }) {
  const payload: Record<string, string> = {};
  if (params.input.titulo !== undefined) payload.titulo = params.input.titulo.trim();
  if (params.input.texto !== undefined) payload.texto = params.input.texto.trim();

  const { data, error } = await supabase
    .from("notas")
    .update(payload)
    .eq("id", params.id)
    .select("id, user_id, titulo, texto, created_at, updated_at")
    .single();

  if (error) throw error;
  return data;
}

export async function deleteNota(id: string) {
  const { error } = await supabase.from("notas").delete().eq("id", id);
  if (error) throw error;
}
