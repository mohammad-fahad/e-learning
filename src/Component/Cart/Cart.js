import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const course = props.course;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total += course.price;
        console.log(total);
    }
    return (
        <div className="cart" style={{ width: '16rem' }}>
            <h5>Course Purchased: {cart.length}</h5>
            <h4>Total: ${ total}</h4>
            <button className="btn btn-success">Check Out</button>
            {
                cart.map(crt =>
                    <div className="card col-md-12 mb 3" style={{ width: '16rem' }}>
                        <div className="card-body">
                            <img className="image-fluid" style={{ width: '100%' }} src={crt.image} alt=""/>
                            <h5 className="card-title">{crt.title}</h5>
                            <p className="card-text">${ crt.price}</p>
                        </div>
                        
                        
                        
                    </div>



                )
            }
        </div>)}


    export default Cart;