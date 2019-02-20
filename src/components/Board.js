import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    max-width: 350px;
    height: 350px;
    margin: auto;
    margin-top: 25px;
`;

const Row = styled.div`
    margin: 15px;
    width: 350px;
    padding-bottom: 5px;
`;

const Button = styled.button`font-size: 65px;
    font-family: Arial;
    vertical-align: top;
    margin: auto;
    margin-right: 10px;
    height: 100px;
    width: 100px;
    border: none;
    background-color: #8f5bad !important;
    border-radius: 5px;
    color: #fff;
`;
const Board = ({ squares }) => {

    // let [zero, one, two, three, four, five, six, seven, eight] = squares;

    let [zero, one, two, three, four, five, six, seven, eight] = ['', 'O', '', '', 'X', '', '', ''];

    Board.propTypes = {
      squares : PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    };

    return (
        <Div className="Board container">
            <Row>
                <Button>{zero}</Button>
                <Button>{one}</Button>
                <Button>{two}</Button>
            </Row>
            <Row>
                <Button>{three}</Button>
                <Button>{four}</Button>
                <Button>{five}</Button>
            </Row>
            <Row>
                <Button>{six}</Button>
                <Button>{seven}</Button>
                <Button>{eight}</Button>
            </Row>
        </Div>
    );
};

export default Board;
