import React, { useState } from 'react';

import ITEMS from '../../constants/accordionItems';
import AccordionItem from '../../components/AccordionItem';

import { Container, Header, Accordion } from './styled';

const OtherEvents = () => {
  const [activeItem, setActiveItem] = useState(0);

  const toggleItem = (index) => {
    if (activeItem === index) {
      return setActiveItem(-1);
    }
    setActiveItem(index)
  };

  return (
    <Container id='otherInfo'>
      <Header>All Events</Header>
      <Accordion>
        {ITEMS.map((item, index) => (
          <AccordionItem
            key={item.id}
            index={index}
            number={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
            activeItem={activeItem}
            toggleItem={toggleItem}
          />
        ))}
      </Accordion>
    </Container>)
};

export default OtherEvents;