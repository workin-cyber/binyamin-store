import { useRef } from 'react'
import './login.style.css'
import axios from 'axios'

export default function Login3() {

    const email = useRef()
    const pass = useRef()

    const sumbitForm = (e) => {
        e.preventDefault()
        // console.log("by useRef:", email.current.value, pass.current.value);
        // console.log("by form-names:", e.target.email1.value,e.target.pass1.value);

        axios.post('http://localhost:4000/api/users/login', {
            email: email.current.value,
            password: pass.current.value
        })
            .then(({ data }) => {
                localStorage.token = data;
                console.log("success: ", data)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return <form onSubmit={sumbitForm}>
        <input name="email1" type="text" ref={email} placeholder="enter email" />
        <input name="pass1" type="password" ref={pass} placeholder="enter password" />
        <input type="submit" value="Sign In" />
    </form>
}