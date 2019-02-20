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
const Board = ({ squares, isUserTurn }) => {

    // let [zero, one, two, three, four, five, six, seven, eight] = squares;
    let [zero, one, two, three, four, five, six, seven, eight] = ['', 'O', '', '', 'X', '', '', ''];

    Board.propTypes = {
        squares: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        isUserTurn: PropTypes.bool
    };

    const selectSquare = (index) => console.log(index);

    return (
        <Div className="Board container">
            <Row>
                <Button className="btn0"
                        onClick={() => selectSquare(0)}
                        disabled={!isUserTurn || zero !== ''}
                >{zero}</Button>
                <Button className="btn1"
                        onClick={() => selectSquare(1)}
                        disabled={!isUserTurn || one !== ''}
                >{one}</Button>
                <Button className="btn2"
                        onClick={() => selectSquare(2)}
                        disabled={!isUserTurn || two !== ''}
                >{two}</Button>
            </Row>
            <Row>
                <Button className="btn3"
                        onClick={() => selectSquare(3)}
                        disabled={!isUserTurn || three !== ''}
                >{three}</Button>
                <Button className="btn4"
                        onClick={() => selectSquare(4)}
                        disabled={!isUserTurn || four !== ''}
                >{four}</Button>
                <Button className="btn5"
                        onClick={() => selectSquare(5)}
                        disabled={!isUserTurn || five !== ''}
                >{five}</Button>
            </Row>
            <Row>
                <Button className="btn6"
                        onClick={() => selectSquare(6)}
                        disabled={!isUserTurn || six !== ''}
                >{six}</Button>
                <Button className="btn7"
                        onClick={() => selectSquare(7)}
                        disabled={!isUserTurn || seven !== ''}
                >{seven}</Button>
                <Button className="btn8"
                        onClick={() => selectSquare(8)}
                        disabled={!isUserTurn || eight !== ''}
                >{eight}</Button>
            </Row>
        </Div>
    );
};

export default Board;
