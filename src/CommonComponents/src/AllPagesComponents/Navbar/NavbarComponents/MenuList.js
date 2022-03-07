import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import Image Icons
import ArrowDown from '../../../Assets/icons/arrow-down.svg'
import RightArrow from '../../../Assets/icons/right-arrow.svg'

export default function MenuList(props) {
    const { manu, categories } = props;
    const [ShowMenuList, setShowMenuList] = useState(false);
    const [ShowSubMenu, setShowSubMenu] = useState(false);
    const [SubMenu, setSubMenu] = useState([]);
    const [categoryPID, setCategoryPID] =useState([]);
    const [categoryName, setCategoryName] = useState([]);
    
 useEffect(()=>{
   let categoryIds =  categories.map(e=>{
        return e.category_id
    })
    setCategoryName(categoryIds)
 },[categories])
    
    useEffect(() => {
        categoryName.map(category=>{
            fetch(`${window.baseUrl}category/${category}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                }
                else {
                    throw new Error(res.status)
                }
            })
            .then(data => setSubMenu(data.data))
            .catch((error) => {
                console.log(error);
            })
        })
    }, [categoryName])
 


useEffect(()=>{
    categories.map(e=>{
        setCategoryPID(e.category_id)
    })
  },[categories])

  const dataarr = []
  dataarr.push(SubMenu)


  dataarr.filter(dataid=>{
    return dataid.category_id == categoryPID
 })


 dataarr.map(e=>{
    console.log(e)

 })



    return <>
        <div className={ShowMenuList ? "dropdown active" : "dropdown"}>
            <button className="dropbtn" onClick={() => setShowMenuList(!ShowMenuList)} > {manu} <img src={ArrowDown} alt='ArrowDown' /></button>
            <div className="dropdown-content">
                {props.children}
                {categories.map((category, index) => {
                    return (
                        <>
                            
                            <div className={ShowSubMenu ? "sub_dropbtn active" : "sub_dropbtn"}  onClick={() => setShowSubMenu(!ShowSubMenu)} key={index}>
                                <Link to="#">Category {category.category_id}   <img src={RightArrow} alt="RightArrow" /></Link>
                                <div className="dropdown_sub_content">
                                    {
                                      dataarr.map(e=>
                                        {
                                        console.log(e)

                                        //   if(e.sub-categories){
                                        //     return <Link to="#">SUB-Category 2 </Link>
                                        //   }
                                      })
                                    }
                                    <Link to="#">SUB-Category 2 </Link>
                                </div>
                            </div>
                        </>
                    )
                })}
                <Link to="#">Category dm  <img src={RightArrow} alt="RightArrow" /></Link>
                    <Link to="#">Category dm  <img src={RightArrow} alt="RightArrow" /></Link>
            </div>
        </div>
    </>;
}
