const SUPABASE_URL = "https://gttedpjwqgiyszmrcnoe.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dGVkcGp3cWdpeXN6bXJjbm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNjk3MjIsImV4cCI6MjA5Njk0NTcyMn0.GzouEkyd6pRvT_IQuNR7LTyN6ewPiCTj2Xqu8l9yEcY";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const Auth = {
  login:(email,pw)=>client.auth.signInWithPassword({email,password:pw}),
  register:(email,pw)=>client.auth.signUp({email,password:pw}),
  logout:()=>client.auth.signOut(),
  session:()=>client.auth.getSession(),
  user:()=>client.auth.getUser()
};

const DB = {
  get:(t)=>client.from(t).select("*"),
  insert:(t,d)=>client.from(t).insert(d)
};
