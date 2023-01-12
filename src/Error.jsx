import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/button';

const Error = () => {
  return (
    <Wrapper>
        <img src="./images/error.svg" alt="404" />
        <NavLink to='./'>
        <Button className='btn'>Go Back</Button>
        </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    padding:5rem 0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    img{
        max-width:35%;
    }
    .btn{
        margin-top:5rem;
    }
`;
export default Error
