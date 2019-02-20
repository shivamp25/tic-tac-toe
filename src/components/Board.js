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

    let [zero, one, two, three, four, five, six, seven, eight] = squares;
    // let [zero, one, two, three, four, five, six, seven, eight] = ['', 'O', '', '', 'X', '', '', ''];

    Board.propTypes = {
      squares : PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    };

    return (
        <Div className="Board container">
            <Row>
                <Button className="btn0">{zero}</Button>
                <Button className="btn1">{one}</Button>
                <Button className="btn2">{two}</Button>
            </Row>
            <Row>
                <Button className="btn3">{three}</Button>
                <Button className="btn4">{four}</Button>
                <Button className="btn5">{five}</Button>
            </Row>
            <Row>
                <Button className="btn6">{six}</Button>
                <Button className="btn7">{seven}</Button>
                <Button className="btn8">{eight}</Button>
            </Row>
        </Div>
    );
};

export default Board;
