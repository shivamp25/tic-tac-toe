import React, { Component } from 'react';
import WelcomeScreen from './WelcomeScreen';
import Information from './Information';
import Board from './Board';
import Score from './Score';

export default class Game extends Component {
    constructor() {
        super();
        this.state = {
          welcomeScreen: true
        };
    }

    render() {
        if (this.state.welcomeScreen) {
            return (
              <WelcomeScreen className="WelcomeScreen"/>
            );
        }
    }
}
