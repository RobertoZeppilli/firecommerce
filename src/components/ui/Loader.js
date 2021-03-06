import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loader = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-80">
            <FaSpinner className="loader" size={60} color="rgba(8, 206, 163, 0.774)" />
        </div>
    )
}

export default Loader