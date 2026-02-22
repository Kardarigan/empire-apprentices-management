import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vzjmnsgtmwpozkpeqwqi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6am1uc2d0bXdwb3prcGVxd3FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2OTgxMzQsImV4cCI6MjA4NzI3NDEzNH0.DICl_x23pcgjlomrVGXqBRMMKrCwfYtXCH5Y5nWZr4c";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
