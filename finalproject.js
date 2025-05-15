//Guess the number game:  The computer will randomly choose a number between 1-100.  
//Prompt the user for a guess of what number the computer picked.  
//The computer will respond with a clue as to whether the user's guess is too high, too low, or correct.  
//Keep going until the user gets it right.  
//When the user gets it right, tell them their score.  
//Keep track of the users scores, and after each round, display their average number of guesses needed.  



let i = 0
let input = 0;
function numbers(max){
    i = Math.ceil(Math.random() * max)
   console.log(i)
}
function game(){
    input = prompt("pick a number 1-100")
    numbers(100);
while(i !== input){
    if(input > i){
        input = prompt("pfft! too large (it wont fit)")
    } else{ if(input < i){
        input = prompt("too small! try viagra")
    }}}
alert(`Good job!! The number was ${i}`)
}
game();