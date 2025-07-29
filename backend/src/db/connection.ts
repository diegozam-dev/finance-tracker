import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '@/config';

const supabase = createClient(SUPABASE_URL as string, SUPABASE_KEY as string);

export default supabase;
