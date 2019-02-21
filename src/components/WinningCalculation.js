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

    winningSequences.forEach((sequence) => {
        let found = computerMarkIndexes.filter((element) => sequence.includes(element));
        if (found.length === 2) {
            markIt = sequence.filter((element) => !!found.includes(element));
            if (squares[markIt] === '') {
                squares[markIt] = computerMark;
            }
        }
    });
    return squares;
};

export default WinningCalculation;
