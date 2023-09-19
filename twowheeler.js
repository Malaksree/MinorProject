var wheels=document.querySelector("#twowheeler");
var option1=document.querySelector("#twowheeler-list");
 fas.addEventListener('click',function(){
     option1.classList.add('dL');
     option1.classList.remove('oL');
 });
 window.addEventListener('click',function(event){
     if(event.target !== menus && event.target.parentElement !== wheels){
         option1.classList.add('oL');
         option1.classList.remove('dL');
     }
 });