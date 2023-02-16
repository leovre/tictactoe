//this is grabbing the HTML with the class of current turn
//as good convention, i write my variables at the top of the file 
let player;

const currentPlayerHTML = document.querySelector('.turn');
const squareHTML = document.querySelectorAll(`.square`);
const winsX = document.querySelector('.xWins');
const winsO = document.querySelector('.oWins');
let totalWinsX = 0;
let totalWinsO = 0;
let count = 0;
//as good practice, comment out console.logs
// console.log(currentPlayerHTML);

if (Math.random() > 0.5) {
    player = "X";
} else { player = "O"; }
console.log(player);

// i put my functions in this spot
//write a function to change the DOM so i know whose turn it is 
function updateTermOnDOM() {
    currentPlayerHTML.innerHTML = `It is ${player}'s turn`;
    //return is only needed if at some point i need the VALUE of what this funciton does 
}
updateTermOnDOM();
function resetBoard() {
    count = 0;
    for (let i = 0; i < squareHTML.length; i++) {
        squareHTML[i].innerHTML = '';
        squareHTML[i].classList.remove('orange');
        squareHTML[i].classList.remove('purple');
    }
}

function checkWinner() {
    const winningCondition = [
        [squareHTML[0].innerHTML, squareHTML[1].innerHTML, squareHTML[2].innerHTML],
        [squareHTML[3].innerHTML, squareHTML[4].innerHTML, squareHTML[5].innerHTML],
        [squareHTML[6].innerHTML, squareHTML[7].innerHTML, squareHTML[8].innerHTML],
        [squareHTML[0].innerHTML, squareHTML[3].innerHTML, squareHTML[6].innerHTML],
        [squareHTML[1].innerHTML, squareHTML[4].innerHTML, squareHTML[7].innerHTML],
        [squareHTML[2].innerHTML, squareHTML[5].innerHTML, squareHTML[8].innerHTML],
        [squareHTML[0].innerHTML, squareHTML[4].innerHTML, squareHTML[8].innerHTML],
        [squareHTML[2].innerHTML, squareHTML[4].innerHTML, squareHTML[6].innerHTML]
    ]

    for (let i = 0; i < winningCondition.length; i++) {
        if (winningCondition[i][0] === "X" && winningCondition[i][1] === "X" && winningCondition[i][2] === "X") {
            //console.log("X is the winner")
            setTimeout(resetBoard, 300);
            totalWinsX++;
            winsX.innerHTML = totalWinsX;

        } else if (winningCondition[i][0] === "O" && winningCondition[i][1] === "O" && winningCondition[i][2] === "O") {
            // console.log("O is the winner")
            setTimeout(resetBoard, 300);
            totalWinsO++;
            winsO.innerHTML = totalWinsO;

        }
    }
}

for (let i = 0; i < squareHTML.length; i++) {
    squareHTML[i].addEventListener(`click`, () => {
        if (player === 'X' && !squareHTML[i].innerHTML) {
            squareHTML[i].innerHTML = player;
            player = `O`;
            squareHTML[i].style.backgroundColor;

            // updateTermOnDOM();

        } else if (player === 'O' && !squareHTML[i].innerHTML) {
            squareHTML[i].innerHTML = 'O';
            player = 'X';
            squareHTML[i].style.backgroundColor;
            // updateTermOnDOM();

        }
        updateTermOnDOM();
        checkWinner();
        //resetBoard();
        count++;
        if (count === 9) {
            setTimeout(resetBoard, 900);
        }
    },

    )
}




//i put my event listeners at the bott