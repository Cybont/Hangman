import { SectretWord, Canvas } from "./hangman";

// objects
let secretWord : SectretWord = new SectretWord();
let canvas : Canvas = new Canvas();

// html elements
let wordOutput = document.getElementById("content").children[1] as HTMLParagraphElement;
let letterInput = document.getElementById("content").children[2] as HTMLInputElement;
let button = document.getElementById("content").children[3] as HTMLButtonElement;

// status vars
let mistakes : number = 0;

// InIt
secretWord.GetWord();

// Button click
button.addEventListener("click", MouseEvent => {
    wordOutput.innerHTML = secretWord.RevealLetter(letterInput.value);
    if(secretWord.Contains(letterInput.value) == false) {
        mistakes++;
        draw(mistakes);
    }
})


function draw(mistakes : number) {
    switch (mistakes) {
        case 1:
            canvas.DrawHead();
            break;
        case 2:
            canvas.DrawBody();
            break;
        case 3:
            canvas.DrawArm("right");
            break;
        case 4:
            canvas.DrawArm("left");
            break;
        default:
            gameOver();
            break;
    }
}

function gameOver () {
    alert("Game is over you suck!");
    location.reload();
}


