// React Module Imports
import React, { useState } from 'react';
// import {  } from 'react-dom';

// Price Slider Import
import MultiRangeSlider from "multi-range-slider-react";

// Common Components Imports
import PaginatedItems from '../../CommonComponents/Pagination';
import Colleps from '../../CommonComponents/Colleps';

import './AllProducts.css';

import {
  CheckboxGroup,
  AllCheckerCheckbox,
  Checkbox
} from "@createnl/grouped-checkboxes";

export default function AllProducts() {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(100);
  const [SideNavebar, show_SideNavebar] = useState(false);
  const [AllCategorys, setAllCategorys] = useState(false);
  // const [onChange, setOnChange] = useState({});

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const minMaxHandler= ()=>   Promise.resolve().then(() => {

    set_minValue(0);
    set_maxValue(100);
  })

  // console.log(onChange)
 if(AllCategorys){
   
 }
  return <>
    <div className="container page_padding">
      <div className="product_list">
        <div className="side_navbar">
          <p onClick={()=> show_SideNavebar(!SideNavebar)}>Filters</p>
          <div className={SideNavebar? "backShadow show": "backShadow"} onClick={()=> show_SideNavebar(!SideNavebar)}></div>
          <div className={SideNavebar? "side_navbar_content show": "side_navbar_content"}>
            <div className="price_min_max pricing">
              <div className="price_content">
                <h3>Price</h3>
                <button onClick={minMaxHandler}>Clear all</button>
              </div>
              <MultiRangeSlider
                min={useState(0)}
                max={useState(100)}
                step={5}
                ruler={true}
                label={true}
                preventWheel={false}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                  handleInput(e);
                }} />
              <div className="min_max">
                <button className='min'>{minValue}</button>
                <button className='max'>{maxValue}</button>
              </div>
            </div>
            <Colleps collapsed_title={"Collections"} classes={true} collapsed={true} >
              {/* <CheckboxGroup onChange={setOnChange}> */}
            <CheckboxGroup> 
                <label className="chackbox_container">Select All
                  <AllCheckerCheckbox className="group" style={{backGround:'red'}} />
                  <span className="checkmark classes"></span>
                </label>
                <label className="chackbox_container">Class 1
                  <Checkbox name="Class" />
                  <span className="checkmark classes"></span>
                </label>
                <label className="chackbox_container"> Class 2
                  <Checkbox name="Class" />
                  <span className="checkmark classes"></span>
                </label>
                <label className="chackbox_container"> Class 3
                  <Checkbox name="Class" />
                  <span className="checkmark classes"></span>
                </label>
                <label className="chackbox_container"> Class 4
                  <Checkbox name="Class" />
                  <span className="checkmark classes"></span>
                </label>
              </CheckboxGroup>
            </Colleps>
            {/* <CheckboxGroup onChange={setOnChange}> */}
            <CheckboxGroup> 
                <label className="chackbox_container allcategories">Select All
                  <AllCheckerCheckbox onClick={()=>setAllCategorys(!AllCategorys)} className="group" style={{backGround:'red'}} />
                  <span className="checkmark classes"></span>
                </label>
              <div className="all_categories">
                <Colleps collapsed_title={"Category"} selectCollaps={AllCategorys} collapsed={true}>
                  <label className="chackbox_container">Sub - Category 1
                    <Checkbox name="Sub - Category 1" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="chackbox_container"> Sub - Category 2
                    <Checkbox name="Sub - Category 2" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="chackbox_container"> Sub - Category 3
                    <Checkbox name="Sub - Category 3" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="chackbox_container"> Sub - Category 4
                    <Checkbox name="Sub - Category 3" />
                    <span className="checkmark"></span>
                  </label>
                </Colleps>
                <Colleps collapsed_title={"Category"} selectCollaps={AllCategorys} collapsed={false}>
                  <label className="chackbox_container">Sub - Category 1
                    <Checkbox name="Sub - Category 1" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="chackbox_container"> Sub - Category 2
                    <Checkbox name="Sub - Category 2" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="chackbox_container"> Sub - Category 3
                    <Checkbox name="Sub - Category 3" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="chackbox_container"> Sub - Category 4
                    <Checkbox name="Sub - Category 3" />
                    <span className="checkmark"></span>
                  </label>
                </Colleps>
              </div>
            </CheckboxGroup>
          </div>
        </div>
        <div className="card_list_content">
          <PaginatedItems />
        </div>
      </div>
    </div>
  </>;
}   
