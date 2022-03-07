import React from 'react'

function AddButton({ handleClick, children }) {
    return (
        <>
            <button className='btn_add_new' onClick={handleClick}>{children}</button>
        </>
    )
}

export default AddButton