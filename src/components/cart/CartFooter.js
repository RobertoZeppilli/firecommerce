import React from 'react'

const CartFooter = ({total, showModal}) => {
    return (
        <div className="d-flex justify-content-between my-5">
            <h2 className="total-amount">Total: ${total}</h2>
            <button className="myBtn" onClick={showModal}>
                Place Order
            </button>
        </div>
    )
}

export default CartFooter