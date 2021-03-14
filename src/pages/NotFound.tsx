import React from 'react'
import { Alert } from 'react-bootstrap'
import { MainContainer } from '../components/common'

const NotFound = () => {
    return (
        <MainContainer>
            <Alert variant='danger'>
                Esta página no fue encontrada
            </Alert>
        </MainContainer>
    )
}

export default NotFound
