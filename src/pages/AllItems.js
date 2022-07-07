import { useEffect, useRef, useState } from "react"
import axios from "axios"

export default function AllItems() {

    const tokenRef = useRef()
    const [items, setItems] = useState([])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:4000/api/users/test', {
            headers: {
                authorization: "Bearer " + localStorage.token
            }
        })
        .then(({ data }) => {
            setIsAuth(true)
            console.log(data);
            setItems(data)
        })
        .catch(() => {
            setIsAuth(false)
        })

    }, [])


    return <>
        {/* <button onClick={getAllItem}>Reload</button>
        <input type="text" ref={tokenRef} placeholder="enter token"/> */}
        {isAuth ?
            <div>
                <h1>Welcome</h1>
                {items.map(i => <h6>{i}</h6> )}</div>
            : <h1>** Error **</h1>}
    </>
}