import React from 'react';

import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { Feature } from '../components';
import { OptFormContainer } from '../containers/opt-form';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV Programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptFormContainer />
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <OptFormContainer />
      <FooterContainer />
    </>
  );
}
