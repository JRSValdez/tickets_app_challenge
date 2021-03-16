import React from 'react'

interface ICenterContainerProps {
    children:JSX.Element
}

const CenterContainer = ({children}:ICenterContainerProps) => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            {children}
        </div>
    )
}

export default CenterContainer
