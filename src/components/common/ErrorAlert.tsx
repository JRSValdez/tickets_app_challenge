import React from 'react';

import {Alert} from 'react-bootstrap';
import {CenterContainer} from '.';

interface IErrorAlertProps {
    message:string
}

const ErrorAlert = ({message}:IErrorAlertProps) => {
    return (
        <CenterContainer>
            <Alert variant='danger'>{message}</Alert>
        </CenterContainer>
    )
}

export default ErrorAlert
