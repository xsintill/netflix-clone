import React from "react";

import faqsData from "../fixtures/faqs.json";
import { Accordion } from "../components";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((faq) => (
        <Accordion.Item key={faq.id}>
          <Accordion.Header>{faq.header}</Accordion.Header>
          <Accordion.Body>{faq.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
