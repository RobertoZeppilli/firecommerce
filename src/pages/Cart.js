// React & Redux
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

// components
import { Layout, CartTable } from '../components/components-provider/components-provider'

const Cart = () => {

    const { cartItems } = useSelector(state => state.cartReducer)

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <Layout>
            <div className={`container ${cartItems.length === 0 && 'text-center d-flex align-items-center justify-content-center'}`}>
                <CartTable cartItems={cartItems} />
            </div>
        </Layout >
    )
}

export default Cart