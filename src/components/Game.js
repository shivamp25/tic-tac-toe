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


    };
        this.assignMark = this.assignMark.bind(this);
    }

    assignMark(userMark, computerMark) {
        this.setState({ userMark });
        this.setState({ computerMark });
        this.setState({ welcomeScreen: false });
    }

    render() {
        console.log(this.state);

        if (this.state.welcomeScreen) {
            return (
                <WelcomeScreen className="WelcomeScreen" select={this.assignMark}/>
            );
        }
        else return (
            <div className="Game">
                <Information text={this.state.information} />
                <Board isUserTurn={this.state.isUserTurn} squares={this.state.squares } />
                <Score computerScore={this.state.computerScore} userScore={this.state.userScore}/>
            </div>
        );
    }
}
