import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DivContainer = styled.div`
    margin: auto;
    font-size: 30px;
`;

const Score = ({ computerScore, userScore }) => {
    Score.propTypes = {
        computerScore: PropTypes.number.isRequired,
        userScore: PropTypes.number.isRequired
    };

    return (
        <DivContainer className="Score" />
    );
};
export default Score;
