import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://alivjzaxntprjobjgkje.supabase.co";
const supabaseKey = "sb_publishable_UM23IRD19KxJLS9nbEPTNA_GN7WFNw6";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);