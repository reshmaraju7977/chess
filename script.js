function renderSquares(){
    let numOfSquares = 0;
    const chessBoard = document.querySelector(".chessBoard")
    const chessSquareArray = []
    while (numOfSquares < 64){
        chessSquare = document.createElement("div")
        chessSquare.classList.add("chessSquare")
        chessSquareArray.push(chessSquare)
        numOfSquares += 1;
    }
    chessSquareArray.forEach((element, i) => {
        determineSquareColor(element, i)
        // determines square color in separate function
    })
    return chessSquareArray.forEach((element) => {
        return chessBoard.append(element)
    })
}

renderSquares()
function determineSquareColor(element, i){
    if ((i >= 0 && i <= 7) || (i >= 16 && i <= 23) || (i >= 32 && i <= 39) || (i >= 48 && i <= 55)){
        return i % 2 === 0 ? element.style.backgroundColor = "#FFF" : element.style.backgroundColor = "#000";
    }
    if ((i >= 8 && i <= 15) || (i >= 24 && i <= 31) || (i >= 40 && i <= 47) || (i >= 56 && i <= 63)){
        return i % 2 !== 0 ? element.style.backgroundColor = "#FFF" : element.style.backgroundColor = "#000";
    }
}