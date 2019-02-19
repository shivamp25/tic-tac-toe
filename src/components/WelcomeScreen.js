import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Div = styled.div`
  color: #fff;
  font-family: Arial;
  background-color: #8f5bad;
  height: 360px;
  max-width: 450px;
  margin: auto;
  margin-top: 100px;
  border-radius: 10px;
`;

const P = styled.div`
  font-size: 80px;
  padding: 10px;
  padding-left: 18px;
`;

const WelcomeScreen = () => {
    return (
        <Div className="WelcomeScreen container">
            <P className="text-center">Tic Tac Toe</P>
        </Div>
    );
};

export default WelcomeScreen;
