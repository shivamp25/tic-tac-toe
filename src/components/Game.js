import React, { Component } from 'react';
import WelcomeScreen from './WelcomeScreen';
import Information from './Information';
import Board from './Board';
import Score from './Score';

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
        this.setState({squares: currentSquares});
    }

    tie() {
        this.setState({information: 'Tie!!'});
        setTimeout(this.restart, 5000);
    }

    restart() {
        this.setState({ squares: ['', '', '', '', '', '', '', '', ''] });
        this.setState({ moveNumber: 1 });
    }

    whoStarts () {
        if (this.state.isUserStarts) {
            this.setState({isUserStarts: false});
            this.setState({isUserTurn: false});
            this.setState({information: 'Computer ...'});
            setTimeout(this.computerMove, 1000);
        } else {
            this.setState({isUserStarts: true});
            this.setState({isUserTurn: true});
            this.setState({information: 'Your Move!'});
        }
    }

    move() {
        this.setState({ moveNumber: this.state.moveNumber + 1 });
        if (this.state.isUserTurn) {
            this.setState({ information: 'Thinking...' });
            this.setState({ isUserTurn: false });
            setTimeout(this.computerMove, 500);
        } else {
            this.setState({ isUserTurn: true });
            this.setState({ information: 'Your Move!' });
        }
    }

    isWinner(squares) {

    }

    computerMove() {
        let computerMark = this.state.computerMark;
        let squares = this.state.squares.slice();
        let userMark = this.state.userMark;
        let moveNumber = this.state.moveNumber;


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
