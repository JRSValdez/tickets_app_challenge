import React from 'react'

interface ISectionTextProps {
    title:string
}

const SectionText = ({title}:ISectionTextProps) => {
    return (
        <div className='d-flex justify-content-start mx-4'>
            <h4>{title}</h4>
        </div>
    )
}

export default SectionText
