//When the user gets it right, tell them their score.  
//Keep track of the users scores, and after each round, display their average number of guesses needed.  

console.log("Started");
let playing = "Y";
let round = 0;
let i = 0;
let input = 0;
let guesses = 0;
let temp = 0;
function numbers(max){
    i = Math.ceil(Math.random() * max) 
}
function game(){
    temp = 0;
    round = round + 1;
    input = prompt("pick a number 1-100")
    console.log(input, "input");
        numbers(100);
while(i !== input){ 
    if(input > i){
        temp = temp + 1;
        input = prompt("pfft! too large")
        guesses = guesses + 1;
        console.log(`Guess count: ${temp}`);

    console.log(input, "input")
    } else if (input < i){
        temp = temp + 1;
        input = prompt("too small!")
        guesses = guesses + 1;
        console.log(`Guess count: ${temp}`);
        console.log(input, "input");
        
    } else {
        console.log(`Good job!! The number was ${i}`)
        console.log("your average number of guesses is: ", guesses / round);
        console.log(`It took you ${temp} guesses`);
        playing = prompt("Do you want to play agan?  Y/N").toUpperCase();
        break;
    }
} alert(`The number was ${i}`)

}

console.log("Run Game Function"); 

while (playing == "Y"){
    game()
}