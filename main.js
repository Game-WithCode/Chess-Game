let chessContainer = document.querySelector('.chessContainer')
let chessBox = document.querySelectorAll('.chessBox')
let n = 0;
let z = 0;
//add X,Y Coordinate to chessBox
for (let index = 1; index <= 8; index++) {
    for (let j = 1; j <= 8; j++) {
        let numberIndex = n + 1;
        if ((numberIndex % 2) == z) {
            chessBox[n].style.backgroundColor = '#f9e4bc'
        } else {
            chessBox[n].style.backgroundColor = '23a86a';
        }
        chessBox[n].id = `${index},${j}`;
        n++
    }
    if (z == 0) {
        z = 1
    } else {
        z = 0;
    }
}
// place the chess Piece on there place
chessBox.forEach((value, index) => {
    let x_Coordinate = parseInt(chessBox[index].id.split(',')[0]);
    let y_Coordinate = parseInt(chessBox[index].id.split(',')[1]);
    //place the black pawn
    if (x_Coordinate == 2) {
        let pawnImg = document.createElement('img');
        pawnImg.id = 'B_pawn';
        pawnImg.src = 'black_Images/Pawn.png';
        chessBox[index].appendChild(pawnImg);
    }
    //place the white pawn 
    if (x_Coordinate == 7) {
        let pawnImg = document.createElement('img');
        pawnImg.id = 'W_pawn';
        pawnImg.src = 'white_Images/Pawn.png';
        chessBox[index].appendChild(pawnImg);
    }
})
//Func to display the 1 and 8 column pieces
let pieceDisplay = (X, Y, pieceName, pColor) => {
    let pieceImg = document.createElement('img');
    if (pColor == 'white') {
        pieceImg.id = 'W_piece';
        pieceImg.src = `white_Images/${pieceName}.png`;
    } else {
        pieceImg.id = 'B_piece';
        pieceImg.src = `black_Images/${pieceName}.png`;
    }
    //select the chessBox by X,Y Coordinate
    let tempChessBox = document.getElementById(`${X},${Y}`);
    tempChessBox.appendChild(pieceImg)
}
// Create the rest Pieces 
let pieceArr = ['Rook', 'Knight', 'Bishop', 'King', 'Queen'];
let altrN = [1, 8];
altrN.forEach((value, index) => {
    pieceArr.forEach((val, ind) => {
        let x_Axis = altrN[index];
        let y_Axis = ind + 1;
        let pieceColor = '';
        if (altrN[index] == 1) {
            pieceColor = 'black';
        } else {
            pieceColor = 'white';
        }
        pieceDisplay(x_Axis, y_Axis, pieceArr[ind], pieceColor)
        if (ind <= 2) {
            let copyYAxis = 8 - ind;
            pieceDisplay(x_Axis, copyYAxis, pieceArr[ind], pieceColor)
        }
    })
})