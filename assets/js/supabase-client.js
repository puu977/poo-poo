// GANTI DENGAN PUNYA LU
const SUPA_URL = 'https://gttedpjwqgiyszmrcnoe.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dGVkcGp3cWdpeXN6bXJjbm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNjk3MjIsImV4cCI6MjA5Njk0NTcyMn0.GzouEkyd6pRvT_IQuNR7LTyN6ewPiCTj2Xqu8l9yEcY';
const supa = window.supabase.createClient(SUPA_URL, SUPA_KEY);
const USER_ID = localStorage.getItem('puu_id') || (()=>{const id='u_'+crypto.randomUUID().slice(0,8);localStorage.setItem('puu_id',id);return id})();
