import React, { useState } from 'react'

function NavItem(props) {

    const [show, setShow] = useState('');

    const handleClick = () => {
        setShow(show ? '' : 'show');
    }

    return (
        <>
            <li className="nav_item">
                <button type="button" onClick={() => handleClick()} className='category'>{props.categoryName}</button>
                <ul className={`sub_navbar collapse ${show}`}>{props.children}</ul>

            </li>
        </>
    )
}

export default NavItem