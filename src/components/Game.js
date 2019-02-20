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
            computerMark: ''
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

            </div>
        );
    }
}
