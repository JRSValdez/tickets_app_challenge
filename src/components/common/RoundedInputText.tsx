import React from 'react'
import styled from 'styled-components';
import { BaseCSSField } from "../../utils/styles";
import {FieldContainer} from ".";

interface IRoundedInputTextProps{
    title:string
    name:string
    placeholder:string
    value:string
}

const MyInput = styled.input`
    ${BaseCSSField}
`;

const RoundedInputText = (props:IRoundedInputTextProps) => {
    const {title,name, value, placeholder} = props;
    return (
        <FieldContainer title={title}>
            <MyInput type='text' value={value} placeholder={placeholder} name={name} />
        </FieldContainer>
    )
}

export default RoundedInputText
