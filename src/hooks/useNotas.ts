import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listNotas, createNota, updateNota, deleteNota, NOTAS_PAGE_SIZE } from "@/services/notasService";
import type { CreateNotaInput, UpdateNotaInput } from "@/features/notas/types";

export function useNotas(userId: string | undefined, page: number, pageSize = NOTAS_PAGE_SIZE) {
  return useQuery({
    queryKey: ["notas", userId, page, pageSize],
    queryFn: () => {
      if (!userId) throw new Error("userId ausente");
      return listNotas({ userId, page, pageSize });
    },
    enabled: !!userId,
    staleTime: 30_000,
  });
}

export function useCreateNota() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (params: { userId: string; input: CreateNotaInput }) => createNota(params),
    onSuccess: (_data, vars) => {
      qc.invalidateQueries({ queryKey: ["notas", vars.userId] });
    },
  });
}

export function useUpdateNota(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (params: { id: string; input: UpdateNotaInput }) => updateNota(params),
    onSuccess: () => {
      if (userId) qc.invalidateQueries({ queryKey: ["notas", userId] });
    },
  });
}

export function useDeleteNota(userId: string | undefined) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteNota(id),
    onSuccess: () => {
      if (userId) qc.invalidateQueries({ queryKey: ["notas", userId] });
    },
  });
}
