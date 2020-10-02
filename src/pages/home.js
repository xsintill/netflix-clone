import React from "react";

import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { OptFormContainer } from '../containers/opt-form';

export default function Home() {  
  return (
  <>
    <HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <OptFormContainer />
      <FooterContainer />
    </HeaderContainer>
  </>);
}