var numbers = [1,2,3,4,5,6];
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var text = document.querySelector("h1");


function dice(){
    var firstNum= Math.floor(Math.random(numbers.length)*6);
    var secNum= Math.floor(Math.random(numbers.length)*6);
    console.log(numbers[firstNum]);
    console.log(numbers[secNum]);
    

    if(firstNum > secNum){
        console.log("Player One Wins!");
        text.innerHTML = "Player One Wins!";
    }
    else if(firstNum < secNum){
        console.log("Player Two Wins!");
        text.innerHTML = "Player Two Wins!";
    }
    else if(firstNum === secNum){
        console.log("Draw!");
        text.innerHTML = "Draw!";
    }

    var imageNum1 = firstNum+1;
    var imageNum2 = secNum+1;
    image1.setAttribute("src","./images/dice"+ imageNum1 +".png")
    image2.setAttribute("src","./images/dice"+ imageNum2 +".png")
}



window.onload(dice());