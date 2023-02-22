import React from 'react'

import { StyledAccordionItem, Container, Title, Number, AccordionDetails, AccordionDetailsContainer, StyledTitle, Date, Button, StyledButtonText, NumberDetails } from './styled'

const AccordionItem = ({ number, image, title, date, activeItem, toggleItem, index }) => {
  return (
    <StyledAccordionItem
      onClick={() => toggleItem(index)}
      style={{ backgroundImage: `url(${image})`, }}
    >
      <Container>
        <Title>
          {title}
        </Title>
        <Number>
          {number}
        </Number>
      </Container>
      <AccordionDetailsContainer
        className='accordion-details'
        style={{
          display: activeItem === index ? '' : 'none',
          backgroundImage: `url(${image})`,
        }}>
        <AccordionDetails>
          <NumberDetails>{number}</NumberDetails>
          <StyledTitle>{title}</StyledTitle>
          <Date>{date}</Date>
          <Button>
            <StyledButtonText
              href='https://www.google.com'
              target='_blank'
              rel="noreferrer">
              More information
            </StyledButtonText>
          </Button>
        </AccordionDetails>
      </AccordionDetailsContainer>
    </StyledAccordionItem >
  )
};

export default AccordionItem;