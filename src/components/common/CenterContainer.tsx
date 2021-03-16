import React from 'react'

interface ICenterContainerProps {
    children:JSX.Element|JSX.Element[];
    column?:boolean;
}

const CenterContainer = ({children, column=false}:ICenterContainerProps) => {
    return (
        <div className={`d-flex ${column ? 'flex-column' : ''} justify-content-center align-items-center`}>
            {children}
        </div>
    )
}

export default CenterContainer
