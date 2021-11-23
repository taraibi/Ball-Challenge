
var ball = document.getElementById("pink");
var ball2 = document.getElementById("purple");
var ball3 = document.getElementById("blue");
var ball4 = document.getElementById("babyblue");
var ball5 = document.getElementById("green");

var positionX = 0;
var positionX2 = 50;
var positionX3 = 100;
var positionX4 = 150;
var positionX5 = 200;

var reverse =  false;
var reverse2 = false;
var reverse3 = false;
var reverse4 = false;
var reverse5=  false;

var positionY = 0;
var positionY2= 10;
var positionY3= 15;
var positionY4= 20;
var positionY5= 30;

var velocity = 20;



function moveBall() {

  var Xmin = 0;
  var Xmax = 600;
  var Ymin = 0;
  var Ymax = 600;

if (positionX ==Xmin|| positionY==Ymin){
reverse=false}
if (positionX==Xmax || positionY==Ymax){
reverse=!reverse}
if (reverse){
 positionX= positionX- velocity;
 ball.style.left = positionX + 'px';
 positionY= positionY- velocity;
 ball.style.top = positionY + 'px';


}
 else{
  positionX= positionX+ velocity;
  ball.style.left = positionX + 'px';
  positionY= positionY+ velocity;
  ball.style.top = positionY + 'px';
 }


 if (positionX2<= Xmin || positionY2 <=Ymin){
  reverse2=false}
  if (positionX2>=Xmax || positionY2>= Ymax){
  reverse2=!reverse2}
  if (reverse2){
   positionX2= positionX2- velocity;
   ball2.style.left = positionX2 + 'px';
   positionY2= positionY2- velocity;
   ball2.style.top = positionY2 + 'px';
  }
  else{
    positionX2= positionX2+ velocity;
    ball2.style.left = positionX2 + 'px';
    positionY2= positionY2+ velocity;
    ball2.style.top = positionY2 + 'px';
   }

   if (positionX3<=Xmin || positionY3<=Ymin){
    reverse3=false}
    if (positionX3>=Xmax || positionY3 >=Ymax){
    reverse3=!reverse3}
    if (reverse3){
     positionX3= positionX3- velocity;
     ball3.style.right = positionX3 + 'px';
     positionY3= positionY3- velocity;
     ball3.style.top = positionY3 + 'px';
    }
    else{
      positionX3= positionX3+ velocity;
      ball3.style.right = positionX3 + 'px';
      positionY3= positionY3+ velocity;
      ball3.style.top = positionY3 + 'px';
     }

     if (positionX4<=Xmin || positionY4 <=Ymin){
      reverse4=false}
      if (positionX4>=Xmax || positionY4>=Ymax){
      reverse4=!reverse4}
      if (reverse4){
       positionX4= positionX4- velocity;
       ball4.style.top = positionX4 + 'px';
       positionY4= positionY4- velocity;
       ball4.style.top = positionY4 + 'px';
      }
      else{
        positionX4= positionX4+ velocity;
        ball4.style.top = positionX4 + 'px';
        positionY4= positionY4+ velocity;
        ball4.style.top = positionY4 + 'px';
       }
       if (positionX5<=Xmin || positionY5 <= Ymin){
        reverse5=false}
        if (positionX5>=Xmax || positionY5 >=Ymax){
        reverse5=!reverse5}
        if (reverse5){
         positionX5= positionX5- velocity;
         ball5.style.top= positionX5 + 'px';
         positionY5= positionY5- velocity;
         ball5.style.top = positionY5 + 'px';
        }
        else{
          positionX5= positionX5+ velocity;
          ball5.style.left = positionX5 + 'px';
          positionY5= positionY5+ velocity;
          ball5.style.top = positionY5 + 'px';
         }

}
setInterval(moveBall, 100);

