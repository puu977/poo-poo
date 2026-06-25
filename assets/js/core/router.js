export function changeView(view){

document
.querySelectorAll('main section')
.forEach(el=>el.hidden=true);

document
.getElementById(`view-${view}`)
.hidden=false;

}