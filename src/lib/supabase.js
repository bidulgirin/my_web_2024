// src/supabase.js

import { createClient } from '@supabase/supabase-js';

// Supabase 프로젝트에서 제공하는 URL과 anon 키를 사용합니다.
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; // Supabase 대시보드에서 복사한 URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // Supabase 대시보드에서 복사한 anon 키

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;