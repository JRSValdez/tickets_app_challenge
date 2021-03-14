import React from "react";
import styled from "styled-components";
import { BaseCSSField } from "../../utils/styles";
import {FieldContainer} from ".";

interface IRoundedTextArea {
  title: string;
  name: string;
  value: string;
  placeholder: string;
}

const MyTextArea = styled.textarea`
  ${BaseCSSField}
  min-height:150px;
  padding-top:5px;
`;

const RoundedTextArea = (props: IRoundedTextArea) => {
  const { title, name, value, placeholder } = props;
  return (
    <FieldContainer title={title} >
      <MyTextArea
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </FieldContainer>
  );
};

export default RoundedTextArea;
