import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Container, Title, SubTitle } from './styles/feature';

export default function Feature({ bg = true, children, ...restProps}) {
  return bg ? <Container {...restProps}>{children}</Container> : children;
}

Feature.Container = function FeatureContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}
Feature.Title = function FeatureTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Feature.SubTitle = function FeatureSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
