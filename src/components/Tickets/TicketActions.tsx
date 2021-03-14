import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaRegEye } from "react-icons/fa";

const ICON_SIZE = 25;

const IconsContainer = styled.div`
    & svg{
        cursor:pointer
    }
`;

const TicketActions = () => {
    return (
        <IconsContainer className='d-flex flex-row justify-content-around'>
            <FaEdit size={ICON_SIZE} title='Editar Ticket' />
            <FaRegEye size={ICON_SIZE} title='Ver Ticket' />
        </IconsContainer>
    )
}

export default TicketActions
