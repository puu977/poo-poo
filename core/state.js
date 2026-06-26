export const state = {
  user: {
    id: localStorage.puu_id || (localStorage.puu_id='u_'+Math.random().toString(36).slice(2,9)),
    username: 'Anonim',
    avatar: 'assets/img/avatar-blank.png' // default blank
  },
  posts: [],
  myLikes: new Set()
};
