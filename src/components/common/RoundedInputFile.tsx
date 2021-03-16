import React from 'react'
import styled from 'styled-components';
import { BaseCSSField } from "../../utils/styles";

interface IRoundedInputFileProps{
    name:string
    value:string
}

const MyInput = styled.input`
    ${BaseCSSField}
`;

const RoundedInputFile = (props:IRoundedInputFileProps) => {
    const {name, value,} = props;
    return (
        <MyInput type='file' value={value} name={name} />
    )
}

export default RoundedInputFile
