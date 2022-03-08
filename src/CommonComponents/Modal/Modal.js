import React from 'react'

import './modal_content.css';

function Modal({show, setShow, children, onSubmit,title}) {
    return (
        <>

            {/* <div className="button" onClick={() => setShow(!show)}>Modal show</div> */}
            <div className={!show ? "background hide" : "background"} onClick={() => setShow(!show)}></div>
            <section className={!show ? "modal_section hide" : "modal_section"}>
                <div className="modal_container">
                    <div className="modal_header">
                        <h2 className='modal_title'>{title}</h2>
                        <span className='modal_close' onClick={() => setShow(!show)}>x</span>
                    </div>
                    <div className="modal_content">
                        <form className='form_wrapper' onSubmit={onSubmit}>{children}</form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modal