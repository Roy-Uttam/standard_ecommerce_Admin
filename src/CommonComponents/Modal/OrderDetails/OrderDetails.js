import React from 'react';
import '../../Modal/modal_content.css'

export default function OrderDetails({ordershow, setOrdershow,children}) {
    // const [show, setShow] = useState(false);
    return (
        <>
            {/* <div className="button" onClick={() => setOrdershow(!ordershow)}>Modal show</div> */}
            <div className={!ordershow ? "background hide " : "background "} onClick={() => setOrdershow(!ordershow)}></div>
            <section className={!ordershow ? "modal_section hide" : "modal_section"} >
                <div className="modal_container">
                    <div className="modal_header">
                        <h2 className='modal_title'>View new HERO IMAGE</h2>
                        <span className='modal_close' onClick={() => setOrdershow(!ordershow)}>x</span>
                    </div>
                    <div className="modal_content">
                    {children}
                        
                    </div>
                </div>
            </section>


        </>
    )
}
