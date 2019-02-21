import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DivContainer = styled.div`
    margin: auto;
    max-width: 455px; 
    font-size: 25px;
`;

const Div = styled.div`
    margin: auto;
    width: 300px;
`;

const P = styled.p`
    display: inline-block;
    margin-left: 25px;
`;

const Count = styled.p`
    display: inline-block;
    margin-left: 15px;
`;

const Score = ({ computerScore, userScore, tieCount }) => {
    Score.propTypes = {
        computerScore: PropTypes.number.isRequired,
        userScore: PropTypes.number.isRequired,
        tieCount: PropTypes.number.isRequired
    };

    return (
        <DivContainer className="Score">
            <Div>
                <P> User: </P>
                <Count className="userScore">{userScore}</Count>
                <P> Tie: </P>
                <Count className="tieCount">{tieCount}</Count>
                <P> Computer: </P>
                <Count className="computerScore">{computerScore}</Count>
            </Div>
        </DivContainer>
    );
};
export default Score;
