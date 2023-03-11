import React from 'react'

const Details = ({ data }) => {
    return (
        // Details of each row
        <>
        
            <div className='container p-4 bg-light border shadow-sm rounded'>
                <h4>Name: {data?.name}</h4>
                <h4>Age: {data?.Age}</h4>
                <h4>Country: {data?.country}</h4>
            </div>
        </>
    )
}

export default Details