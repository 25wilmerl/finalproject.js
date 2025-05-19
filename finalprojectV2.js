//Guess the number game:  The computer will randomly choose a number between 1-100.  
//Prompt the user for a guess of what number the computer picked.  
//The computer will respond with a clue as to whether the user's guess is too high, too low, or correct.  
//Keep going until the user gets it right.  
//When the user gets it right, tell them their score.  
//Keep track of the users scores, and after each round, display their average number of guesses needed.  

console.log("Started");
let playing = "Y";
let round = 0;
let sima = 0;
let i = 0;
let input = 0;
let avg = sima / round;
function numbers(max){
    i = Math.ceil(Math.random() * max)
   console.log(i) 
}
function game(){
    input = prompt("pick a number 1-100")
    console.log(input, "input");
        numbers(100);
    console.log(i, "i");
    sima = 0;
    round = round + 1;
while(i !== input){ 
    if(input > i){
        input = prompt("pfft! too large")
        sima = sima + 1;
    console.log(input, "input");
    console.log(i, "i");
    } else{ if(input < i){
        input = prompt("too small!")
        sima = sima + 1;
        console.log(input, "input");
        console.log(i, "i");
    }}}
console.log(`Good job!! The number was ${i}`)

playing = prompt("Do you want to play agan?  Y/N").toUpperCase();

}

console.log("Run Game Function"); 

while (playing == "Y"){
    game()
}
