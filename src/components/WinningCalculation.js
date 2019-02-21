const WinningCalculation = (squares, userMark, computerMark) => {
    const winningSequences = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8],
    ];
    let markIt;
    let computerMarkIndexes = [];

    squares.forEach((square, index) => {
        (square === userMark) ? computerMarkIndexes.push(index) : console.log(index);
    });


    for (let j = 0; j < winningSequences.length; j += 1) {
        let found = computerMarkIndexes.filter((eachIndex) => winningSequences[j].includes(eachIndex));
        if (found.length === 2) {
            markIt = winningSequences[j].filter((each) => !found.includes(each));
            if (squares[markIt] === '') {
                squares[markIt] = computerMark;
                break;
            }
        }
    }
    return squares;
};

export default WinningCalculation;
