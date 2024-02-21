// FAQItem.js
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-heading accordion-color">
      <div className="accordion-toggle" onClick={toggleOpen}>
      <div className="question">{question}
      <span className="sign">{isOpen ? '−' : '+'}</span>
      </div>
      </div>
      {isOpen && <div className="accordion-inner accordion-body">{answer}</div>}
    </div>
  );
};

export default FAQItem;
