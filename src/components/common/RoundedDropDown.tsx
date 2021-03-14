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
    onChange:any
    disabled?:boolean
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
    const {title,name, value, options, onChange,disabled=false} = props;
    return (
        <FieldContainer title={title}>
            <MyDropDown disabled={disabled} value={value} name={name} onChange={onChange}>
                {
                    options.map(({name,id})=> <option value={id}>{name}</option>)
                }
            </MyDropDown>
        </FieldContainer>
    )
}

export default RoundedDropDown
