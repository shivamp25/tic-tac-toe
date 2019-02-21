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
            userScore: 0,
            computerScore: 0,
            moveNumber: 1
    };
        this.assignMark = this.assignMark.bind(this);
        this.userMove = this.userMove.bind(this);
        this.computerMove = this.computerMove.bind(this);
        // this.tie = this.tie.bind(this);
        // this.restart = this.restart.bind(this);
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

    computerMove() {
        let computerMark = this.state.computerMark;
        let squares = this.state.squares.slice();
        let userMark = this.state.userMark;
        let moveNumber = this.state.moveNumber;


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
