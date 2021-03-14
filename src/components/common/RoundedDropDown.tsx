import React from 'react'
import styled from 'styled-components';
import { BaseCSSField } from "../../utils/styles";
import {FieldContainer} from ".";

interface IOptions {
    id:number
    name:string
}

interface IRoundedDropDown {
    title:string
    name:string
    value:number
    options:IOptions[]
}

const MyDropDown = styled.select`
    ${BaseCSSField}

    & option {
        border-radius:20px;
        padding: 0 10px;
        border: 2px solid ${ ({theme}) => theme.primary};
    }
`;

const RoundedDropDown = (props:IRoundedDropDown) => {
    const {title,name, value, options} = props;
    return (
        <FieldContainer title={title}>
            <MyDropDown value={value} name={name}>
                {
                    options.map(({name,id})=> <option value={id}>{name}</option>)
                }
            </MyDropDown>
        </FieldContainer>
    )
}

export default RoundedDropDown
