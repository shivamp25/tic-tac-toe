import _ from 'lodash';

const ComputerLogic = (squares, userMark, computerMark) => {
    const markerPositions = [
        [1, 3],
        [1, 5],
        [3, 7],
        [5, 7],
        [0, 5],
        [0, 7],
        [1, 6],
        [1, 8],
        [2, 3],
        [2, 7],
        [3, 8],
        [5, 6]
    ];

    const counterMoves = [2, 0, 6, 8, 2, 6, 0, 2, 0, 8, 6, 8];
    let userMarkIndexes = [];

    squares.forEach((square, index) => {
        (square === userMark) ? userMarkIndexes.push(index) : console.log(index);
    });

    markerPositions.forEach((markerPosition, index) => {
        (_.isEqual(markerPosition, userMarkIndexes)) ? squares[counterMoves[index]] = computerMark : console.log(markerPosition);
    });
    return squares;
};

export default ComputerLogic;
