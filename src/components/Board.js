import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    max-width: 350px;
    height: 350px;
    margin: auto;
`;

const Row = styled.div`
    width: 350px;
`;

const Button = styled.button`
    margin: auto;
    height: 100px;
    width: 100px;
    border: none;
    background-color: #8f5bad;
`;
const Board = ({ squares }) => {

    let [zero, one, two, three, four, five, six, seven, eight] = squares;

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
