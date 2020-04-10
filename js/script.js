var bt = document.querySelector("#bt");
var bt2 = document.querySelector(".close");
var md = document.querySelector(".modal");
bt.addEventListener('click' , function(event)
{
 md.classList.add("is-open");
})
bt2.addEventListener('click' , function(event)
{
 md.classList.remove("is-open");
})

new WOW().init();