import React from 'react';
import {
  HeaderWrapperElement,
  Img,
  HeaderWrapperElementTitle,
} from '../../../styles/styledComponents';

const HeaderElement = (props) => {
  return (
    <HeaderWrapperElement active={props.active}>
      <Img src={props.img} />
      <HeaderWrapperElementTitle>{props.name}</HeaderWrapperElementTitle>
    </HeaderWrapperElement>
  );
};

export default HeaderElement;
