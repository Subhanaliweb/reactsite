import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
    <section className='contact-short'>
      <div className='grid grid-two-column'>
        <div>
          <h3>Ready to get started?</h3>
          <h3>Talk to us Today</h3>
        </div>
        <div className="contact-short-btn">
          <NavLink to ='/'>
            <Button>
              Get Started
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
    {/* Footer Section */}
    <footer>
      <div className='container grid grid-four-column '>

        {/* First Coloumn */}
        <div className='footer-about'>
          <h3>Subhan Production</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        {/* Second Coloumn */}
        <div className='footer-subscribe'>
          <h3>Subscribe to get important updates</h3>
          <form>
          <input type="email" placeholder='Email' autoComplete='off' required />
          <input type='submit' value='Subscribe' />  
          </form>    
        </div>
        {/* Third Coloumn */}
        <div className='footer-social'>
          <h3>Follow Us</h3>
          <div className='footer-social--icons'>
            <div>
              <a href='https://discord.com/' target='_blank'>
                <FaDiscord className='icons' />
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/' target='_blank'>
                <FaInstagram className='icons' />
              </a>
            </div>
            <div>
              <a href='https://www.youtube.com/' target='_blank'>
                <FaYoutube className='icons' />
              </a>
            </div>
          </div>
        </div>

        {/* Second Coloumn */}
        <div className='footer-contact'>
          <h3>Call Us</h3>
          <h3>+92 123456879</h3>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom--section">
        <hr />
        <div className='container grid grid-two-column'>
        <p>
          @{new Date().getFullYear()} SubhanProject. All Rights Reserved.
        </p>
        <div>
        <p>PRIVACY POLICY</p>
        <p>TERMS & CONDITION</p>
        </div>
        </div>
      </div>
    </footer>
    </Wrapper>
  )
}
 const Wrapper = styled.section`
html{
  font-size:50%:
}

 .contact-short{
  max-width:60vw;
  margin:auto;
  padding:5rem 10rem;
  background-color: ${({theme})=>theme.colors.bg};
  border-radius:1rem;
  box-shadow:${({theme})=>theme.colors.shadowSupport};
  transform:translateY(50%); 
 }
 .contact-short-btn{
  justify-self:end;
  align-self:center;
}

 footer{
  padding: 14rem 0 9rem 0;
  background-color:${({theme})=> theme.colors.footer_bg};
  
  h3{
    color:${({theme})=> theme.colors.hr};
    margin-bottom:2.4rem;
  }
  p{
    color:${({theme})=> theme.colors.white};
  }
  .footer-social--icons {
    display: flex;
    gap: 2rem;
    div {
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};
      .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }

  .footer-bottom--section{
    padding-top:9rem;

    hr{
      margin-bottom: 2rem;
      color: ${({theme})=> theme.colors.hr};
      height: 0.1px;
    }
  }
}

@media (max-width: ${({theme}) => theme.media.mobile}){
.contact-short{
  max-width: 95vw;
  padding: 2rem 0rem;
  display:flex;
  justify-content: center;
  justify-items: center;

  .contact-short-btn {
    text-align:center;
    justify-self:flex-start;
  }
}
footer .footer-bottom--section{
  padding-top:3.2rem;
}
}
 `;
export default Footer