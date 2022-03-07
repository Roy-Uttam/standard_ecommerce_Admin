import React from 'react';
import '../../Modal/modal_content.css'

export default function ViewModal({viewshow,setViewshow,children}) {
    // const [show, setShow] = useState(false);
    return (
        <>
            {/* <div className="button" onClick={() => setViewshow(!viewshow)}>Modal show</div>s */}
            <div className={!viewshow ? "background hide " : "background"} onClick={() => setViewshow(!viewshow)}></div>
            <section className={!viewshow ? "modal_section hide" : "modal_section"} >
                <div className="modal_container">
                    <div className="modal_header">
                        <h2 className='modal_title'>View new HERO IMAGE</h2>
                        <span className='modal_close' onClick={() => setViewshow(!viewshow)}>x</span>
                    </div>
                    <div className="modal_content">
                    {children}
                        
                    </div>
                </div>
            </section>


        </>
    )
}
