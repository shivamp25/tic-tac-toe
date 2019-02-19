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

const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 50px;
`;

const Button = styled.button`
  color: #8f5bad;
  font-family: Arial;
  font-size: 66px;
  display: inline-block;
  height: 120px;
  width: 120px;
  border-radius: 5px;
  border: 8px solid #fff;
  background-color: #fff;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #2049a5;
    border: 8px solid #2049a5;
  }
`;

const Options = styled.p`
  display: inline-block;
  margin-right: 30px;
  margin-left: 30px;
  font-size: 60px;
`;

const WelcomeScreen = ({ select }) => {
    WelcomeScreen.propTypes = {
        select: PropTypes.func,
    };

    const X = () => select('X', 'O');
    const O = () => select('O', 'X');

    return (
        <Div className="WelcomeScreen container">
            <P className="text-center">Tic Tac Toe</P>
            <ButtonContainer>
                <Button className="xButton" onClick={X}>X</Button>
                <Options>or</Options>
                <Button className="oButton" onClick={O}>O</Button>
            </ButtonContainer>
        </Div>
    );
};

export default WelcomeScreen;
