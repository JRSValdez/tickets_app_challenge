import React from 'react'

interface ITitleTextProps {
    title:string
}

const TitleText = ({title}:ITitleTextProps) => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <h1>{title}</h1>
        </div>
    )
}

export default TitleText
