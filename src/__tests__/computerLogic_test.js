import ComputerLogic from '../components/ComputerLogic';

describe('ComputerLogic', () => {
    let usermark = 'X';
    let computerMark = 'O';

    it('test 1', () => {
        let squares = ['', 'X', '', 'X', 'O', '', '', '', ''];
        expect(ComputerLogic(squares, usermark, computerMark)).toEqual(['', 'X', 'O', 'X', 'O', '', '', '', '']);
    });

});
