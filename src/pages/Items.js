import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import LinkItem from "../components/LinkItem";
import CartContext from "../Context/CartContext";

export default function Items() {
    const { cart, setCart } = useContext(CartContext);

    const { cat } = useParams() // let cat=  useParams.cat

    const [items, setItems] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/' + cat)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    if (!items) return <h3>Loading...</h3>

    return <div className="catList">
        {items.length ? items.map(i => {
            return <>
                <LinkItem key={'item' + i.id} where={'/item/' + i.id} item={i}>
                    <div className="cat img">
                        <h4>{i.title}</h4>
                        <img src={i.image} />
                        <h5>{i.price}</h5>
                    </div>
                </LinkItem>
                <button onClick={() => { setCart([...cart, i]) }}>Add to cart</button>
            </>
        })

            : <h4>not found</h4>}
    </div >
}