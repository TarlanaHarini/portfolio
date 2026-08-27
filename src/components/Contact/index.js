import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 900px;
padding: 0px 20px 80px 20px;
gap: 12px;
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
color: ${({ theme }) => theme.text_primary};
@media (max-width: 768px) {
  margin-top: 12px;
  font-size: 32px;
}
`

const Desc = styled.div`
font-size: 18px;
text-align: center;
max-width: 650px;
color: ${({ theme }) => theme.text_secondary};
@media (max-width: 768px) {
  font-size: 16px;
}
`

const ContactCard = styled.div`
width: 100%;
max-width: 720px;
margin-top: 28px;
padding: 30px;
border-radius: 16px;
background: ${({ theme }) => theme.card};
border: 1px solid ${({ theme }) => theme.primary + '55'};
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
display: flex;
flex-direction: column;
gap: 14px;
text-align: center;
`

const ContactLink = styled.a`
color: ${({ theme }) => theme.text_primary};
text-decoration: none;
font-size: 18px;
word-break: break-word;
&:hover { color: ${({ theme }) => theme.primary}; }
`

const ButtonRow = styled.div`
display: flex;
justify-content: center;
gap: 14px;
flex-wrap: wrap;
margin-top: 8px;
`

const Button = styled.a`
padding: 12px 20px;
border-radius: 10px;
background: ${({ theme }) => theme.primary};
color: white;
font-weight: 600;
text-decoration: none;
transition: transform .2s ease;
&:hover { transform: translateY(-2px); }
`

const Contact = () => (
  <Container id="contact">
    <Wrapper>
      <Title>Contact Me</Title>
      <Desc>Feel free to reach out for opportunities, collaborations, or project discussions.</Desc>
      <ContactCard>
        <ContactLink href="mailto:tarlanaharini2003@gmail.com">tarlanaharini2003@gmail.com</ContactLink>
        <ContactLink href="tel:+917569471892">+91 7569471892</ContactLink>
        <ButtonRow>
          <Button href={`mailto:${'tarlanaharini2003@gmail.com'}`}>Email Me</Button>
          <Button href={Bio.linkedin} target="_blank" rel="noreferrer">LinkedIn</Button>
          <Button href={Bio.github} target="_blank" rel="noreferrer">GitHub</Button>
        </ButtonRow>
      </ContactCard>
    </Wrapper>
  </Container>
)

export default Contact
