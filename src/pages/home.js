import React from "react";

import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { OptFormContainer } from '../containers/opt-form';

export default function Home() {  
  return (
  <>
    <JumbotronContainer />
    <FaqsContainer />
    <OptFormContainer />
    <FooterContainer />
  </>);
}