import ComputerLogic from '../components/ComputerLogic';

describe('ComputerLogic', () => {
    let usermark = 'X';
    let computerMark = 'O';

    it('plays the correct counter move test 1', () => {
        let squares = ['', 'X', '', 'X', 'O', '', '', '', ''];
        expect(ComputerLogic(squares, usermark, computerMark)).toEqual(['', 'X', 'O', 'X', 'O', '', '', '', '']);
    });
});
