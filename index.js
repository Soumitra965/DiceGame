
var randomNumber1 = Math.ceil(Math.random()*6);
var randomDice1Image = "dice"+randomNumber1+".png";
var randomImage1 = "images/"+randomDice1Image;


var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage1);


var randomNumber2 = Math.ceil(Math.random()*6);
var randomDice2Image = "dice"+randomNumber2+".png";
var randomImage2 = "images/"+randomDice2Image;


var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage2);


document.querySelector("h1").innerHTML;

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins";

}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins";
}else{
    document.querySelector("h1").innerHTML="Its a Draw";
}
