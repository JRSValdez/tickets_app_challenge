import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaRegEye } from "react-icons/fa";
import { StyledLink } from '../common';

const ICON_SIZE = 25;

const IconsContainer = styled.div`
    & svg{
        cursor:pointer
    }
`;

interface ITicketActionProps{
    ticketId:number
}

const TicketActions = ({ticketId}:ITicketActionProps) => {
    return (
        <IconsContainer className='d-flex flex-row justify-content-around'>
            <StyledLink to={`/ticket/${ticketId}`}>
                <FaEdit size={ICON_SIZE} title='Editar Ticket' />
            </StyledLink>
            <FaRegEye size={ICON_SIZE} title='Ver Ticket' />
        </IconsContainer>
    )
}

export default TicketActions
