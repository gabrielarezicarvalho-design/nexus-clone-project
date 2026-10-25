export interface Nota {
  id: string;
  user_id: string;
  titulo: string;
  texto: string;
  created_at: string;
  updated_at: string;
}

export interface CreateNotaInput {
  titulo: string;
  texto: string;
}

export interface UpdateNotaInput {
  titulo?: string;
  texto?: string;
}

export interface PaginatedNotas {
  data: Nota[];
  count: number | null;
}
