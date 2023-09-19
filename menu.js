var menus=document.querySelector("#menu");
var optionpar=document.querySelector("#options");
menus.addEventListener('click',function(){
    optionpar.classList.add('dB');
    optionpar.classList.remove('dN');
});
window.addEventListener('click',function(event){
    if(event.target !== menus && event.target.parentElement !== menus){
        optionpar.classList.add('dN');
        optionpar.classList.remove('dB');
    }
});

