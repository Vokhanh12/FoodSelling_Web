var slideIndex = 1;
var number=0;
var number1=0;
var a=0;
var b=2;
window.onload=function(){
  document.getElementById("dot1").click();
  while(number!=100){
    if(b==1){
    a+=5000;
     setInterval(() => {
        document.getElementById("dot1").click();
    },a);
     b=2;
  }
    if(b==2){
    a+=5000;
     setInterval(() => {
        document.getElementById("dot2").click();
    },a);
     b=3;
  }
    if(b==3){
    a+=5000;
     setInterval(() => {
        document.getElementById("dot3").click();
    },a);
     b=1;
  }
  ++number;
}
};

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function changebackground(x)
{

  x.style.backgroundColor="#D5F3FE";
  x.style.backgroundSize="100%";

}
function returnbackground(x)
{
  x.style.backgroundColor="white";
  x.style.backgroundSize="100%";
}