// React & toastify
import React, { useState } from 'react'
import { toast } from 'react-toastify'

// components
import { Form, Loader } from '../components/components-provider/components-provider'

// firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const auth = getAuth()

    const register = async () => {
        try {
            setLoading(true)
            await createUserWithEmailAndPassword(auth, email, password)
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            setLoading(false)
            toast.success("Registration Successfull!")
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error("Registration Failed!")
        }
    }

    return (
        <div className="register-wrapper">
            {loading && <Loader />}
            <div className="p-5 container register-container">
                <div className="register-row w-100">
                    <div className="register-col d-flex align-items-center justify-content-center">
                        <lottie-player
                            src="https://assets3.lottiefiles.com/packages/lf20_yr6zz3wv.json"
                            background="transparent"
                            speed="1"
                            style={{ width: "300", height: "300" }}
                            loop
                            autoplay>
                        </lottie-player>
                    </div>
                    <div className="register-col d-flex align-items-center justify-content-center">
                        <Form
                            type="Register"
                            email={email}
                            password={password}
                            confirmPassword={confirmPassword}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setConfirmPassword={setConfirmPassword}
                            register={register}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register