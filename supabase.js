import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://uxgybkxipkxjxpvsuzku.supabase.co";

const SUPABASE_KEY = "sb_publishable_4g0XSKy8W4slZxyvZG7nZg_HRsmSEl2";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
