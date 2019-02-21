import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.p`
   text-align: center;
   font-size: 30px;
   margin-top: 75px;
`;

const Information = ({ text }) => {
    Information.propTypes = {
      text : PropTypes.string.isRequired
    };

    return (
        <P className='Information'>{text}</P>
    );
};

export default Information;
