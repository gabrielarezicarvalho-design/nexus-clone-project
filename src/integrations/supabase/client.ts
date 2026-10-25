import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase env vars ausentes: defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY"
  );
}

export const supabase = createClient<Database>(
  supabaseUrl ?? "",
  supabaseAnonKey ?? "",
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);
