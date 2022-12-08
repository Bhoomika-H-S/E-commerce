const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');


if(bar){

    $(bar).bind('click', function() {
       nav.classList.add('active');
      });
}
if(close){
    $(close).bind('click', function() {
        nav.classList.remove('active');
       });
}

$("#shopNowButton").click(function(){
    location.href = "shop.html";
 })


$("#ExploreButton").click(function(){
    location.href="#product2";
 })





    