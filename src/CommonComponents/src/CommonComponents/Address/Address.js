// React Module Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Address Data
import AddressData from "../../Assets/LocalData/AddressData.json"

export default function Address() {
    const [defaultAddress, setDefaultAddress] = useState({
        default: AddressData[0].address_Id,
        addresses: AddressData.map((e) => e.address_Id)
    })
    function toggle(index) {
        setDefaultAddress({ ...defaultAddress, default: defaultAddress.addresses[index] })
    }

    function toggleDEfault(index) {
        if (defaultAddress.addresses[index] === defaultAddress.default) {
            return "column default"
        } else {
            return "column"
        }
    }

    return <>

        {
            AddressData.map((e, index) => {
                return (
                    <div className={toggleDEfault(index)} key={index} onClick={() => { toggle(index) }}>
                        <h3 className='da_title'>{toggleDEfault(index) === "column" ? "set Default" : "Default"}</h3>
                        <div className="address_card">
                            <div className='personal_info_view pd_info_view'>
                                <ul>
                                    <li>
                                        <p>STREET ADDRESS</p>
                                        <h6>{e.STREET_ADDRESS}</h6>
                                    </li>
                                    <li>
                                        <p>AREA</p>
                                        <h6>{e.AREA}</h6>
                                    </li>
                                    <li>
                                        <p>CITY</p>
                                        <h6>{e.CITY}</h6>
                                    </li>
                                    <li>
                                        <p>ZIP CODE</p>
                                        <h6>{e.ZIP_CODE}</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="edit_btn">
                            <Link to="/delivery-address-edit" className="edit">Edit</Link >
                        </div>
                    </div>
                )

            })
        }


    </>;
}
