import React from 'react'

import SearchIcon from '../Assets/Icons/search.svg'

function Search() {
    return (
        <>
            <div className="search_box">
                <div className="search_box_inner">
                    <input type="text" placeholder='Search' className='search' />
                    <button type='button'>
                        <img src={SearchIcon} alt="search icon" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Search