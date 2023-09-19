var fas=document.querySelector("#fashion");
var option=document.querySelector("#fashion-list");
 fas.addEventListener('click',function(){
     option.classList.add('dopen');
     option.classList.remove('open');
 });
 window.addEventListener('click',function(event){
     if(event.target !== menus && event.target.parentElement !== fas){
         option.classList.add('open');
         option.classList.remove('dopen');
     }
 });