import React from "react";
import styled from "styled-components";
import { BaseCSSField } from "../../utils/styles";
import { FieldContainer } from ".";

interface IRoundedInputTextProps {
  title: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: any;
  disabled?: boolean;
  type?:string
}

const MyInput = styled.input`
  ${BaseCSSField}
`;

const RoundedInputText = (props: IRoundedInputTextProps) => {
  const { title, name, value, placeholder, onChange, disabled = false, type='text' } = props;
  return (
    <FieldContainer title={title}>
      <MyInput
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
      />
    </FieldContainer>
  );
};

export default RoundedInputText;
