// Puu Chat – Supabase client (FINAL)

const SUPABASE_URL = "https://gttedpjwqgiyszmrcnoe.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dGVkcGp3cWdpeXN6bXJjbm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNjk3MjIsImV4cCI6MjA5Njk0NTcyMn0.GzouEkyd6pRvT_IQuNR7LTyN6ewPiCTj2Xqu8l9yEcY";

window.sb = null;

if (window.supabase) {
  window.sb = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
}

if (SUPABASE_URL.includes("YOUR-PROJECT")) {
  console.warn("Supabase belum dikonfigurasi");
}
