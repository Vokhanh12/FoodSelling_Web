
if (document.images)
{
 // Preload original Images
 var pic1_init= new Image();
 pic1_init.src="iconmenu/tea-icon-before.png";
 var pic1_new= new Image();
 pic1_new.src="iconmenu/tea-icon.png"; 

 var pic2_init= new Image();
 pic2_init.src="iconmenu/icon-seafood-before.png";
 var pic2_new= new Image();
 pic2_new.src="iconmenu/icon-seafood-after.png"; 

  var pic3_init= new Image();
 pic3_init.src="iconmenu/icon-pizza-before.png";
 var pic3_new= new Image();
 pic3_new.src="iconmenu/icon-pizza-after.png"; 

  var pic4_init= new Image();
 pic4_init.src="iconmenu/icon-drink-before.png";
 var pic4_new= new Image();
 pic4_new.src="iconmenu/icon-drink-after.png"; 

  var pic5_init= new Image();
 pic5_init.src="iconmenu/icon-cafe-before.png";
 var pic5_new= new Image();
 pic5_new.src="iconmenu/icon-cafe-after.png"; 

  var pic6_init= new Image();
 pic6_init.src="iconmenu/icon-food-before.png";
 var pic6_new= new Image();
 pic6_new.src="iconmenu/icon-food-after.png"; 

  var pic7_init= new Image();
 pic7_init.src="iconmenu/icon-add-before.png";
 var pic7_new= new Image();
 pic7_new.src="iconmenu/icon-add-after.png"; 
}

function change_it(the_name)
{
 if (document.images)
 {
  document.images[the_name].src= eval(the_name+"_new.src");
 }
}

function change_back(the_name)
{
 if (document.images)
 {
  document.images[the_name].src= eval(the_name+"_init.src");
 }
}

function show(the_name) 
{   
    if(the_name=="pic1"){
 document.getElementById('effect-pics1').innerHTML= '<div class="img-size"><ul><li><img src="iconmenu/image/tea-01.jpg" alt=""></li><li><img src="iconmenu/image/tea-02.jpg" alt=""></li><li><img src="iconmenu/image/tea-03.jpg" alt=""></li><li><img src="iconmenu/image/tea-04.jpg" alt=""></li></ul></div>';
 document.getElementById('effect-pics1').style.maxHeight = "250px";

 pic1_init.src="iconmenu/tea-icon.png";
 pic1_new.src="iconmenu/tea-icon-before.png";

document.images['pic2'].src="iconmenu/icon-seafood-before.png";
 pic2_init.src="iconmenu/icon-seafood-before.png";
 pic2_new.src="iconmenu/icon-seafood-after.png"; 

document.images['pic3'].src="iconmenu/icon-pizza-before.png";
 pic3_init.src="iconmenu/icon-pizza-before.png";
 pic3_new.src="iconmenu/icon-pizza-after.png"; 

document.images['pic4'].src="iconmenu/icon-drink-before.png";
 pic4_init.src="iconmenu/icon-drink-before.png";
 pic4_new.src="iconmenu/icon-drink-after.png"; 

document.images['pic5'].src="iconmenu/icon-cafe-before.png";
 pic5_init.src="iconmenu/icon-cafe-before.png";
 pic5_new.src="iconmenu/icon-cafe-after.png"; 

document.images['pic6'].src="iconmenu/icon-food-before.png";
 pic6_init.src="iconmenu/icon-food-before.png";
 pic6_new.src="iconmenu/icon-food-after.png"; 

document.images['pic7'].src="iconmenu/icon-add-before.png";
 pic7_init.src="iconmenu/icon-add-before.png";
 pic7_new.src="iconmenu/icon-add-after.png"; 

}
else if(the_name=="pic2")
{
 document.getElementById('effect-pics1').innerHTML= '<div class="img-size"><ul><li><img src="iconmenu/image/seafood-01.jpg" alt=""></li><li><img src="iconmenu/image/seafood-02.jpg" alt=""></li><li><img src="iconmenu/image/seafood-03.jpg" alt=""></li><li><img src="iconmenu/image/seafood-04.jpg" alt=""></li></ul></div>';
 document.getElementById('effect-pics1').style.maxHeight = "250px";
    
document.images['pic1'].src="iconmenu/tea-icon-before.png";
pic1_init.src="iconmenu/tea-icon-before.png";
pic1_new.src="iconmenu/tea-icon.png"; 

pic2_init.src="iconmenu/icon-seafood-after.png";
pic2_new.src="iconmenu/icon-seafood-before.png"; 

document.images['pic3'].src="iconmenu/icon-pizza-before.png";
 pic3_init.src="iconmenu/icon-pizza-before.png";
 pic3_new.src="iconmenu/icon-pizza-after.png"; 

document.images['pic4'].src="iconmenu/icon-drink-before.png";
 pic4_init.src="iconmenu/icon-drink-before.png";
 pic4_new.src="iconmenu/icon-drink-after.png"; 


document.images['pic5'].src="iconmenu/icon-cafe-before.png";
 pic5_init.src="iconmenu/icon-cafe-before.png";
 pic5_new.src="iconmenu/icon-cafe-after.png"; 

document.images['pic6'].src="iconmenu/icon-food-before.png";
 pic6_init.src="iconmenu/icon-food-before.png";
 pic6_new.src="iconmenu/icon-food-after.png"; 

document.images['pic7'].src="iconmenu/icon-add-before.png";
 pic7_init.src="iconmenu/icon-add-before.png";
 pic7_new.src="iconmenu/icon-add-after.png"; 
}
else if(the_name=="pic3")
{
 document.getElementById('effect-pics1').innerHTML= '<div class="img-size"><ul><li><img src="iconmenu/image/bread-01.jpg" alt=""></li><li><img src="iconmenu/image/bread-02.jpg" alt=""></li><li><img src="iconmenu/image/bread-03.jpg" alt=""></li><li><img src="iconmenu/image/bread-04.jpg" alt=""></li></ul></div>';
 document.getElementById('effect-pics1').style.maxHeight = "250px";

document.images['pic1'].src="iconmenu/tea-icon-before.png";
 pic1_init.src="iconmenu/tea-icon-before.png";
 pic1_new.src="iconmenu/tea-icon.png"; 

document.images['pic2'].src="iconmenu/icon-seafood-before.png";
 pic2_init.src="iconmenu/icon-seafood-before.png";
 pic2_new.src="iconmenu/icon-seafood-after.png"; 

 pic3_init.src="iconmenu/icon-pizza-after.png";
 pic3_new.src="iconmenu/icon-pizza-before.png"; 

document.images['pic4'].src="iconmenu/icon-drink-before.png";
 pic4_init.src="iconmenu/icon-drink-before.png";
 pic4_new.src="iconmenu/icon-drink-after.png"; 

document.images['pic5'].src="iconmenu/icon-cafe-before.png";
 pic5_init.src="iconmenu/icon-cafe-before.png";
 pic5_new.src="iconmenu/icon-cafe-after.png"; 

document.images['pic6'].src="iconmenu/icon-food-before.png";
 pic6_init.src="iconmenu/icon-food-before.png";
 pic6_new.src="iconmenu/icon-food-after.png"; 

document.images['pic7'].src="iconmenu/icon-add-before.png";
 pic7_init.src="iconmenu/icon-add-before.png";
 pic7_new.src="iconmenu/icon-add-after.png"; 
}
else if(the_name=="pic4")
{
 document.getElementById('effect-pics1').innerHTML= '<div class="img-size"><ul><li><img src="iconmenu/image/drink-01.jpg" alt=""></li><li><img src="iconmenu/image/drink-02.jpg" alt=""></li><li><img src="iconmenu/image/drink-03.jpg" alt=""></li><li><img src="iconmenu/image/drink-04.jpg" alt=""></li></ul></div>';
 document.getElementById('effect-pics1').style.maxHeight = "250px";

document.images['pic1'].src="iconmenu/tea-icon-before.png";
 pic1_init.src="iconmenu/tea-icon-before.png";
 pic1_new.src="iconmenu/tea-icon.png"; 

document.images['pic2'].src="iconmenu/icon-seafood-before.png";
 pic2_init.src="iconmenu/icon-seafood-before.png";
 pic2_new.src="iconmenu/icon-seafood-after.png"; 

document.images['pic3'].src="iconmenu/icon-pizza-before.png";
 pic3_init.src="iconmenu/icon-pizza-before.png";
 pic3_new.src="iconmenu/icon-pizza-after.png"; 


 pic4_init.src="iconmenu/icon-drink-after.png";
 pic4_new.src="iconmenu/icon-drink-before.png"; 

document.images['pic5'].src="iconmenu/icon-cafe-before.png";
 pic5_init.src="iconmenu/icon-cafe-before.png";
 pic5_new.src="iconmenu/icon-cafe-after.png"; 

document.images['pic6'].src="iconmenu/icon-food-before.png";
 pic6_init.src="iconmenu/icon-food-before.png";
 pic6_new.src="iconmenu/icon-food-after.png"; 

document.images['pic7'].src="iconmenu/icon-add-before.png";
 pic7_init.src="iconmenu/icon-add-before.png";
 pic7_new.src="iconmenu/icon-add-after.png"; 
}
else if(the_name=="pic5")
{
 document.getElementById('effect-pics1').innerHTML= '<div class="img-size"><ul><li><img src="iconmenu/image/coffe-01.jpg" alt=""></li><li><img src="iconmenu/image/coffe-02.jpg" alt=""></li><li><img src="iconmenu/image/coffe-03.jpg" alt=""></li><li><img src="iconmenu/image/coffe-04.jpg" alt=""></li></ul></div>';
 document.getElementById('effect-pics1').style.maxHeight = "250px";

document.images['pic1'].src="iconmenu/tea-icon-before.png";
 pic1_init.src="iconmenu/tea-icon-before.png";
 pic1_new.src="iconmenu/tea-icon.png"; 

document.images['pic2'].src="iconmenu/icon-seafood-before.png";
 pic2_init.src="iconmenu/icon-seafood-before.png";
 pic2_new.src="iconmenu/icon-seafood-after.png"; 

document.images['pic3'].src="iconmenu/icon-pizza-before.png";
 pic3_init.src="iconmenu/icon-pizza-before.png";
 pic3_new.src="iconmenu/icon-pizza-after.png"; 

document.images['pic4'].src="iconmenu/icon-drink-before.png";
 pic4_init.src="iconmenu/icon-drink-before.png";
 pic4_new.src="iconmenu/icon-drink-after.png"; 


 pic5_init.src="iconmenu/icon-cafe-after.png";
 pic5_new.src="iconmenu/icon-cafe-before.png"; 

document.images['pic6'].src="iconmenu/icon-food-before.png";
 pic6_init.src="iconmenu/icon-food-before.png";
 pic6_new.src="iconmenu/icon-food-after.png"; 

document.images['pic7'].src="iconmenu/icon-add-before.png";
 pic7_init.src="iconmenu/icon-add-before.png";
 pic7_new.src="iconmenu/icon-add-after.png"; 
}
else if(the_name=="pic6")
{
 document.getElementById('effect-pics1').innerHTML= '<div class="img-size"><ul><li><img src="iconmenu/image/food-01.jpg" alt=""></li><li><img src="iconmenu/image/food-02.jpg" alt=""></li><li><img src="iconmenu/image/food-03.jpg" alt=""></li><li><img src="iconmenu/image/food-04.jpg" alt=""></li></ul></div>';
 document.getElementById('effect-pics1').style.maxHeight = "250px";    

document.images['pic1'].src="iconmenu/tea-icon-before.png";
 pic1_init.src="iconmenu/tea-icon-before.png";
 pic1_new.src="iconmenu/tea-icon.png"; 

document.images['pic2'].src="iconmenu/icon-seafood-before.png";
 pic2_init.src="iconmenu/icon-seafood-before.png";
 pic2_new.src="iconmenu/icon-seafood-after.png"; 

document.images['pic3'].src="iconmenu/icon-pizza-before.png";
 pic3_init.src="iconmenu/icon-pizza-before.png";
 pic3_new.src="iconmenu/icon-pizza-after.png"; 

document.images['pic4'].src="iconmenu/icon-drink-before.png";
 pic4_init.src="iconmenu/icon-drink-before.png";
 pic4_new.src="iconmenu/icon-drink-after.png"; 

document.images['pic5'].src="iconmenu/icon-cafe-before.png";
 pic5_init.src="iconmenu/icon-cafe-before.png";
 pic5_new.src="iconmenu/icon-cafe-after.png"; 

 pic6_init.src="iconmenu/icon-food-after.png";
 pic6_new.src="iconmenu/icon-food-before.png"; 

document.images['pic7'].src="iconmenu/icon-add-before.png";
 pic7_init.src="iconmenu/icon-add-before.png";
 pic7_new.src="iconmenu/icon-add-after.png"; 
}
else if(the_name=="pic7")
{
 document.getElementById('effect-pics1').innerHTML= '<div class="img-size"><ul><li><img src="iconmenu/image/other-01.jpg" alt=""></li><li><img src="iconmenu/image/other-02.jpg" alt=""></li><li><img src="iconmenu/image/other-03.jpg" alt=""></li><li><img src="iconmenu/image/other-04.jpg" alt=""></li></ul></div>';
 document.getElementById('effect-pics1').style.maxHeight = "250px";

 document.images['pic1'].src="iconmenu/tea-icon-before.png";
 pic1_init.src="iconmenu/tea-icon-before.png";
 pic1_new.src="iconmenu/tea-icon.png"; 

document.images['pic2'].src="iconmenu/icon-seafood-before.png";
 pic2_init.src="iconmenu/icon-seafood-before.png";
 pic2_new.src="iconmenu/icon-seafood-after.png"; 

document.images['pic3'].src="iconmenu/icon-pizza-before.png";
 pic3_init.src="iconmenu/icon-pizza-before.png";
 pic3_new.src="iconmenu/icon-pizza-after.png"; 

document.images['pic4'].src="iconmenu/icon-drink-before.png";
 pic4_init.src="iconmenu/icon-drink-before.png";
 pic4_new.src="iconmenu/icon-drink-after.png"; 

document.images['pic5'].src="iconmenu/icon-cafe-before.png";
 pic5_init.src="iconmenu/icon-cafe-before.png";
 pic5_new.src="iconmenu/icon-cafe-after.png"; 

document.images['pic6'].src="iconmenu/icon-food-before.png";
 pic6_init.src="iconmenu/icon-food-before.png";
 pic6_new.src="iconmenu/icon-food-after.png"; 

 pic7_init.src="iconmenu/icon-add-after.png";
 pic7_new.src="iconmenu/icon-add-before.png"; 
    }
}

window.onload = function(){
  document.getElementById('button2').click();
}