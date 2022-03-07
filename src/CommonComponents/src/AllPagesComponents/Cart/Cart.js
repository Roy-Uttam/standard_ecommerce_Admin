import React,{useState} from 'react';
// import BlackButton from '../../CommonComponents/Buttons/BlackButton';
import CloseBtn from "../../Assets/icons/close-button.svg";
import ImgIcon from "../../Assets/icons/img-icon.svg";
import "./Cart.css"
import Quantity from '../../CommonComponents/Quantity';
import { Link } from 'react-router-dom';


export default function Cart({showCart, setShowCart, cartItems, toAdd}) {

    const [totalPrice ] = useState(1200)

    function bdCurrencyFormat(num) {
        var n1, n2;
        num = num + '' || '';
        n1 = num.split('.');
        n2 = n1[1] || null;
        n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
        num = n2 ? n1 + '.' + n2 : n1;
        return num;
    }
  return <>
    <div className={ showCart? "overlayer" : "overlayer hide"} onClick={()=>setShowCart(!showCart)}></div>
    <div className={ showCart? "cart_content" : "cart_content cart_content_hide "} >
        <div className="cart_heading">
            <h3 className="cart_title">Your Shopping Cart</h3>
            <button onClick={()=>setShowCart(!showCart)} className='close_btn'><img src={CloseBtn} alt="CloseBtn" /></button>
        </div>
        <div className="cart_body_title">
                <p className="selected">Selected</p>
                <p className="items">1 Item</p>
        </div>
        <div className="cart_body">
            {cartItems.map(item=>{
                return(
                    <div className="cart_products_list" key={item.id}>
                        <div className="cart_body_products">
                            <img src={ImgIcon} alt="thumb" />
                            <div className="cart_product_content">
                                <h3 className="cart_pro_name">product Name</h3>
                                <p className='cart_category'>Category</p>
                                <p className='sub_category'>Sub-Category</p>
                            </div>
                            <div className="cart_product_price">
                                <h3 className='product_price'>৳ {bdCurrencyFormat(totalPrice)}</h3>
                                <Quantity cartItems={cartItems} toAdd={toAdd}/>
                            </div>
                        </div>
                        <div className="delete">
                            <button className='delete_btn'>Delete</button>
                        </div>
                    </div>
                )
            })}
            {/* <div className="cart_products_list">
                <div className="cart_body_products">
                <img src={ImgIcon} alt="thumb" />
                <div className="cart_product_content">
                    <h3 className="cart_pro_name">Item Name 1</h3>
                    <p className='cart_category'>Category</p>
                    <p className='sub_category'>Sub-Category</p>
                </div>
                <div className="cart_product_price">
                    <h3 className='product_price'>৳ {bdCurrencyFormat(totalPrice)}</h3>
                    <Quantity cartItems/>
                </div>
                </div>
                <div className="delete">
                    <button className='delete_btn'>Delete</button>
                </div>
            </div>
            <div className="cart_products_list">
                <div className="cart_body_products">
                <img src={ImgIcon} alt="thumb" />
                <div className="cart_product_content">
                    <h3 className="cart_pro_name">Item Name 1</h3>
                    <p className='cart_category'>Category</p>
                    <p className='sub_category'>Sub-Category</p>
                </div>
                <div className="cart_product_price">
                    <h3 className='product_price'>৳ {bdCurrencyFormat(totalPrice)}</h3>
                    <Quantity cartItems/>
                </div>
                </div>
                <div className="delete">
                    <button className='delete_btn'>Delete</button>
                </div>
            </div> */}
        </div>
        <div className="cart_footer">
            <div className="cart_footer_content">
                <h3 className="total">Total</h3>
                <h3 className="amount">৳ {bdCurrencyFormat(totalPrice)}</h3>
            </div>
            {/* <BlackButton>CHECKOUT</BlackButton> */}
            <Link className='Common_btn' to="/checkout" onClick={()=>setShowCart(!showCart)} >Confirm order</Link>
        </div>
    </div>
  </>;
}   
