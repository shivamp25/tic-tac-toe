import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DivContainer = styled.div`
    margin: auto;
    font-size: 30px;
`;

const Div = styled.div``;

const P = styled.p``;

const Count = styled.p``;

const Score = ({ computerScore, userScore }) => {
    Score.propTypes = {
        computerScore: PropTypes.number.isRequired,
        userScore: PropTypes.number.isRequired
    };

    return (
        <DivContainer className="Score">
            <Div>
                <P> User: </P>
                <Count className="userScore">{userScore}</Count>
                <P> Computer: </P>
                <Count className="computerScore">{computerScore}</Count>
            </Div>
        </DivContainer>
    );
};
export default Score;
