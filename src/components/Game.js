import React, { Component } from 'react';
import WelcomeScreen from './WelcomeScreen';
import Information from './Information';
import Board from './Board';
import Score from './Score';
import WinningCalculation from './WinningCalculation';
import ComputerLogic from './ComputerLogic';

export default class Game extends Component {
    constructor() {
        super();
        this.state = {
            welcomeScreen: true,
            userMark: '',
            computerMark: '',
            information: 'Your Move!',
            squares: ['', '', '', '', '', '', '', '', ''],
            isUserTurn: true,
            isUserStarts: true,
            userScore: 0,
            computerScore: 0,
            moveNumber: 1
    };
        this.assignMark = this.assignMark.bind(this);
        this.userMove = this.userMove.bind(this);
        this.computerMove = this.computerMove.bind(this);
        this.tie = this.tie.bind(this);
        this.restart = this.restart.bind(this);
        this.whoStarts = this.whoStarts.bind(this);
        this.move = this.move.bind(this);
        this.isWinner = this.isWinner.bind(this);
        this.displayMessage = this.displayMessage.bind(this);
    }

    assignMark(userMark, computerMark) {
        this.setState({ userMark });
        this.setState({ computerMark });
        this.setState({ welcomeScreen: false });
    }

    userMove(index) {
        let userMark = this.state.userMark;
        let currentSquares = this.state.squares.slice();
        currentSquares[index] = userMark;
        this.setState({ squares: currentSquares });
        this.isWinner(currentSquares);
    }

    isWinner(squares) {
        let finished = false;
        const winningSequences = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8],
        ];

        winningSequences.forEach((sequence) => {
            let [firstElement, secondElement, thirdElement] = sequence;
            if (squares[firstElement] + squares[secondElement] + squares[thirdElement] === 'XXX') {
                finished = true;
                this.displayMessage('X');
            }else if (squares[firstElement] + squares[secondElement] + squares[thirdElement] === 'OOO') {
                finished = true;
                this.displayMessage('0');
            }
        });
        if (squares.join('').length === 9) {
            finished = true;
            this.tie();
        }
        if(!finished) this.move();
    }

    move() {
        this.setState({ moveNumber: this.state.moveNumber + 1 });
        if (this.state.isUserTurn) {
            this.setState({ information: 'Thinking...' });
            this.setState({ isUserTurn: false });
            setTimeout(this.computerMove, 1000);
        } else {
            this.setState({ isUserTurn: true });
            this.setState({ information: 'Your Move!' });
        }
    }

    tie() {
        this.setState({information: 'Tie!!'});
        setTimeout(this.restart, 2000);
    }

    whoStarts () {
        if (this.state.isUserStarts) {
            this.setState({ isUserStarts: false });
            this.setState({ isUserTurn: false });
            this.setState({ information: 'Thinking...' });
            setTimeout(this.computerMove, 1000);
        } else {
            this.setState({ isUserStarts: true });
            this.setState({ isUserTurn: true });
            this.setState({ information: 'Your Move!' });
        }
    }

    displayMessage(mark) {
        if(mark === this.state.userMark) {
            this.setState({information: 'You Won...!'});
            this.setState({userScore: this.state.userScore + 1});
        }else {
            this.setState({information: 'You Lost...!'});
            this.setState({computerScore: this.state.computerScore + 1});
        }
        setTimeout(this.restart, 2000);
    }

    restart() {
        this.setState({ squares: ['', '', '', '', '', '', '', '', ''] });
        this.setState({ moveNumber: 1 });
        this.whoStarts();
    }

    computerMove() {
        let computerMark = this.state.computerMark;
        let squares = this.state.squares.slice();
        let userMark = this.state.userMark;
        let moveNumber = this.state.moveNumber;

        if (moveNumber === 1) squares[0] = computerMark;

        if (moveNumber === 2) {
            if (squares[4] === '') squares[4] = computerMark;
            else squares[2] = computerMark;
        }

        if (moveNumber === 3) {
            if (squares[4] === '') squares[4] = computerMark;
            else squares[8] = computerMark;
        }

        if (moveNumber === 4) {
            squares = WinningCalculation(squares, userMark, computerMark);

            if (squares.join('').length === 3) {
                squares = ComputerLogic(squares, userMark, computerMark);
            }
            if (squares.join('').length === 3) {
                if (squares[1] !== userMark) {
                    squares[1] = computerMark;
                } else squares[3] = computerMark;
            }
        }
        if (moveNumber > 4) {
            squares = WinningCalculation(squares, computerMark, computerMark);

            if (squares.join('').length === moveNumber - 1) {
                squares = WinningCalculation(squares, userMark, computerMark);
            }
            if (squares.join('').length === moveNumber - 1) {
                let i = 0;
                while (squares[i] !== '') i += 1;
                squares[i] = computerMark;
            }
        }
        this.setState({ squares });
        this.isWinner(squares);
    }

    render() {
        if (this.state.welcomeScreen) {
            return (
                <WelcomeScreen className="WelcomeScreen" select={this.assignMark} />
            );
        }
        else return (
            <div className="Game">
                <Information text={this.state.information} />
                <Board isUserTurn={this.state.isUserTurn} squares={this.state.squares} move={this.userMove} />
                <Score computerScore={this.state.computerScore} userScore={this.state.userScore} />
            </div>
        );
    }
}
