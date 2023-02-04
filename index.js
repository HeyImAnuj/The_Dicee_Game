var randNumber1 = Math.random();
randNumber1 = Math.floor((randNumber1*6 + 1));

var randNumber2 = Math.random();
randNumber2 = Math.floor((randNumber2*6 + 1));

var imgName = 'dice'+randNumber1;
document.querySelector( ".dice1 img" ).setAttribute("src", "/images/"+imgName+".png")

var imgName2 = 'dice'+randNumber2;
document.querySelector( ".dice2 img" ).setAttribute("src", "/images/"+imgName2+".png")

if ( randNumber1 === randNumber2 ){
    console.log(imgName);
    document.querySelector("h1").innerHTML = "Game Tied";
}

if ( randNumber1 < randNumber2 ){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
}

if ( randNumber1 > randNumber2 ){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
}
console.log(randNumber1);
console.log(randNumber2);
