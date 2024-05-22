import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lijacggajscibdapvhka.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpamFjZ2dhanNjaWJkYXB2aGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzOTEwNTIsImV4cCI6MjAzMTk2NzA1Mn0.AK6iCSKeaJTBTZjWC6c7CwnFcdoNV2sqD8tn6XqqK8M';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
