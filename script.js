const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');


if(bar){
    // bar.addEventListener('click',()=>{
    //     nav.classList.add('active');
    // })

    $(bar).bind('click', function() {
       // alert('User clicked on "foo."');
       nav.classList.add('active');
      });
}
if(close){
    // close.addEventListener('click',()=>{
    //     nav.classList.remove('active')
    // })

    $(close).bind('click', function() {
        // alert('User clicked on "foo."');
        nav.classList.remove('active');
       });
}


// document.getElementById("shopNowButton").onclick = function () {
//     location.href = "shop.html";
// };



$("#shopNowButton").click(function(){
    location.href = "shop.html";
 })


// document.getElementById("ExploreButton").onclick=function(){
//     location.href="#product2";
// }


$("#ExploreButton").click(function(){
    location.href="#product2";
 })


//document.getElementById("car").onclick=function(){ 
//}





    