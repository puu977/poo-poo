import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = "https://gttedpjwqgiyszmrcnoe.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dGVkcGp3cWdpeXN6bXJjbm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNjk3MjIsImV4cCI6MjA5Njk0NTcyMn0.GzouEkyd6pRvT_IQuNR7LTyN6ewPiCTj2Xqu8l9yEcY"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
